import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Estudiante de Ingeniería',
    institution: 'Universidad Nacional',
    image: '👩‍🎓',
    rating: 5,
    text: 'Desde que uso Mementor, no he olvidado ninguna entrega. La sincronización con mi calendario académico es automática y me ha salvado muchas veces. Mi nivel de estrés disminuyó notablemente.'
  },
  {
    name: 'Carlos Ramírez',
    role: 'Profesor de Matemáticas',
    institution: 'Colegio San José',
    image: '👨‍🏫',
    rating: 5,
    text: 'Como docente, recomiendo Mementor a todos mis estudiantes. He notado una mejora significativa en la entrega puntual de tareas y en la organización general de sus responsabilidades académicas.'
  },
  {
    name: 'Ana Martínez',
    role: 'Coordinadora Académica',
    institution: 'Instituto Educativo',
    image: '👩‍💼',
    rating: 5,
    text: 'Implementamos Mementor en nuestra institución y los resultados han sido extraordinarios. El 35% de nuestros estudiantes reportan mejor organización y menos olvidos de fechas importantes.'
  },
  {
    name: 'Luis Hernández',
    role: 'Estudiante de Medicina',
    institution: 'Universidad de los Andes',
    image: '👨‍⚕️',
    rating: 5,
    text: 'El registro de ánimo me ayuda a mantener un balance entre estudios y salud mental. La app funciona offline, perfecto para cuando estoy en el hospital sin conexión. Vale cada peso del pago único.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-[#f5f7fb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de estudiantes y educadores ya confían en Mementor para organizar su vida académica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl flex-shrink-0">{testimonial.image}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.institution}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#0b3d91] opacity-20" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] rounded-3xl p-8 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Únete a miles de estudiantes organizados
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Más del 35% de estudiantes reportan usar apps digitales para organizar sus tareas. Mementor es la solución completa que combina organización y salud mental.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-1">98%</div>
                <div className="text-sm text-blue-100">Satisfacción</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">5.0</div>
                <div className="text-sm text-blue-100">Calificación</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">24/7</div>
                <div className="text-sm text-blue-100">Funciona Offline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
