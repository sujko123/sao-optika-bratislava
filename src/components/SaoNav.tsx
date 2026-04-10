import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'O NÁS', href: '#about' },
  { label: 'ZNAČKY', href: '#brands' },
  { label: 'MERANIE ZRAKU', href: '#eye-exam' },
  { label: 'KONTAKT', href: '#contact' },
];

const SaoNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 px-4 pt-0 pb-4">
      <div className="mx-auto flex max-w-6xl items-center justify-center bg-background/80 px-2 py-4 backdrop-blur-sm">
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link-hover font-medium uppercase tracking-widest text-foreground"
            >
              {item.label}
            </button>
          ))}

          <button
           onClick={() => window.location.href = 'https://kalendar.saooptika.sk/terminy'}
            className="inline-flex items-center justify-center rounded-full bg-[#71F6A5] px-6 py-3 text-[14px] font-medium uppercase tracking-normal text-foreground transition-all duration-200 hover:scale-[1.07]"
          >
            OBJEDNAŤ SA
          </button>
        </div>

        <button className="ml-auto md:hidden" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col items-center gap-6 bg-background/95 px-6 py-8 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link-hover font-medium uppercase tracking-widest text-foreground"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center justify-center rounded-full bg-[#71F6A5] px-6 py-3 text-[14px] font-medium uppercase tracking-normal text-foreground transition-all duration-200 hover:scale-[1.07]"
          >
            OBJEDNAŤ SA
          </button>
        </div>
      )}
    </nav>
  );
};

export default SaoNav;
