import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../data/cardiologistData';
import { createWhatsAppBookingUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [patientName, setPatientName] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || SERVICES[0].title);
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã (07h30 às 12h00)');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = createWhatsAppBookingUrl({
      patientName,
      service: selectedService,
      preferredPeriod,
      notes: notes || (patientPhone ? `Telefone: ${patientPhone}` : undefined),
      source: 'Modal de Agendamento'
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-7 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider block mb-1">
                Agendamento de Consulta
              </span>
              <h3 id="booking-title" className="text-xl font-bold text-slate-900 font-display">
                Fale com a Recepção do Dr. José Roberto
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Preencha seus dados para enviar uma mensagem formatada ao nosso WhatsApp comercial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como prefere ser chamado(a)?"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Especialidade ou Exame desejado *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                >
                  <option value="Primeira Consulta Cardiológica Geral">Primeira Consulta Cardiológica Geral</option>
                  <option value="Check-up Preventivo Completo">Check-up Preventivo Completo</option>
                  <option value="Ecocardiograma Transtorácico com Doppler">Ecocardiograma Transtorácico com Doppler</option>
                  <option value="Risco Cirúrgico / Parecer Pré-Operatório">Risco Cirúrgico / Parecer Pré-Operatório</option>
                  <option value="Instalação de MAPA 24h ou Holter Digital">Instalação de MAPA 24h ou Holter Digital</option>
                  <option value="Avaliação para Exercícios Físicos / Atletas">Avaliação para Exercícios Físicos / Atletas</option>
                  <option value="Segunda Opinião Médica">Segunda Opinião Médica</option>
                  <option value="Outro assunto ou dúvida clínica">Outro assunto ou dúvida clínica</option>
                </select>
              </div>

              {/* Period Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferência de dia ou período
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Manhã (07h30 às 12h00)',
                    'Tarde (13h00 às 17h00)',
                    'Final de Tarde (17h às 19h)',
                    'Sábado pela Manhã'
                  ].map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setPreferredPeriod(period)}
                      className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        preferredPeriod === period
                          ? 'border-teal-700 bg-teal-50 text-teal-900 font-semibold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu número de WhatsApp (opcional)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 90000-0000"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alguma observação relevante? (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Preciso de liberação rápida para cirurgia na próxima semana..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200" />
                  <span>Prosseguir para o WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Atendimento humanizado diretamente pela secretária</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
