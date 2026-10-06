import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/cardiologistData';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            Experiência dos Pacientes
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
            Confiança construída com escuta atenta, diagnóstico correto e respeito.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Veja o relato de quem encontrou no Dr. José Roberto um parceiro de longo prazo para a saúde e tranquilidade cardiovascular.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars + Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Atendimento em {item.year}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author metadata (Zero-Pill discipline) */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span title="Paciente Verificado">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span>{item.age} anos</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.neighborhood}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-teal-800">
                    {item.condition}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust metric statement */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Mais de 98% dos pacientes avaliam a consulta como excelente em termos de pontualidade, clareza das explicações e acolhimento humano.
        </div>

      </div>
    </section>
  );
}
