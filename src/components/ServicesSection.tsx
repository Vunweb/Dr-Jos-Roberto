import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, 
  Activity, 
  Watch, 
  ClipboardCheck, 
  ShieldAlert, 
  Zap, 
  Clock, 
  Check, 
  ArrowRight,
  Info,
  X
} from 'lucide-react';
import { SERVICES } from '../data/cardiologistData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-teal-800" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-800" />;
      case 'Watch':
        return <Watch className="w-5 h-5 text-teal-800" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-teal-800" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-teal-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-teal-800" />;
      default:
        return <HeartPulse className="w-5 h-5 text-teal-800" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            Especialidades e Exames
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
            Diagnóstico preciso e conduta terapêutica personalizada.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Todos os exames e avaliações são conduzidos diretamente pelo Dr. José Roberto, 
            garantindo integração imediata entre o laudo técnico e as orientações clínicas para você.
          </p>
        </div>

        {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Indications Bullet Points */}
                <div className="border-t border-slate-100 pt-3 mb-5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Principais Indicações
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.indications.slice(0, 3).map((ind, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-teal-800 inline-flex items-center gap-1 py-1.5 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Ver detalhes</span>
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <span>Agendar</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-700" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Precisa de uma avaliação combinada (Consulta + Exames no mesmo dia)?
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Organizamos sua agenda para otimizar seu tempo, realizando o Check-up ou Ecocardiograma no mesmo período.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Check-up Integrado (Consulta + Exames no mesmo dia)')}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Solicitar Check-up Integrado
          </button>
        </div>

      </div>

      {/* Expanded Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {getIcon(activeModalService.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {activeModalService.title}
                  </h3>
                  <p className="text-xs text-teal-800 font-medium">
                    Duração estimada: {activeModalService.duration}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {activeModalService.fullDesc}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Quando este procedimento é indicado?
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeModalService.indications.map((ind, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Preparo e Recomendações
                </span>
                <p className="text-xs text-slate-600">
                  {activeModalService.preparation}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectService(title);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-xs transition-colors"
                >
                  Agendar este Exame
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
