import React, { useEffect } from 'react';

/**
 * SEOHead Component
 * Manages document head meta tags, Open Graph, Twitter Cards, Canonical links, 
 * Geo tags for UAE local search, and Schema.org JSON-LD structured data.
 */
export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  structuredData,
  ogType = 'website',
}) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to create or update meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to create or update link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag(
        'name',
        'keywords',
        Array.isArray(keywords) ? keywords.join(', ') : keywords
      );
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Local SEO & Geo Tags (Dubai & UAE)
    setMetaTag('name', 'geo.region', 'AE-DU');
    setMetaTag('name', 'geo.placename', 'Dubai, United Arab Emirates');
    setMetaTag('name', 'geo.position', '25.2048;55.2708');
    setMetaTag('name', 'ICBM', '25.2048, 55.2708');

    // 4. Canonical URL
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // 5. Open Graph / Facebook
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    if (canonical) setMetaTag('property', 'og:url', canonical);
    if (ogImage) setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Yellow Springs Event Management UAE');
    setMetaTag('property', 'og:locale', 'en_AE');

    // 6. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (ogImage) setMetaTag('name', 'twitter:image', ogImage);

    // 7. Dynamic JSON-LD injection into head
    if (structuredData) {
      let script = document.getElementById('dynamic-seo-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-seo-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Optional clean-up for script if needed
    };
  }, [title, description, keywords, canonical, ogImage, structuredData, ogType]);

  // Synchronous fallback tag for crawlers that read initial DOM render
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
