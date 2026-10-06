import { CLINIC_INFO } from '../data/cardiologistData';

export function createWhatsAppBookingUrl(options?: {
  service?: string;
  preferredPeriod?: string;
  patientName?: string;
  notes?: string;
  source?: string;
}): string {
  const phone = CLINIC_INFO.whatsappRaw;
  
  let message = `Olá! Gostaria de informações sobre agendamento de consulta com o Dr. José Roberto.`;
  
  if (options?.patientName) {
    message += `\nMeu nome é *${options.patientName.trim()}*.`;
  }
  
  if (options?.service) {
    message += `\nTenho interesse em: *${options.service}*.`;
  }
  
  if (options?.preferredPeriod) {
    message += `\nPreferência de horário: *${options.preferredPeriod}*.`;
  }
  
  if (options?.notes) {
    message += `\nObservação: ${options.notes.trim()}`;
  }

  if (options?.source) {
    message += `\n_(Contato iniciado pelo site oficial)_`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
