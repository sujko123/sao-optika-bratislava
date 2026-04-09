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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 md:gap-12">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link-hover text-sm font-medium tracking-widest text-foreground uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-sao-green text-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider hover:brightness-95 transition-all"
          >
            OBJEDNAŤ SA
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-background border-t border-border">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium tracking-widest text-foreground uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-sao-green text-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider"
          >
            OBJEDNAŤ SA
          </button>
        </div>
      )}
    </nav>
  );
};

export default SaoNav;
