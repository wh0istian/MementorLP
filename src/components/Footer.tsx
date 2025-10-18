import { Brain, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-[#2db67f]" />
              <span className="text-xl font-bold text-white">MEMENTOR</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Construyendo memoria digital, sin conexión.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:contacto@mementor.app" className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors">
                <Mail className="w-4 h-4" />
                contacto@mementor.app
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <div className="space-y-2">
              <a href="#pitch" className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors">
                <FileText className="w-4 h-4" />
                Pitch Deck
              </a>
              <a href="#instituciones" className="flex items-center gap-2 text-gray-400 hover:text-[#2db67f] transition-colors">
                <FileText className="w-4 h-4" />
                Para instituciones
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 MEMENTOR — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
