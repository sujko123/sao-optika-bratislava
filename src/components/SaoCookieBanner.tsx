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
  functional: true,
  analytics: true,
  marketing: true,
};

const SaoCookieBanner = () => {
  const [open, setOpen] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);
  const [mode, setMode] = useState<'summary' | 'details'>('summary');
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      setOpen(true);
      setIsBlocking(true);
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
      setIsBlocking(false);
    } catch {
      setOpen(true);
      setIsBlocking(true);
      setMode('summary');
    }
  }, []);

  useEffect(() => {
    document.body.dataset.cookieModalOpen = open && isBlocking ? 'true' : 'false';

    if (!open || !isBlocking) {
      document.body.style.overflow = '';
      return () => {
        delete document.body.dataset.cookieModalOpen;
      };
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      delete document.body.dataset.cookieModalOpen;
      document.body.style.overflow = previousOverflow;
    };
  }, [open, isBlocking]);

  const updateSetting = (key: 'functional' | 'analytics' | 'marketing') => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  const closeInlinePanel = () => {
    setOpen(false);
    setIsBlocking(false);
    setMode('summary');
  };

  const saveSettings = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    closeInlinePanel();
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
    closeInlinePanel();
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
    closeInlinePanel();
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
    <div className="rounded-[16px] bg-[#f7f5f5] px-4 py-3 text-left">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[14px] font-medium text-[#211d1d]">{title}</p>
        {alwaysActive ? (
          <span className="text-[14px] text-[#211d1d]">Always active</span>
        ) : (
          <Toggle checked={checked} onClick={onToggle} />
        )}
      </div>
      <p className="mt-2 text-left text-[13px] leading-[1.45] text-[#4f4a4a]">{description}</p>
    </div>
  );

  return (
    <div
      className={`z-[80] ${
        open && isBlocking
          ? 'fixed inset-0'
          : open
            ? 'fixed inset-0 flex items-center justify-center p-4 lg:inset-auto lg:bottom-10 lg:right-10 lg:p-0'
            : 'mt-3 flex justify-center lg:fixed lg:bottom-10 lg:right-10 lg:mt-0'
      }`}
    >
      {open ? (
        <div
          className={
            open && isBlocking
              ? 'flex min-h-screen items-center justify-center bg-[#211d1d]/45 p-4 sm:p-6 lg:items-end lg:justify-end'
              : 'w-full lg:w-auto'
          }
        >
          <div className="animate-[cookie-panel-in_220ms_ease-out] w-[min(308px,calc(100vw-1rem))] rounded-[22px] border-[4px] border-[#211d1d] bg-white px-2.5 py-2.5 shadow-[0_24px_80px_rgba(33,29,29,0.18)] sm:w-[min(360px,calc(100vw-2rem))] sm:rounded-[24px] sm:px-4 sm:py-4">
            <div className="space-y-2.5 sm:space-y-4">
              <div className="space-y-2 text-left">
                <h3 className="text-[16px] font-bold text-[#211d1d] sm:text-[18px]">Cookie Nastavenia</h3>
                <p className="text-[12px] leading-[1.35] text-[#6a6666] sm:text-[14px] sm:leading-[1.45]">
                  Používame cookies, aby sme zlepšili váš zážitok, analyzovali návštevnosť stránky
                  a poskytovali personalizovaný obsah.{' '}
                  <a
                    href="https://kalendar.saooptika.sk/zou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-medium text-[#211d1d] underline underline-offset-4"
                    >
                    <span className="cursor-pointer">Zásady ochrany osobných údajov</span>
                  </a>
                </p>
              </div>

              {mode === 'summary' ? (
                <div className="grid grid-cols-3 gap-1.5 pt-1 sm:gap-3">
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="rounded-full bg-[#211d1d] px-1.5 py-2 text-[10px] font-medium text-white transition-opacity hover:opacity-85 sm:px-4 sm:text-[13px]"
                  >
                    Zamietnuť
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('details')}
                    className="rounded-full bg-[#211d1d] px-1.5 py-2 text-[10px] font-medium text-white transition-opacity hover:opacity-85 sm:px-5 sm:text-[13px]"
                  >
                    Upraviť
                  </button>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="rounded-full bg-[#ECC9E3] px-1.5 py-2 text-center text-[10px] font-medium leading-none text-[#211d1d] transition-opacity hover:opacity-85 sm:px-5 sm:text-[13px]"
                  >
                    Akceptovať
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-2 sm:space-y-3">
                    <SettingCard
                      title="Nevyhnutné"
                      checked={true}
                      alwaysActive
                      description="Nevyhnutné cookies zabezpečujú základné funkcie webu, bez ktorých stránka nemôže správne fungovať."
                    />
                    <SettingCard
                      title="Funkčné"
                      checked={settings.functional}
                      onToggle={() => updateSetting('functional')}
                      description="Funkčné cookies si pamätajú vaše preferencie a nastavenia, aby bol web pohodlnejší pri ďalších návštevách."
                    />
                    <SettingCard
                      title="Analytické"
                      checked={settings.analytics}
                      onToggle={() => updateSetting('analytics')}
                      description="Analytické cookies nám pomáhajú pochopiť návštevnosť a zlepšovať výkon a obsah stránky."
                    />
                    <SettingCard
                      title="Marketingové"
                      checked={settings.marketing}
                      onToggle={() => updateSetting('marketing')}
                      description="Marketingové cookies slúžia na personalizáciu reklamy a vyhodnotenie relevantnosti kampaní."
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {!isBlocking ? (
                      <button
                        type="button"
                        onClick={closeInlinePanel}
                        className="rounded-full border border-[#211d1d] px-4 py-2 text-[13px] font-medium text-[#211d1d] transition-opacity hover:opacity-85"
                      >
                        Zavrieť
                      </button>
                    ) : null}
                    <button
                      type="button"
                      onClick={saveSettings}
                      className="rounded-full bg-[#ECC9E3] px-4 py-2 text-[14px] font-medium text-[#211d1d] transition-opacity hover:opacity-85"
                    >
                      Uložiť
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            aria-label="Otvorit cookie nastavenia"
            onClick={() => {
              setOpen(true);
              setMode('summary');
              setIsBlocking(true);
            }}
            className="hidden h-[38px] w-[52px] items-center justify-center rounded-[16px] bg-[#ECC9E3] text-[#211d1d] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.96] lg:flex"
          >
            <Cookie size={20} strokeWidth={2.1} />
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setMode('summary');
              setIsBlocking(true);
            }}
            className="text-center text-[13px] font-medium text-[#211d1d] underline decoration-[#ECC9E3] decoration-2 underline-offset-4 transition-all duration-200 hover:opacity-70 active:scale-[0.98] lg:hidden"
          >
            Používame cookies pre lepší zážitok!
          </button>
        </>
      )}
    </div>
  );
};

export default SaoCookieBanner;
