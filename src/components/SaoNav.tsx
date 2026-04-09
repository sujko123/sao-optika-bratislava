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
    <nav className="sticky top-0 z-50 px-4 py-4">
      <div className="sao-frame mx-auto flex max-w-6xl items-center justify-center bg-background/90 px-6 py-4 backdrop-blur-sm">
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link-hover text-sm font-medium uppercase tracking-widest text-foreground"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo('#contact')}
            className="sao-frame-soft bg-sao-green px-6 py-2.5 text-sm font-semibold tracking-wider text-foreground transition-transform hover:-translate-y-0.5"
          >
            OBJEDNAŤ SA
          </button>
        </div>

        <button className="ml-auto md:hidden" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sao-frame mx-auto mt-3 flex max-w-6xl flex-col items-center gap-6 bg-background px-6 py-8 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium uppercase tracking-widest text-foreground"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo('#contact')}
            className="sao-frame-soft bg-sao-green px-6 py-2.5 text-sm font-semibold tracking-wider text-foreground"
          >
            OBJEDNAŤ SA
          </button>
        </div>
      )}
    </nav>
  );
};

export default SaoNav;
