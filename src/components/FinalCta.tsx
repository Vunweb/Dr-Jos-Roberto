import { MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/cardiologistData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Unboxed category label */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-4">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Prevenção e Longevidade</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
          A saúde do seu coração merece atenção dedicada, sem pressa e com máxima precisão.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Não espere o aparecimento de sintomas agudos para investigar seu risco cardiovascular. 
          Agende sua avaliação com o Dr. José Roberto na Alameda Santos e invista no seu bem mais precioso.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-5 h-5 text-emerald-200" />
            <span>Agendar Consulta no WhatsApp</span>
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Ligue: {CLINIC_INFO.phone}</span>
          </a>
        </div>

        {/* Bottom reassurance tokens */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>Atendimento pontual com hora marcada</span>
          </div>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span>Consultório nos Jardins com Estacionamento e Valet</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span>Emissão de laudos para reembolso</span>
        </div>

      </div>
    </section>
  );
}
