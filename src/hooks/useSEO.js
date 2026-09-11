import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://zenalphamedia.com';

/**
 * useSEO — Dynamically manages all page-level SEO meta tags.
 *
 * @param {Object} options
 * @param {string} options.title        — Page title (auto-appends site name if missing)
 * @param {string} options.description  — Meta description (max ~155 chars recommended)
 * @param {string} [options.keywords]   — Comma-separated keywords
 * @param {string} [options.canonicalUrl] — Override canonical URL (defaults to current path)
 * @param {string} [options.ogType]     — Open Graph type (defaults to 'website')
 * @param {string} [options.ogImage]    — Open Graph image URL
 */
export function useSEO({ title, description, keywords, canonicalUrl, ogType, ogImage }) {
  const location = useLocation();

  useEffect(() => {
    // ── Page Title ──
    if (title) {
      document.title = title;
    }

    // ── Meta Description ──
    if (description) {
      setMeta('name', 'description', description);
    }

    // ── Meta Keywords ──
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // ── Canonical URL ──
    const canonical = canonicalUrl || `${BASE_URL}${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // ── Open Graph Tags ──
    if (title) {
      setMeta('property', 'og:title', title);
    }
    if (description) {
      setMeta('property', 'og:description', description);
    }
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', ogType || 'website');
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
    }

    // ── Twitter Card Tags ──
    if (title) {
      setMeta('name', 'twitter:title', title);
    }
    if (description) {
      setMeta('name', 'twitter:description', description);
    }
    if (ogImage) {
      setMeta('name', 'twitter:image', ogImage);
    }

  }, [title, description, keywords, canonicalUrl, ogType, ogImage, location.pathname]);
}

/**
 * Helper — Create or update a <meta> tag by attribute type and name.
 */
function setMeta(attributeType, attributeName, content) {
  let element = document.querySelector(`meta[${attributeType}="${attributeName}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeType, attributeName);
    document.head.appendChild(element);
  }
  element.content = content;
}
