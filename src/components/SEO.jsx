import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SEO = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const defaultTitle = "Avani EcoCare Lab Pvt Ltd - Scientific Testing & Analysis";
    document.title = title ? `${title} | Avani EcoCare Labs` : defaultTitle;

    // 2. Update Description
    const defaultDesc = "Avani EcoCare is a comprehensive, integrated firm specializing in a wide range of polymer and metal testing services.";
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description || defaultDesc);

    // 3. Update Keywords
    const defaultKeywords = "testing, metal testing, polymer testing, material analysis, Avani EcoCare";
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", keywords || defaultKeywords);

    // 4. Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title ? `${title} | Avani EcoCare Labs` : defaultTitle);

    // 5. Update Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description || defaultDesc);

    // 6. Update Open Graph URL
    const currentUrl = `https://www.avaniecocare.com${location.pathname}`;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", currentUrl);

    // 7. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

  }, [title, description, keywords, location]);

  return null;
};

export default SEO;
