import { CLINIC_INFO } from '../data/cardiologistData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Doctor Credentials (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-display font-semibold text-sm">
                JR
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Dr. José Roberto
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Médico cardiologista com formação pelo InCor e FMUSP. Atendimento clínico e diagnóstico 
              de alta precisão focado na longevidade e prevenção cardiovascular na cidade de São Paulo.
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-300">
              <p>Responsável Técnico: Dr. José Roberto</p>
              <p>{CLINIC_INFO.crm} · {CLINIC_INFO.rqe}</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre o Dr. José Roberto</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Especialidades & Exames</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-teal-400 transition-colors">Diferenciais do Consultório</a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-teal-400 transition-colors">Estrutura & Fotos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-teal-400 transition-colors">Depoimentos de Pacientes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-teal-400 transition-colors">Localização nos Jardins</a>
              </li>
            </ul>
          </div>

          {/* Contact and Hours (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Consultório Jardins - SP
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {CLINIC_INFO.address.street} - {CLINIC_INFO.address.suite}<br />
              {CLINIC_INFO.address.neighborhood} · São Paulo - SP<br />
              CEP {CLINIC_INFO.address.cep}
            </p>
            <div className="pt-1 text-xs">
              <p className="text-slate-300 font-semibold">{CLINIC_INFO.phone}</p>
              <p className="text-slate-400">{CLINIC_INFO.email}</p>
            </div>
            <p className="text-[11px] text-slate-500">
              {CLINIC_INFO.hours.weekdays}
            </p>
          </div>

        </div>

        {/* Regulatory & Ethical Compliance Notice (CFM) */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-relaxed mb-8">
          <p className="mb-1">
            <strong className="text-slate-300">Nota Ética e Legal (Resolução CFM nº 2.336/2023):</strong> O conteúdo disponibilizado 
            neste site possui caráter unicamente informativo e educativo, não devendo ser utilizado para autodiagnóstico ou automedicação, 
            e não substituindo, sob qualquer circunstância, a consulta médica presencial.
          </p>
          <p className="text-rose-400/90 font-medium">
            Em caso de emergência, dor torácica aguda súbita ou falta de ar intensa, dirija-se imediatamente ao pronto-socorro mais próximo ou acione o SAMU pelo número 192.
          </p>
        </div>

        {/* Copyright and Minimalist Bottom */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} Dr. José Roberto · Cardiologia Clínica e Preventiva. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Termos de Uso</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacidade dos Dados (LGPD)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
