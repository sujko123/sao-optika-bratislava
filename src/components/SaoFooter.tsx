import saoLogo from '@/assets/sao_logo.png';
import { Instagram } from 'lucide-react';

import SaoCookieBanner from '@/components/SaoCookieBanner';

const hoverLinkClass = 'transition-colors hover:text-[hsl(var(--sao-pink))]';
const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=SAO+Optika+Bratislava+Palisady+736%2F46%2C+811+06+Bratislava';

const SaoFooter = () => {
  return (
    <footer id="contact" className="border-t-[2px] border-black px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 text-center md:grid-cols-[0.8fr_1.15fr_0.8fr] md:gap-10 md:text-left lg:gap-12">
        <div className="flex w-full flex-col items-center md:items-start">
          <div className="flex w-full max-w-[11rem] flex-col items-center md:max-w-none md:items-start">
            <h3 className="w-full text-center text-[20px] font-bold uppercase tracking-tight md:text-left">
              OTVARACIE HODINY
            </h3>

            <div className="mt-5 flex w-full flex-col items-center gap-5 text-[16px] leading-[1.25] md:items-start">
              <div className="w-full text-center md:text-left">
                <p>Pondelok - Piatok</p>
                <p>10 - 18</p>
              </div>

              <div className="w-full text-center md:text-left">
                <p>Sobota</p>
                <p>10 - 13</p>
              </div>

              <div className="w-full text-center md:text-left">
                <p>Nedela</p>
                <p>Zatvorene</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-5">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-[17rem] overflow-hidden rounded-[2rem] border-[4px] border-foreground md:max-w-[17rem] lg:max-w-none"
          >
            <iframe
              src="https://www.google.com/maps?q=SAO%20Optika%20Bratislava%2C%20Palis%C3%A1dy%20736%2F46%2C%20811%2006%20Bratislava&z=16&output=embed"
              className="h-[235px] w-full md:h-[165px] lg:h-[260px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAO Optika mapa"
            />
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full max-w-[18rem] flex-col items-center text-center text-[16px] leading-[1.18] text-foreground ${hoverLinkClass}`}
          >
            <p className="w-full text-center">SAO Optika Bratislava</p>
            <p className="w-full text-center">Palisady 736/46, 811 06 Slovensko</p>
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
          <img
            src={saoLogo}
            alt="SAO logo"
            className="hidden h-auto w-[140px] md:block lg:w-[150px]"
            width={300}
            height={128}
          />

          <p className="hidden max-w-xs text-[15px] md:block">"Vidiet jasnejsie, zit krajsie"</p>

          <div className="space-y-2 text-[16px] leading-[1.25]">
            <a href="tel:+421944945636" className={`block ${hoverLinkClass}`}>
              +421 944 945 636
            </a>
            <a href="mailto:info@saooptika.sk" className={`block ${hoverLinkClass}`}>
              info@saooptika.sk
            </a>
          </div>

          <a
            href="https://www.instagram.com/optikasao/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`hidden md:inline-flex text-foreground ${hoverLinkClass}`}
          >
            <Instagram size={42} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl justify-center">
        <SaoCookieBanner />
      </div>
    </footer>
  );
};

export default SaoFooter;
