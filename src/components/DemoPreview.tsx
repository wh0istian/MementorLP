import { Calendar, ListTodo, Heart } from 'lucide-react';

export default function DemoPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f7fb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            La solución: MEMENTOR
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistema automatizado de recordatorios personalizados para estudiantes
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#0b3d91] to-[#2db67f] p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-x divide-gray-200">
            <div className="p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ListTodo className="w-5 h-5 text-[#0b3d91]" />
                </div>
                <h3 className="font-bold text-gray-900">Lista de tareas</h3>
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <div className="flex-1 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">Calendario</h3>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[...Array(28)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded ${
                      i % 7 === 3 || i % 7 === 5
                        ? 'bg-[#2db67f] text-white flex items-center justify-center text-xs font-semibold'
                        : 'bg-gray-100'
                    }`}
                  >
                    {i % 7 === 3 || i % 7 === 5 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900">Registro de ánimo</h3>
              </div>

              <div className="space-y-3">
                {['😊', '😌', '😴'].map((emoji, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{emoji}</span>
                    <div className="flex-1 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0b3d91] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#0a3580] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Probar demo
          </button>
        </div>
      </div>
    </section>
  );
}
