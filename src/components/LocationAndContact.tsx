import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Car, 
  Train, 
  MessageCircle, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/cardiologistData';
import { createWhatsAppBookingUrl } from '../utils/whatsapp';

export function LocationAndContact() {
  const [patientName, setPatientName] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Generate URL and redirect to WhatsApp
    const url = createWhatsAppBookingUrl({
      patientName,
      service: selectedService,
      preferredPeriod,
      notes: notes || (patientPhone ? `Telefone de contato: ${patientPhone}` : undefined),
      source: 'Formulário de Contato do Site'
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            Localização e Contato
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
            Consultório no coração médico de São Paulo, com fácil acesso e total comodidade.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Localizado na Alameda Santos, a poucos passos da Avenida Paulista, com infraestrutura moderna, 
            segurança privada e estacionamento com manobrista no próprio edifício.
          </p>
        </div>

        {/* 2-Column Grid: Location Details & Pre-Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Address, Map Card, Amenities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Endereço do Consultório
                  </h3>
                  <p className="text-sm text-slate-700 font-medium mt-1">
                    {CLINIC_INFO.address.street} - {CLINIC_INFO.address.suite}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {CLINIC_INFO.address.neighborhood} · {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state} · CEP {CLINIC_INFO.address.cep}
                  </p>
                  <p className="text-xs text-teal-800 font-semibold mt-2">
                    {CLINIC_INFO.address.reference}
                  </p>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/70 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>Estação Trianon-MASP a 3 min a pé (Linha 2-Verde)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{CLINIC_INFO.valet}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours & Direct Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>Horário de Atendimento</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {CLINIC_INFO.hours.weekdays}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {CLINIC_INFO.hours.saturday}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Telefone & E-mail</span>
                  </div>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="text-xs font-semibold text-teal-800 hover:underline block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-xs text-slate-600 hover:text-slate-900 block mt-1"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=Alameda+Santos+1827+Sao+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-700" />
                    <span>Como chegar pelo Waze / Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visual map preview banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 p-6 flex flex-col justify-between min-h-[160px]">
              <div className="z-10">
                <span className="text-[11px] font-bold text-teal-900 uppercase tracking-wider block mb-1">
                  Ponto de Referência
                </span>
                <p className="text-sm font-bold text-slate-900">
                  Edifício Metropolitan Office
                </p>
                <p className="text-xs text-slate-600 mt-1 max-w-sm">
                  Cruzamento da Alameda Santos com a Alameda Ministro Rocha Azevedo, próximo aos hospitais 9 de Julho, Sírio-Libanês e InCor.
                </p>
              </div>

              <div className="mt-4 z-10">
                <a
                  href="https://maps.google.com/?q=Alameda+Santos+1827+Sao+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Ver mapa ampliado</span>
                </a>
              </div>

              {/* Decorative map stylized grid */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]" 
                aria-hidden="true" 
              />
            </div>

          </div>

          {/* Right Column: Pre-Booking & WhatsApp Dispatch Form (6 cols) */}
          <div id="contato" className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider block">
                  Agendamento Rápido
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5 font-display">
                  Solicite seu horário diretamente
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu nome completo *
                </label>
                <input
                  id="patientName"
                  type="text"
                  required
                  placeholder="Ex: Roberto Alencar"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="selectedService" className="block text-xs font-semibold text-slate-700 mb-1">
                  Tipo de Consulta ou Procedimento *
                </label>
                <select
                  id="selectedService"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                >
                  <option value="Primeira Consulta Cardiológica">Primeira Consulta Cardiológica</option>
                  <option value="Check-up Preventivo Completo">Check-up Preventivo Completo</option>
                  <option value="Ecocardiograma Transtorácico com Doppler">Ecocardiograma Transtorácico com Doppler</option>
                  <option value="Risco Cirúrgico / Pré-Operatório">Risco Cirúrgico / Pré-Operatório</option>
                  <option value="Instalação de MAPA 24h ou Holter Digital">Instalação de MAPA 24h ou Holter Digital</option>
                  <option value="Avaliação para Exercícios / Corrida">Avaliação para Exercícios / Corrida</option>
                  <option value="Segunda Opinião Médica">Segunda Opinião Médica</option>
                </select>
              </div>

              {/* Preferred Period & Patient Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="preferredPeriod" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferência de Período
                  </label>
                  <select
                    id="preferredPeriod"
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                  >
                    <option value="Manhã (07h30 às 12h00)">Manhã (07h30 às 12h)</option>
                    <option value="Tarde (13h00 às 17h00)">Tarde (13h às 17h)</option>
                    <option value="Horário Executivo (17h00 às 19h00)">Final de Tarde (17h às 19h)</option>
                    <option value="Sábado pela Manhã">Sábado pela manhã</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu WhatsApp / Telefone
                  </label>
                  <input
                    id="patientPhone"
                    type="tel"
                    placeholder="(11) 90000-0000"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all"
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1">
                  Mensagem ou observação (opcional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Ex: Tenho urgência para liberação cirúrgica na próxima semana..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Confirmar e Enviar via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Mensagem pronta aberta diretamente no seu WhatsApp</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
