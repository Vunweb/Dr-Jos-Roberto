import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/cardiologistData';

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Consultório', href: '#consultorio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Actions) */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 rounded-sm"
            aria-label="Dr. José Roberto - Início"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-display font-semibold text-base shadow-xs group-hover:bg-teal-900 transition-colors">
              JR
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors">
              Dr. José Roberto
            </span>
          </a>

          {/* Zone 2: 4-6 text links with hover underline */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-slate-600 hover:text-teal-800 transition-colors relative py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 rounded-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700"
              title="Ligue para o consultório"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 active:bg-teal-950 rounded-lg shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-teal-300" />
              <span>Agendar Consulta</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-800 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-teal-300" />
                <span>Agendar Consulta via WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
