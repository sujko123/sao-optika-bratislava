import { useEffect } from 'react';

import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentSettings,
} from '@/lib/cookieConsent';

const GA_MEASUREMENT_ID = 'G-Z2FEP3Q6JE';
const GA_SCRIPT_ID = 'sao-ga-script';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const updateAnalyticsConsent = (settings: CookieConsentSettings | null) => {
  if (!window.gtag) {
    return;
  }

  window.gtag('consent', 'update', {
    analytics_storage: settings?.analytics ? 'granted' : 'denied',
    ad_storage: settings?.marketing ? 'granted' : 'denied',
    ad_user_data: settings?.marketing ? 'granted' : 'denied',
    ad_personalization: settings?.marketing ? 'granted' : 'denied',
    functionality_storage: settings?.functional ? 'granted' : 'denied',
  });
};

const loadGoogleAnalytics = () => {
  if (document.getElementById(GA_SCRIPT_ID)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
  });
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
};

const GoogleAnalytics = () => {
  useEffect(() => {
    const syncAnalytics = () => {
      const settings = readCookieConsent();

      if (settings?.analytics || settings?.marketing || settings?.functional) {
        loadGoogleAnalytics();
      }

      updateAnalyticsConsent(settings);
    };

    syncAnalytics();

    const handleConsentChange = () => {
      syncAnalytics();
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
