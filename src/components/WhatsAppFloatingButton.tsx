import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/cardiologistData';

interface WhatsAppFloatingButtonProps {
  onClick: () => void;
}

export function WhatsAppFloatingButton({ onClick }: WhatsAppFloatingButtonProps) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Discreet tooltip on desktop only */}
      <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-md text-xs font-semibold text-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Agendamento no WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={onClick}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 cursor-pointer"
        aria-label="Abrir agendamento no WhatsApp com a recepção do Dr. José Roberto"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
