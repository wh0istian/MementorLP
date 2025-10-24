import { Brain, ArrowRight, Calendar, Heart, ListTodo, Download } from 'lucide-react';

export default function Hero() {
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b3d91] via-[#1a5bb8] to-[#2db67f] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            MEMENTOR
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-4 font-light">
            Tu asistente de memoria offline
          </p>

          <p className="text-base sm:text-lg text-blue-200 mb-2">
            Disponible en iOS y Android
          </p>

          <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Organiza tu vida sin depender de internet. Recordatorios inteligentes, calendario integrado y control total de tus tareas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('descargar')}
              className="group bg-white text-[#0b3d91] px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Descargar Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('caracteristicas')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0b3d91] transition-all duration-300 transform hover:scale-105"
            >
              Ver cómo funciona
            </button>
          </div>
        </div>

        <div className="mt-20 animate-float">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-white/20 shadow-2xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#0b3d91] to-[#2db67f] p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <ListTodo className="w-4 h-4 text-[#0b3d91]" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Tareas</h3>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                        <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Calendario</h3>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(21)].map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-xs flex items-center justify-center ${
                          i % 7 === 3 || i % 7 === 5
                            ? 'bg-[#2db67f] text-white font-semibold'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Ánimo</h3>
                  </div>
                  <div className="space-y-2">
                    {['😊', '😌', '😴'].map((emoji, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <span className="text-lg">{emoji}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
