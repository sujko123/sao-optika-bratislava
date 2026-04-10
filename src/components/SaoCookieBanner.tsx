import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sao-cookie-consent';

type CookieSettings = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultSettings: CookieSettings = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const SaoCookieBanner = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'summary' | 'details'>('summary');
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      setOpen(true);
      setMode('summary');
      return;
    }

    try {
      const parsed = JSON.parse(storedValue) as Partial<CookieSettings>;
      setSettings({
        necessary: true,
        functional: Boolean(parsed.functional),
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setOpen(true);
      setMode('summary');
    }
  }, []);

  const updateSetting = (key: 'functional' | 'analytics' | 'marketing') => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  const saveSettings = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    setOpen(false);
    setMode('summary');
  };

  const rejectAll = () => {
    const nextSettings: CookieSettings = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setSettings(nextSettings);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSettings));
    setOpen(false);
    setMode('summary');
  };

  const acceptAll = () => {
    const nextSettings: CookieSettings = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setSettings(nextSettings);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSettings));
    setOpen(false);
    setMode('summary');
  };

  const Toggle = ({
    checked,
    onClick,
    disabled = false,
  }: {
    checked: boolean;
    onClick?: () => void;
    disabled?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={checked}
      className={`relative h-[20px] w-[34px] rounded-full transition-colors ${
        checked ? 'bg-[#211d1d]' : 'bg-[#d6d1d1]'
      } ${disabled ? 'cursor-default opacity-90' : ''}`}
    >
      <span
        className={`absolute top-1/2 h-[12px] w-[12px] -translate-y-1/2 rounded-full bg-white transition-all ${
          checked ? 'left-[18px]' : 'left-[4px]'
        }`}
      />
    </button>
  );

  const SettingCard = ({
    title,
    description,
    checked,
    onToggle,
    alwaysActive = false,
  }: {
    title: string;
    description: string;
    checked: boolean;
    onToggle?: () => void;
    alwaysActive?: boolean;
  }) => (
    <div className="rounded-[16px] bg-[#f7f5f5] px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[14px] font-medium text-[#211d1d]">{title}</p>
        {alwaysActive ? (
          <span className="text-[14px] text-[#211d1d]">Always active</span>
        ) : (
          <Toggle checked={checked} onClick={onToggle} />
        )}
      </div>
      <p className="mt-2 text-[13px] leading-[1.45] text-[#4f4a4a]">{description}</p>
    </div>
  );

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      {open ? (
        <div className="w-[min(360px,calc(100vw-2rem))] rounded-[24px] border-[4px] border-[#211d1d] bg-white px-4 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-[18px] font-bold text-[#211d1d]">Cookie Nastavenia</h3>
              <p className="text-[14px] leading-[1.45] text-[#6a6666]">
                Používame cookies, aby sme zlepšili váš zážitok, analyzovali návštevnosť stránky
                a poskytovali personalizovaný obsah. Zásady ochrany osobných údajov.
              </p>
            </div>

            {mode === 'summary' ? (
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full bg-[#211d1d] px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                >
                  Zamietnuť
                </button>
                <button
                  type="button"
                  onClick={() => setMode('details')}
                  className="rounded-full bg-[#211d1d] px-5 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                >
                  Upraviť
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-[#ECC9E3] px-5 py-2 text-[13px] font-medium text-[#211d1d] transition-opacity hover:opacity-85"
                >
                  Akceptovať
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <SettingCard
                    title="Nevyhnutné"
                    checked={true}
                    alwaysActive
                    description="Nevyhnutné cookies zabezpečujú kľúčové funkcie, ako sú bezpečnosť, správa siete a dostupnosť."
                  />
                  <SettingCard
                    title="Funkčné"
                    checked={settings.functional}
                    onToggle={() => updateSetting('functional')}
                    description="Cookies týkajúce sa preferencií sú také, ktoré ukladajú informácie o vašich preferenciách a nastaveniach na stránkach, ktoré navštívite. Tieto cookies si zapamätajú vaše jazykové nastavenia, rozloženie stránky, témy alebo iné preferencie, aby vám mohli poskytovať prispôsobený zážitok pri ďalšej návšteve."
                  />
                  <SettingCard
                    title="Analytické"
                    checked={settings.analytics}
                    onToggle={() => updateSetting('analytics')}
                    description="Analytické cookies zhromažďujú informácie o tom, ako návštevníci používajú webovú stránku. Pomáhajú analyzovať návštevnosť, sledovať výkonnosť stránky a identifikovať oblasti na zlepšenie. Všetky údaje sú spracovávané anonymne."
                  />
                  <SettingCard
                    title="Reklamné"
                    checked={settings.marketing}
                    onToggle={() => updateSetting('marketing')}
                    description="Tieto cookies sa používajú na personalizáciu reklám podľa vašich záujmov a správania na stránke. Pomáhajú nám sledovať účinnosť reklám a ich vplyv na vaše interakcie, čím môžeme zlepšiť relevantnosť a efektivitu zobrazovaných reklamných obsahov."
                  />
                </div>

                <button
                  type="button"
                  onClick={saveSettings}
                  className="w-full rounded-full bg-[#ECC9E3] px-5 py-3 text-[16px] font-medium text-[#211d1d] transition-opacity hover:opacity-85"
                >
                  Uložiť
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <button
          type="button"
          aria-label="Otvoriť cookie nastavenia"
          onClick={() => {
            setOpen(true);
            setMode('summary');
          }}
          className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#ECC9E3] text-[#211d1d] transition-transform hover:scale-[1.04]"
        >
          <Cookie size={20} strokeWidth={2.1} />
        </button>
      )}
    </div>
  );
};

export default SaoCookieBanner;
