import saoLogo from '@/assets/sao_logo.png';
import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const SaoFooter = () => {
  return (
    <footer id="contact" className="px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.2fr]">
          <div className="sao-frame flex flex-col justify-between gap-8 p-6 md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Kontakt
              </p>
              <img
                src={saoLogo}
                alt="SAO logo"
                className="mt-4 h-auto w-[150px]"
                width={300}
                height={128}
              />
              <p className="mt-5 max-w-md text-sm italic text-muted-foreground">
                "Vidieť jasnejšie, žiť krajšie"
              </p>
            </div>

            <div className="space-y-4 text-sm text-foreground">
              <a
                href="tel:+421944945636"
                className="flex items-center gap-3 transition-opacity hover:opacity-70"
              >
                <Phone size={18} />
                <span>+421 944 945 636</span>
              </a>
              <a
                href="mailto:info@saooptika.sk"
                className="flex items-center gap-3 transition-opacity hover:opacity-70"
              >
                <Mail size={18} />
                <span>info@saooptika.sk</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SAO+Optika+Bratislava+Palisady+736%2F46%2C+811+06+Bratislava"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-opacity hover:opacity-70"
              >
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>SAO Optika Bratislava, Palisády 736/46, 811 06 Slovensko</span>
              </a>
            </div>

            <a
              href="https://www.instagram.com/saooptika/"
              target="_blank"
              rel="noopener noreferrer"
              className="sao-frame-soft inline-flex w-fit items-center gap-2 px-4 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
          </div>

          <div className="sao-frame overflow-hidden p-2">
            <iframe
              src="https://www.google.com/maps?q=SAO%20Optika%20Bratislava%2C%20Palis%C3%A1dy%20736%2F46%2C%20811%2006%20Bratislava&z=16&output=embed"
              className="sao-inset-frame min-h-[420px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAO Optika mapa"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="sao-frame p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Clock3 size={18} />
              <h3 className="text-lg font-bold tracking-wider text-foreground">OTVÁRACIE HODINY</h3>
            </div>
            <div className="space-y-4 text-sm text-foreground">
              <div className="flex items-center justify-between gap-6 border-b border-black/10 pb-3">
                <span>Pondelok - Piatok</span>
                <span className="font-semibold">10 - 18</span>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-black/10 pb-3">
                <span>Sobota</span>
                <span className="font-semibold">10 - 13</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span>Nedeľa</span>
                <span className="font-semibold">Zatvorené</span>
              </div>
            </div>
          </div>

          <div className="sao-frame flex flex-col items-start justify-between gap-5 bg-sao-pink/55 p-6 md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Nájdete nás tu
              </p>
              <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-foreground">
                Palisády 736/46, 811 06 Bratislava. Zastav sa na meranie zraku, výber rámov
                alebo len na krátku konzultáciu.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SAO+Optika+Bratislava+Palisady+736%2F46%2C+811+06+Bratislava"
              target="_blank"
              rel="noopener noreferrer"
              className="sao-frame-soft inline-flex items-center gap-2 bg-sao-green px-5 py-3 text-sm font-semibold tracking-wide text-foreground transition-transform hover:-translate-y-0.5"
            >
              <span>NÁJDETE NÁS TU!</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SaoFooter;
