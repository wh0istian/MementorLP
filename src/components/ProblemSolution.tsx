import { AlertCircle, TrendingDown, Users as UsersIcon, BarChart } from 'lucide-react';

const problems = [
  {
    category: 'EFECTOS',
    items: [
      'Bajo rendimiento académico en general',
      'Pérdida de hábitos de disciplina y responsabilidad',
      'Mayor carga y frustración para docentes'
    ]
  },
  {
    category: 'CAUSAS',
    items: [
      'No existe un sistema automatizado para enviar recordatorios personalizados',
      'Los recordatorios manuales o actuales no llegan a tiempo o se pierden',
      'Sobrecarga de tareas y actividades'
    ]
  }
];

const centralProblem = 'Los estudiantes olvidan sus actividades y fechas de entrega por falta de un sistema eficaz de recordatorios automatizados';

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            El problema que resolvemos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            El balance perfecto entre educación y salud mental
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 rounded-2xl border-2 border-[#2db67f] shadow-lg">
            <BarChart className="w-6 h-6 text-[#0b3d91]" />
            <div className="text-left">
              <p className="text-sm text-gray-600 font-medium">Dato clave</p>
              <p className="text-lg font-bold text-gray-900">
                35% de estudiantes usan apps digitales para organizar tareas
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {problems.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  {idx === 0 ? (
                    <TrendingDown className="w-8 h-8 text-red-600" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0b3d91] to-[#1a5bb8] p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">PROBLEMA CENTRAL</h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {centralProblem}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">78%</div>
                <div className="text-blue-200 text-sm">
                  De estudiantes reportan problemas de organización
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">45%</div>
                <div className="text-blue-200 text-sm">
                  Experimenta sobrecarga mental por tareas acumuladas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
