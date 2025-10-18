import { ShieldCheck, Palette, Zap } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Sin anuncios',
    description: 'Experiencia limpia y enfocada. Sin distracciones ni interrupciones molestas.'
  },
  {
    icon: Palette,
    title: 'Personalización total',
    description: 'Ajusta la aplicación a tu gusto sin complejidad. Tu espacio, tus reglas.'
  },
  {
    icon: Zap,
    title: 'Funciona offline',
    description: 'Acceso completo sin conexión. Tus datos siempre disponibles cuando los necesites.'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0b3d91] to-[#2db67f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Beneficios diferenciales
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Lo que hace a MEMENTOR único en su categoría
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-[#0b3d91]" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
