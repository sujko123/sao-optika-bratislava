export const COOKIE_CONSENT_STORAGE_KEY = 'sao-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'sao-cookie-consent-change';

export type CookieConsentSettings = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const readCookieConsent = (): CookieConsentSettings | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(storedValue) as Partial<CookieConsentSettings>;

    return {
      necessary: true,
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
};

export const persistCookieConsent = (settings: CookieConsentSettings) => {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: settings }));
};
