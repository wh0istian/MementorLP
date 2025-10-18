import { GraduationCap, Heart, Briefcase } from 'lucide-react';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Para estudiantes',
    description: 'Organiza tus clases, entregas y exámenes sin perder el control de tu calendario académico.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Para adultos mayores',
    description: 'Gestiona citas médicas, medicamentos y actividades diarias con una interfaz simple y clara.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Briefcase,
    title: 'Para profesionales',
    description: 'Planifica tus tareas laborales, reuniones y objetivos de manera eficiente y organizada.',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Diseñado para todos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MEMENTOR se adapta a las necesidades de cada usuario
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#f5f7fb] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <useCase.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
