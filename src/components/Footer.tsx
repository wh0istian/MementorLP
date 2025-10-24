import { Brain, Mail, FileText, Apple } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-[#2db67f]" />
              <span className="text-xl font-bold text-white">MEMENTOR</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Tu asistente de memoria offline. Organiza tu vida académica sin depender de internet.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                <Apple className="w-4 h-4" />
                Descargar en App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Disponible en Google Play
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('caracteristicas')}
                className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection('precios')}
                className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('descargar')}
                className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm"
              >
                Descargar
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <div className="space-y-2">
              <a href="#pitch" className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm">
                Pitch Deck
              </a>
              <a href="#instituciones" className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm">
                Para instituciones
              </a>
              <a href="#privacidad" className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm">
                Política de privacidad
              </a>
              <a href="#terminos" className="block text-gray-400 hover:text-[#2db67f] transition-colors text-sm">
                Términos de servicio
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:contacto@mementor.app" className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contacto@mementor.app
              </a>
              <p className="text-gray-500 text-xs leading-relaxed">
                ¿Eres una institución educativa? Contáctanos para planes especiales y licencias institucionales.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 MEMENTOR — Todos los derechos reservados
            </p>
            <button
              onClick={() => scrollToSection('descargar')}
              className="bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Descargar ahora
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
