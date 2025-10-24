import { useState, useEffect } from 'react';
import { Brain, Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Características', href: '#caracteristicas' },
  { name: 'Precios', href: '#precios' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Descargar', href: '#descargar' },
  { name: 'Contacto', href: '#contacto' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('#inicio')}
            className="flex items-center gap-2 group"
          >
            <Brain className="w-8 h-8 text-[#0b3d91] group-hover:text-[#2db67f] transition-colors" />
            <span className="text-xl font-bold text-gray-900">MEMENTOR</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#0b3d91]'
                    : 'text-gray-600 hover:text-[#0b3d91]'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2db67f]"></div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('#descargar')}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Descargar Ahora
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#0b3d91]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-blue-50 text-[#0b3d91] font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#descargar')}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white px-6 py-3 rounded-full font-semibold mt-2"
              >
                <Download className="w-4 h-4" />
                Descargar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
