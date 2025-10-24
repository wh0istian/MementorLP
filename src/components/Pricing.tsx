import { Check, Sparkles, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Gratis',
    price: '0',
    description: 'Perfecto para empezar',
    features: [
      'Recordatorios básicos',
      'Calendario integrado',
      'Registro de ánimo',
      'Funciona offline',
      'Con anuncios'
    ],
    cta: 'Comenzar gratis',
    popular: false
  },
  {
    name: 'Premium',
    price: '19.999',
    description: 'Acceso completo de por vida',
    features: [
      'Todo lo de la versión gratis',
      'Sin anuncios nunca más',
      'Recordatorios ilimitados',
      'Sincronización automática con calendarios académicos',
      'Personalización avanzada',
      'Soporte prioritario'
    ],
    cta: 'Obtener acceso premium',
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-gradient-to-b from-white to-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comienza gratis y actualiza cuando estés listo.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white px-6 py-3 rounded-full font-semibold mt-4 shadow-lg">
            <Zap className="w-5 h-5" />
            Pago único - Sin suscripciones
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular
                  ? 'ring-4 ring-[#2db67f] shadow-2xl transform scale-105'
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#2db67f] to-[#1a9d6f] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Más popular
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                      PAGO ÚNICO
                    </div>
                  </div>
                </>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  {plan.price !== '0' && (
                    <span className="text-gray-500">COP</span>
                  )}
                </div>
                {plan.price !== '0' && (
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#2db67f]">Pago único - Acceso de por vida</p>
                    <p className="text-xs text-gray-500">Bajo costo de entrada para usuarios finales</p>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-[#2db67f]' : 'bg-gray-200'
                    }`}>
                      <Check className={`w-4 h-4 ${
                        plan.popular ? 'text-white' : 'text-gray-600'
                      }`} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0b3d91] to-[#2db67f] text-white hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto mt-16 border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué pago único?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Creemos en la transparencia y en darte control total. Con un solo pago de 19.999 COP, obtienes acceso completo a todas las funciones premium para siempre. Sin sorpresas, sin cargos recurrentes, sin preocupaciones.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-[#0b3d91]" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Acceso permanente</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-[#2db67f]" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Todas las actualizaciones</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Sin cargos ocultos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            ¿Eres una institución educativa? <a href="#contacto" className="text-[#0b3d91] font-semibold hover:underline">Contáctanos para planes especiales</a>
          </p>
        </div>
      </div>
    </section>
  );
}
