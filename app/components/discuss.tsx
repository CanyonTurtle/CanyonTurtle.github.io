'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Giscus comments, backed by GitHub Discussions on this repo.
// The script is injected on the client because React won't execute a
// <script> tag rendered via JSX, and it needs to reload on client-side navigation.
export function Discuss() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    Object.entries({
      'data-repo': 'CanyonTurtle/CanyonTurtle.github.io',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnk1OTUyNDkyMQ==',
      'data-category': 'General',
      'data-category-id': 'DIC_kwDOA4xHOc4DHYzO',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'en',
      'data-loading': 'lazy',
    }).forEach(([key, value]) => script.setAttribute(key, value));

    container.appendChild(script);
    return () => {
      container.innerHTML = '';
    };
  }, [pathname]);

  return <div ref={ref} className="giscus mt-12" />;
}
