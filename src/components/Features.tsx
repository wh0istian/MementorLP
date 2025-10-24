import { WifiOff, Bell, Calendar, Smile, Users, Plug, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Plug,
    title: 'Sincronización automática con calendarios académicos',
    description: 'Conecta tu calendario institucional y sincroniza automáticamente todas tus fechas importantes. Sin esfuerzo manual.',
    color: 'bg-blue-100 text-[#0b3d91]',
    highlight: true
  },
  {
    icon: Users,
    title: 'Diseño 100% pensado para estudiantes',
    description: 'Interfaz intuitiva y flujos optimizados específicamente para las necesidades de estudiantes y educadores.',
    color: 'bg-green-100 text-[#2db67f]',
    highlight: true
  },
  {
    icon: Shield,
    title: 'Prevención de sobrecarga mental',
    description: 'Distribución inteligente de recordatorios que evita el estrés y la saturación de notificaciones.',
    color: 'bg-purple-100 text-purple-600',
    highlight: true
  },
  {
    icon: Smile,
    title: 'Gestión de niveles de emociones',
    description: 'Registra cómo te sientes cada día y mantén un balance saludable entre estudios y bienestar mental.',
    color: 'bg-yellow-100 text-yellow-600',
    highlight: true
  },
  {
    icon: WifiOff,
    title: 'Funciona completamente offline',
    description: 'Tus datos siempre contigo, sin depender de la conexión. Acceso total en cualquier momento y lugar.',
    color: 'bg-cyan-100 text-cyan-600',
    highlight: false
  },
  {
    icon: Bell,
    title: 'Recordatorios personalizables',
    description: 'Múltiples modos de recordatorio: automáticos, persistentes, silenciosos. Tú decides cómo y cuándo.',
    color: 'bg-red-100 text-red-600',
    highlight: false
  }
];

export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Características que marcan la diferencia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Diseñado específicamente para el equilibrio entre educación y salud mental
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0b3d91] px-6 py-3 rounded-full font-semibold border-2 border-blue-200">
            <Zap className="w-5 h-5" />
            Diferenciales clave de Mementor
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative ${
                feature.highlight
                  ? 'bg-gradient-to-br from-white to-blue-50 border-2 border-[#2db67f]'
                  : 'bg-[#f5f7fb]'
              }`}
            >
              {feature.highlight && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  KEY
                </div>
              )}

              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <feature.icon className="w-8 h-8" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
