import { motion } from 'motion/react';
import { Clock, ShieldCheck, HeartHandshake, Building, FileText, Sparkles } from 'lucide-react';

export function Differentials() {
  const items = [
    {
      icon: Clock,
      title: 'Consultas Dedicadas de 60 Minutos',
      description: 'Tempo real para você relatar seus sintomas, histórico e tirar todas as suas dúvidas. Sem consultas apressadas de 10 minutos.',
      tag: 'Atenção Individualizada'
    },
    {
      icon: Sparkles,
      title: 'Diagnóstico Ágil no Mesmo Consultório',
      description: 'Ecocardiograma, Eletrocardiograma e colocação de MAPA/Holter realizados diretamente pelo médico, com interpretação imediata.',
      tag: 'Sem Burocracia'
    },
    {
      icon: HeartHandshake,
      title: 'Cuidado Contínuo Pós-Consulta',
      description: 'Canal estruturado com a secretária e enfermagem para acompanhamento de receitas, dúvidas de dosagem e evolução clínica.',
      tag: 'Relacionamento Médico'
    },
    {
      icon: Building,
      title: 'Retaguarda nos Melhores Hospitais',
      description: 'Caso seja necessária internação ou cateterismo, o Dr. José Roberto acompanha você nos principais hospitais de São Paulo.',
      tag: 'Segurança Total'
    },
    {
      icon: FileText,
      title: 'Apoio Completo para Reembolso',
      description: 'Emissão de nota fiscal detalhada e laudos comprobatórios para solicitação facilitada de reembolso junto ao seu plano de saúde.',
      tag: 'Transparência'
    },
    {
      icon: ShieldCheck,
      title: 'Medicina Baseada em Evidências',
      description: 'Tratamentos modernos e prescrições fundamentadas nos consensos mais atuais da Sociedade Brasileira de Cardiologia e órgãos internacionais.',
      tag: 'Rigor Científico'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            Por que escolher nosso atendimento
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
            Uma experiência médica pensada para a sua tranquilidade e confiança.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Do momento em que você agenda sua consulta até o acompanhamento dos resultados, 
            cada detalhe reflete o respeito pelo seu tempo e pelo seu bem mais valioso: a saúde do seu coração.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-800 mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block mb-2">
                    {diff.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
