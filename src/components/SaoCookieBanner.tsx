import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sao-cookie-consent';

const SaoCookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[70] px-4">
      <div className="sao-frame mx-auto flex max-w-5xl flex-col gap-4 bg-background/95 px-5 py-5 backdrop-blur md:flex-row md:items-center md:justify-between md:px-7">
        <div className="max-w-2xl">
          <p className="text-base font-semibold text-foreground">
            Používame cookies pre lepší zážitok!
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Web používa nevyhnutné cookies pre správne fungovanie a voliteľné cookies pre
            pohodlnejšie používanie stránky.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice('rejected')}
            className="sao-frame-soft px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Len nevyhnutné
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="sao-frame-soft bg-sao-green px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Súhlasím
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaoCookieBanner;
