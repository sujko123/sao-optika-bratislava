import { useEffect } from 'react';

import cursorPlaceholder from '@/assets/cursor-placeholder.png';

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
      html, body, a, button, [role="button"] {
        cursor: url("${cursorPlaceholder}") 12 12, auto;
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
