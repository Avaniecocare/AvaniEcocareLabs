import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { SITE_URL } from "./src/content/site.js";
import { canonicalPath, formatTitle, pages } from "./src/content/pages.js";

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const FORCE_NOINDEX = process.env.VITE_NOINDEX === "true";

function seoBlock({ title, description, url, noindex: pageNoindex = false }) {
  const noindex = FORCE_NOINDEX || pageNoindex;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}" />`,
    url ? `<link rel="canonical" href="${url}" />` : "",
    url ? `<meta property="og:url" content="${url}" />` : "",
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

/**
 * After the build, writes a copy of index.html for every route with that route's
 * <title>, description and canonical already in place. Static hosts (GitHub
 * Pages) then serve deep links with a 200 and correct meta tags, crawlers and
 * link previews see per-page metadata without running JS, and the SPA takes
 * over on load. Also emits sitemap.xml, a redirect for the old /service URL
 * and a 404.html fallback.
 */
function staticRoutes() {
  let outDir;
  return {
    name: "avani-static-routes",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const template = readFileSync(join(outDir, "index.html"), "utf8");
      const withSeo = (block) => template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, block);

      for (const page of pages) {
        const url = `${SITE_URL}${canonicalPath(page.path)}`;
        const html = withSeo(seoBlock({ title: formatTitle(page.title), description: page.description, url }));
        const file = page.path === "/" ? join(outDir, "index.html") : join(outDir, page.path, "index.html");
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, html);
      }

      writeFileSync(
        join(outDir, "404.html"),
        withSeo(
          seoBlock({
            title: formatTitle("Page not found"),
            description: "The page you're looking for doesn't exist or has moved.",
            noindex: true,
          })
        )
      );

      const target = `${SITE_URL}/services/`;
      mkdirSync(join(outDir, "service"), { recursive: true });
      writeFileSync(
        join(outDir, "service", "index.html"),
        `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${target}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=/services/"></head><body><a href="/services/">Testing services</a></body></html>`
      );

      if (FORCE_NOINDEX) writeFileSync(join(outDir, "robots.txt"), "User-agent: *\nDisallow: /\n");

      const today = new Date().toISOString().slice(0, 10);
      const urls = pages
        .map((p) => `  <url><loc>${SITE_URL}${canonicalPath(p.path)}</loc><lastmod>${today}</lastmod></url>`)
        .join("\n");
      writeFileSync(
        join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), staticRoutes()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 5173,
  },
});
