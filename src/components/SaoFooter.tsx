import saoLogo from '@/assets/sao_logo.png';
import { Instagram } from 'lucide-react';

const SaoFooter = () => {
  return (
    <footer id="contact" className="border-t-[2px] border-black px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.15fr_0.8fr]">
        <div className="space-y-5 text-left text-foreground">
          <h3 className="text-[20px] font-bold uppercase tracking-tight">OTVÁRACIE HODINY</h3>
          <div className="space-y-5 text-[16px] leading-[1.25]">
            <div>
              <p>Pondelok - Piatok</p>
              <p>10 - 18</p>
            </div>
            <div>
              <p>Sobota</p>
              <p>10 - 13</p>
            </div>
            <div>
              <p>Nedeľa</p>
              <p>Zatvorené</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=SAO+Optika+Bratislava+Palisady+736%2F46%2C+811+06+Bratislava"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full overflow-hidden rounded-[2rem] border-[4px] border-foreground"
          >
            <iframe
              src="https://www.google.com/maps?q=SAO%20Optika%20Bratislava%2C%20Palis%C3%A1dy%20736%2F46%2C%20811%2006%20Bratislava&z=16&output=embed"
              className="h-[240px] w-full md:h-[260px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAO Optika mapa"
            />
          </a>

          <div className="text-center text-[16px] leading-[1.25] text-foreground">
            <p>SAO Optika Bratislava</p>
            <p>Palisády 736/46, 811 06 Slovensko</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-7 text-right text-foreground">
          <img
            src={saoLogo}
            alt="SAO logo"
            className="h-auto w-[200px] md:w-[230px]"
            width={300}
            height={128}
          />

          <p className="max-w-xs text-[16px]">"Vidieť jasnejšie, žiť krajšie"</p>

          <div className="space-y-2 text-[16px] leading-[1.3]">
            <p>+421 944 945 636</p>
            <p>info@saooptika.sk</p>
          </div>

          <a
            href="https://www.instagram.com/saooptika/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex text-foreground transition-opacity hover:opacity-70"
          >
            <Instagram size={42} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SaoFooter;
