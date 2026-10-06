import { motion } from 'motion/react';
import { Award, GraduationCap, Building2, Stethoscope, ArrowRight } from 'lucide-react';
import { HOSPITAL_AFFILIATIONS, DOCTOR_CREDENTIALS, CLINIC_INFO } from '../data/cardiologistData';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export function AboutDoctor({ onOpenBooking }: AboutDoctorProps) {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            Apresentação do Médico
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
            Uma trajetória dedicada à saúde cardiovascular e à longevidade com qualidade de vida.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            O Dr. José Roberto alia formação médica de alto nível nos principais polos acadêmicos 
            do país a uma visão humanizada e atenta, entendendo que cada coração bate em um ritmo de vida único.
          </p>
        </div>

        {/* Two-Column Editorial Grid: Biography & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 text-base leading-relaxed">
            <p>
              Com mais de 15 anos de atuação clínica em São Paulo, o Dr. José Roberto estruturou seu 
              consultório nos Jardins com o propósito de resgatar o que a medicina contemporânea muitas 
              vezes perdeu: <strong className="font-semibold text-slate-900">o tempo para ouvir, examinar e acolher</strong>.
            </p>
            <p>
              Sua conduta é integralmente orientada pela Medicina Baseada em Evidências, combinando as mais 
              recentes diretrizes internacionais da Sociedade Brasileira de Cardiologia (SBC) e da European Society of Cardiology (ESC) 
              a exames de imagem e monitoramento executados com extremo rigor técnico.
            </p>
            <p>
              Além do tratamento assertivo de condições estabelecidas como hipertensão, dislipidemias e arritmias, 
              seu foco primordial é a <strong className="font-semibold text-slate-900">cardiologia preventiva</strong>: 
              identificar riscos subclínicos anos antes de qualquer evento agudo, assegurando que você e sua família 
              vivam mais e melhor.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950 group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                <span>Conversar com a secretária sobre horários</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Credentials Bento List */}
          <div className="lg:col-span-6 space-y-4">
            {DOCTOR_CREDENTIALS.map((cred, idx) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-teal-300 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-teal-100/70 text-teal-900 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <GraduationCap className="w-5 h-5" />}
                    {idx === 1 && <Building2 className="w-5 h-5" />}
                    {idx === 2 && <Award className="w-5 h-5" />}
                    {idx === 3 && <Stethoscope className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {cred.title}
                    </h3>
                    <div className="text-xs font-semibold text-teal-800 mb-1">
                      {cred.institution}
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Hospital Affiliations Trust Strip */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
            Corpo Clínico Credenciado & Centros de Retaguarda Hospitalar em São Paulo
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HOSPITAL_AFFILIATIONS.map((hosp) => (
              <div
                key={hosp.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="text-xs text-slate-500 font-medium">
                  {hosp.role}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-2">
                  {hosp.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
