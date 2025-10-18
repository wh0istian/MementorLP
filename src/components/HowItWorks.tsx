import { Calendar, Bell, BarChart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Sincroniza tu calendario',
    description: 'Conecta tu calendario académico mediante API o ingresa tus eventos manualmente.',
    step: '01'
  },
  {
    icon: Bell,
    title: 'Recibe recordatorios inteligentes',
    description: 'El sistema te notifica automáticamente antes de cada evento o tarea importante.',
    step: '02'
  },
  {
    icon: BarChart,
    title: 'Registra tu ánimo',
    description: 'Lleva un seguimiento de cómo te sientes para mantener el equilibrio emocional.',
    step: '03'
  },
  {
    icon: CheckCircle,
    title: 'Mantén el control',
    description: 'Revisa tus tareas completadas y organiza mejor tu tiempo académico.',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un sistema simple y efectivo en 4 pasos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-[#f5f7fb] rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl font-bold text-gray-200 mb-4">
                  {item.step}
                </div>

                <div className="w-14 h-14 bg-gradient-to-br from-[#0b3d91] to-[#2db67f] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#0b3d91] to-[#2db67f]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
