import { useEffect } from "react";
import { SITE_URL } from "../content/site.js";
import { canonicalPath, formatTitle, getPageMeta } from "../content/pages.js";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Keeps <title>, description, canonical and social tags in sync on client-side
 * navigation. Pass a route `path` to use the shared metadata in content/pages.js,
 * or explicit `title`/`description` for pages without a route entry (404).
 */
// Preview/demo builds (VITE_NOINDEX=true) must never be indexed alongside the live site.
const FORCE_NOINDEX = import.meta.env.VITE_NOINDEX === "true";

export function useSeo({ path, title, description, noindex: pageNoindex = false }) {
  const noindex = FORCE_NOINDEX || pageNoindex;
  const meta = path ? getPageMeta(path) : null;
  const finalTitle = formatTitle(title ?? meta?.title ?? "Avani Ecocare Labs");
  const finalDescription = description ?? meta?.description ?? "";

  useEffect(() => {
    document.title = finalTitle;
    setMeta("name", "description", finalDescription);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDescription);
    if (path) {
      const url = `${SITE_URL}${canonicalPath(path)}`;
      setCanonical(url);
      setMeta("property", "og:url", url);
    }
  }, [finalTitle, finalDescription, noindex, path]);
}
