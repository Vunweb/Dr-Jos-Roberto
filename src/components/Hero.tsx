import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Clock, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, DOCTOR_IMAGES } from '../data/cardiologistData';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-radial-[at_top_right] from-teal-50/60 via-slate-50 to-white">
      {/* Decorative subtle medical grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed Metadata (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide mb-4">
              <span>{CLINIC_INFO.crm}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{CLINIC_INFO.rqe}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                Jardins, São Paulo
              </span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6 [text-wrap:balance]">
              Cuidado cardiovascular de excelência, precisão diagnóstica e atenção humana.
            </h1>

            {/* Subtitle with high readability */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Consultas com <strong className="font-semibold text-slate-800">60 minutos de dedicação</strong>, 
              exames no próprio consultório e uma abordagem preventiva moderna 
              para proteger seu coração e promover sua longevidade.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Atendimento detalhado e sem pressa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Ecocardiograma e ECG no local</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Retaguarda em Sírio-Libanês e Einstein</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Laudo ágil para risco cirúrgico</span>
              </div>
            </div>

            {/* Actions: Primary CTA for WhatsApp + Secondary Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Agendar Consulta via WhatsApp</span>
              </button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Conhecer Especialidades</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quiet reassurance notice */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>Resposta média em até 30 minutos em horário comercial</span>
            </div>
          </motion.div>

          {/* Right Column: Doctor Portrait with Motion Animation (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Elegant background halo / card frame */}
              <div 
                className="absolute inset-0 rounded-3xl bg-linear-to-tr from-teal-900/10 via-slate-200/40 to-teal-50 transform rotate-1 scale-102 -z-10"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/70 shadow-xl">
                {!imageError ? (
                  <motion.img
                    src={DOCTOR_IMAGES.profile}
                    alt="Dr. José Roberto - Cardiologista em São Paulo"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-auto object-cover object-top max-h-[500px]"
                    initial={{ y: 15 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                ) : (
                  <div className="w-full h-96 bg-linear-to-br from-teal-900 to-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
                    <div className="w-20 h-20 rounded-full bg-teal-800/80 flex items-center justify-center mb-4">
                      <span className="font-display text-2xl font-bold">JR</span>
                    </div>
                    <h3 className="font-display text-xl font-bold">Dr. José Roberto</h3>
                    <p className="text-teal-200 text-sm mt-1">Médico Cardiologista</p>
                    <p className="text-xs text-slate-400 mt-2">CRM-SP 148.920 · RQE 72.415</p>
                  </div>
                )}

                {/* Subtle gradient scrim at bottom of image */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Overlaid credentials banner */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-base font-bold font-display tracking-tight flex items-center gap-1.5">
                    <span>Dr. José Roberto</span>
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="text-xs text-slate-200 font-medium">
                    Cardiologista Clínico & Ecocardiografista
                  </p>
                  <p className="text-[11px] text-teal-200/90 font-mono mt-0.5">
                    CRM-SP 148.920 · RQE 72.415
                  </p>
                </div>
              </div>

              {/* Floating verified badge (Motion Animated) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200/80 shadow-lg flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Sociedade Brasileira de Cardiologia
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Membro Titular Especialista (SBC)
                  </div>
                </div>
              </motion.div>

              {/* Floating consultation duration badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 border border-slate-200/80 shadow-md flex items-center gap-2.5 z-10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800">
                  Consultas completas de 60 min
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
