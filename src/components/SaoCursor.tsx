import { useEffect } from 'react';

import cursorPlaceholder from '@/assets/mouseB.png';

const SaoCursor = () => {
  useEffect(() => {
    const styleId = 'sao-custom-cursor-style';
    const previousStyle = document.getElementById(styleId);

    if (previousStyle) {
      previousStyle.remove();
    }

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = `
      html:not(:has(body[data-cookie-modal-open="true"])),
      body:not([data-cookie-modal-open="true"]),
      body:not([data-cookie-modal-open="true"]) a,
      body:not([data-cookie-modal-open="true"]) button,
      body:not([data-cookie-modal-open="true"]) [role="button"],
      body:not([data-cookie-modal-open="true"]) .cursor-pointer,
      body:not([data-cookie-modal-open="true"]) [aria-roledescription="carousel"],
      body:not([data-cookie-modal-open="true"]) [aria-roledescription="slide"] {
        cursor: url("${cursorPlaceholder}") 4 4, auto;
      }

      body[data-cookie-modal-open="true"],
      body[data-cookie-modal-open="true"] * {
        cursor: auto !important;
      }

      body[data-cookie-modal-open="true"] a,
      body[data-cookie-modal-open="true"] button,
      body[data-cookie-modal-open="true"] [role="button"],
      body[data-cookie-modal-open="true"] .cursor-pointer {
        cursor: pointer !important;
      }
    `;

    document.head.appendChild(styleElement);

    return () => {
      styleElement.remove();
    };
  }, []);

  return null;
};

export default SaoCursor;
