import { Smartphone, Apple, Users } from 'lucide-react';

interface DownloadProps {
  variant?: 'primary' | 'secondary';
}

export default function Download({ variant = 'primary' }: DownloadProps) {
  return (
    <section
      id="descargar"
      className={`py-24 ${
        variant === 'primary'
          ? 'bg-gradient-to-b from-white to-[#f5f7fb]'
          : 'bg-gradient-to-b from-[#f5f7fb] to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {variant === 'primary' ? 'Descarga Mementor' : 'Empieza hoy mismo'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descarga Mementor y comienza a organizar tu vida académica hoy mismo
          </p>
          <p className="text-lg text-[#2db67f] font-semibold mt-2">
            Disponible en iOS y Android
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-[#0b3d91] via-[#1a5bb8] to-[#2db67f] rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Smartphone className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Mementor App</p>
                  <p className="text-sm opacity-80">Tu asistente de memoria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Gratis para comenzar
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Descarga la aplicación sin costo y comienza a organizar tus tareas, eventos y recordatorios de inmediato. Actualiza a Premium cuando estés listo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Descargar en</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#0b3d91] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#0a3580] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Disponible en</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <Users className="w-6 h-6 text-[#0b3d91] flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#0b3d91]">Únete a miles de estudiantes</span> que ya organizan su vida académica con Mementor
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2db67f] rounded-full"></div>
                <span>Sin necesidad de tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2db67f] rounded-full"></div>
                <span>Funciona completamente offline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2db67f] rounded-full"></div>
                <span>Compatible con iOS 13+ y Android 8+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
