import { WifiOff, Bell, Calendar, Smile, Users, Plug } from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    title: 'Offline-first',
    description: 'Funciona sin internet. Tus datos siempre contigo, sin depender de la conexión.',
    color: 'bg-blue-100 text-[#0b3d91]'
  },
  {
    icon: Bell,
    title: 'Recordatorios inteligentes',
    description: 'Dos modos: automáticos que se cierran solos, o persistentes hasta que tú los confirmes.',
    color: 'bg-green-100 text-[#2db67f]'
  },
  {
    icon: Calendar,
    title: 'Calendario integrado',
    description: 'Visualiza tus tareas y eventos en un calendario claro dentro de la app.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Plug,
    title: 'Automatización con API',
    description: 'Sincroniza tu calendario académico automáticamente mediante integración API.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Smile,
    title: 'Registro de ánimo',
    description: 'Lleva un diario breve de cómo te sientes cada día con notas y emojis personalizados.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Users,
    title: 'Accesibilidad universal',
    description: 'Diseñado especialmente para adultos mayores y personas con necesidades de accesibilidad.',
    color: 'bg-red-100 text-red-600'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Características principales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para mantener tu vida organizada, en una sola aplicación
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#f5f7fb] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
