import { ServiceItem, TestimonialItem, ClinicImage, FaqItem } from '../types';

export const CLINIC_INFO = {
  doctorName: 'Dr. José Roberto',
  specialty: 'Médico Cardiologista',
  subspecialties: 'Cardiologia Clínica · Ecocardiografia · Prevenção Cardiovascular',
  crm: 'CRM-SP 148.920',
  rqe: 'RQE 72.415',
  phone: '(11) 3284-5500',
  whatsappRaw: '5511998421205',
  whatsappFormatted: '(11) 99842-1205',
  email: 'contato@drjoseroberto.med.br',
  address: {
    street: 'Alameda Santos, 1827',
    suite: 'Conjunto 142 - 14º Andar (Edifício Metropolitan Office)',
    neighborhood: 'Jardins / Cerqueira César',
    city: 'São Paulo',
    state: 'SP',
    cep: '01419-002',
    reference: 'A 200 metros da Estação Trianon-MASP (Linha 2-Verde)'
  },
  hours: {
    weekdays: 'Segunda a Sexta: 07h30 às 19h00',
    saturday: 'Sábados (Check-ups programados): 08h00 às 13h00',
    sunday: 'Fechado'
  },
  valet: 'Estacionamento com serviço de manobrista no local'
};

export const DOCTOR_IMAGES = {
  profile: 'https://i.postimg.cc/kg88Z6CF/Dr-Jose-Roberto.png',
  fallbackDoctor: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
};

export const CLINIC_GALLERY: ClinicImage[] = [
  {
    id: 'consultorio',
    url: 'https://i.postimg.cc/Jh0DbPxW/istockphoto-500675660-612x612.jpg',
    title: 'Consultório Clínico Principal',
    category: 'Ambiente Médico',
    description: 'Espaço reservado, aconchegante e silencioso, planejado para conversas aprofundadas e exame físico detalhado.'
  },
  {
    id: 'sala-exames',
    url: 'https://i.postimg.cc/zvZyY5rD/istockphoto-1199676165-612x612.jpg',
    title: 'Sala de Diagnóstico e Exames',
    category: 'Tecnologia Avançada',
    description: 'Equipamentos modernos para realização imediata de Ecocardiograma com Doppler, ECG de alta definição e MAPA/Holter.'
  },
  {
    id: 'recepcao',
    url: 'https://i.postimg.cc/VsnSBSq0/istockphoto-1468540885-612x612.jpg',
    title: 'Recepção e Espera Executiva',
    category: 'Conforto e Acolhimento',
    description: 'Ambiente tranquilo com atendimento ágil, serviço de café cortesia, conexão Wi-Fi de alta velocidade e total privacidade.'
  }
];

export const HOSPITAL_AFFILIATIONS = [
  { name: 'Hospital Sírio-Libanês', role: 'Corpo Clínico Credenciado' },
  { name: 'Hospital Israelita Albert Einstein', role: 'Médico Assistente Cadastrado' },
  { name: 'Hospital Alemão Oswaldo Cruz', role: 'Retaguarda Cardiológica' },
  { name: 'InCor - FMUSP', role: 'Formação & Residência Médica' }
];

export const DOCTOR_CREDENTIALS = [
  {
    title: 'Graduação em Medicina',
    institution: 'Faculdade de Medicina da USP (FMUSP)',
    description: 'Formação médica sólida com foco em clínica geral e propedêutica aprofundada.'
  },
  {
    title: 'Residência em Cardiologia',
    institution: 'Instituto do Coração (InCor - HCFMUSP)',
    description: 'Treinamento intensivo nos maiores centros de referência em alta complexidade da América Latina.'
  },
  {
    title: 'Especialista em Ecocardiografia',
    institution: 'Sociedade Brasileira de Cardiologia (SBC)',
    description: 'Certificação com RQE registrado em diagnóstico por imagem cardiovascular e hemodinâmica não invasiva.'
  },
  {
    title: 'Mais de 15 Anos de Prática Clínica',
    institution: 'Atendimento em São Paulo',
    description: 'Milhares de pacientes acompanhados com planos de prevenção individualizada e foco em longevidade ativa.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'checkup-preventivo',
    title: 'Check-up Cardiológico Preventivo',
    shortDesc: 'Avaliação completa e personalizada do risco cardiovascular global para prevenção precoce de infartos e AVC.',
    fullDesc: 'Protocolo detalhado que combina anamnese profunda, histórico familiar, estratificação de escore de risco por calculadoras internacionais, eletrocardiograma e exames complementares direcionados. Ideal para homens e mulheres a partir dos 35 anos ou com antecedentes genéticos.',
    duration: '60 a 90 minutos',
    indications: [
      'Histórico familiar de infarto ou doenças coronárias',
      'Rotina com alto nível de estresse profissional',
      'Homens acima de 35 anos e mulheres na pós-menopausa',
      'Tabagismo, sobrepeso ou sedentarismo'
    ],
    preparation: 'Trazer exames laboratoriais recentes se houver. Sem necessidade de jejum para a consulta inicial.',
    iconName: 'HeartPulse'
  },
  {
    id: 'ecocardiograma-doppler',
    title: 'Ecocardiograma Transtorácico com Doppler',
    shortDesc: 'Ultrassonografia cardíaca com análise em tempo real do músculo cardíaco, válvulas e fluxo sanguíneo.',
    fullDesc: 'Exame não invasivo e indolor realizado no próprio consultório pelo próprio Dr. José Roberto. Permite avaliar a força de contração do coração, tamanho das cavidades, funcionamento das válvulas cardíacas e detecção precoce de insuficiência cardíaca ou hipertrofias.',
    duration: '35 a 45 minutos',
    indications: [
      'Investigação de sopro cardíaco ou palpitações',
      'Falta de ar aos esforços ou cansaço inexplicável',
      'Acompanhamento de hipertensão arterial de longa data',
      'Avaliação após quadro de infecção viral ou dor torácica'
    ],
    preparation: 'Não requer jejum. Roupas confortáveis de duas peças facilitam o procedimento.',
    iconName: 'Activity'
  },
  {
    id: 'mapa-holter',
    title: 'MAPA 24h & Holter Digital',
    shortDesc: 'Monitorização contínua durante 24 horas da pressão arterial e do ritmo cardíaco em ambiente real de vida.',
    fullDesc: 'O MAPA registra as oscilações da pressão durante o trabalho, repouso e sono (descenso noturno), eliminando a falsa hipertensão do consultório. Já o Holter grava cada batimento cardíaco em busca de arritmias, taquicardias paroxísticas ou pausas sinusais assintomáticas.',
    duration: 'Instalação em 15 min + monitoramento de 24h',
    indications: [
      'Suspeita de hipertensão do avental branco ou hipertensão resistente',
      'Sensação de batimentos acelerados, falhas ou tonturas inexplicadas',
      'Ajuste fino de medicações anti-hipertensivas',
      'Investigação de episódios de desmaio (síncope)'
    ],
    preparation: 'Tomar banho antes da instalação do aparelho, pois o dispositivo não pode ser molhado durante as 24h.',
    iconName: 'Watch'
  },
  {
    id: 'risco-cirurgico',
    title: 'Risco Cirúrgico & Avaliação Pré-Operatória',
    shortDesc: 'Parecer cardiológico criterioso para liberação segura de cirurgias eletivas ou procedimentos estéticos.',
    fullDesc: 'Laudo pautado pelas mais recentes diretrizes da Sociedade Brasileira de Cardiologia e do American College of Cardiology. Análise rigorosa do porte cirúrgico, comorbidades do paciente e estabilidade cardiovascular para minimizar intercorrências anestésicas.',
    duration: '45 minutos (com laudo entregue de forma ágil)',
    indications: [
      'Cirurgias plásticas, ortopédicas, vasculares, ginecológicas e gerais',
      'Procedimentos sob anestesia geral, peridural ou sedação profunda',
      'Pacientes com doenças prévias (diabetes, hipertensão, histórico cardíaco)'
    ],
    preparation: 'Trazer a solicitação do cirurgião responsável e exames recentes de sangue.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'hipertensao-colesterol',
    title: 'Controle de Hipertensão e Colesterol Alto',
    shortDesc: 'Tratamento individualizado com metas rígidas para proteger artérias, rins e cérebro a longo prazo.',
    fullDesc: 'Abordagem combinada que alia intervenções comportamentais realistas (sono, nutrição anti-inflamatória e manejo do estresse) a esquemas farmacológicos de última geração com mínimo impacto em efeitos colaterais.',
    duration: 'Acompanhamento trimestral ou semestral',
    indications: [
      'Pressão arterial frequentemente acima de 130/80 mmHg',
      'Colesterol LDL persistentemente elevado ou triglicerídeos altos',
      'Dificuldade de controle com remédios atuais ou presença de efeitos adversos',
      'Prevenção de placas obstrutivas nas carótidas e coronárias'
    ],
    preparation: 'Manter diário residencial de pressão na semana anterior, se possível.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'cardiologia-esportiva',
    title: 'Cardiologia do Esporte & Teste Ergométrico',
    shortDesc: 'Avaliação cardiovascular segura para corredores, ciclistas, praticantes de musculação e triatletas.',
    fullDesc: 'Estruturação de parâmetros cardíacos individuais para quem deseja iniciar atividades físicas com segurança ou maximizar a performance aeróbica sem riscos de morte súbita ou sobrecarga ventricular.',
    duration: '50 minutos',
    indications: [
      'Início de treinos em academias ou esportes de alta intensidade',
      'Preparação para maratonas, meia-maratonas e provas de ciclismo',
      'Sensação de queimação no peito ou cansaço desproporcional ao treinar'
    ],
    preparation: 'Vir com tênis esportivo e vestimenta própria para caminhada/corrida.',
    iconName: 'Zap'
  }
];

export const DIFFERENTIALS = [
  {
    id: 'tempo',
    title: 'Consultas de 60 Minutos Sem Pressa',
    description: 'Aqui você não é atendido em 10 minutos. Cada encontro é dedicado a ouvir suas preocupações, investigar sintomas e planejar soluções com calma.',
    highlight: 'Atenção Total'
  },
  {
    id: 'exames',
    title: 'Exames Integrados no Mesmo Local',
    description: 'Ecocardiograma, Eletrocardiograma e instalação de MAPA/Holter realizados no consultório, com laudos rápidos emitidos pelo próprio médico.',
    highlight: 'Agilidade Diagnóstica'
  },
  {
    id: 'comunicacao',
    title: 'Canal Direto de Acompanhamento',
    description: 'Dúvidas sobre receitas, orientações pós-consulta e ajustes de medicação com suporte humanizado e ágil da equipe.',
    highlight: 'Continuidade do Cuidado'
  },
  {
    id: 'hospitais',
    title: 'Retaguarda nos Melhores Hospitais',
    description: 'Se for necessário qualquer procedimento invasivo ou internação, o Dr. José Roberto tem atuação direta nos principais centros de excelência de SP.',
    highlight: 'Segurança Máxima'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Mendes',
    age: 52,
    neighborhood: 'Itaim Bibi, SP',
    condition: 'Check-up Executivo & Hipertensão',
    comment: 'Minha rotina no mercado financeiro sempre foi de muita pressão. O Dr. José Roberto foi o primeiro cardiologista que realmente sentou, me ouviu e explicou cada parâmetro do meu ecocardiograma. Ajustou minha medicação sem me dopar e hoje meus exames estão impecáveis. Recomendo de olhos fechados.',
    rating: 5,
    year: '2025'
  },
  {
    id: '2',
    name: 'Maria Helena Silveira',
    age: 68,
    neighborhood: 'Higienópolis, SP',
    condition: 'Arritmia & Acompanhamento Preventivo',
    comment: 'Sentia palpitações que me assustavam à noite. O Dr. José Roberto colocou o Holter no próprio consultório e descobriu exatamente a causa. O atendimento é extremamente respeitoso, pontual e acolhedor. Minha filha e meu marido agora também se consultam com ele.',
    rating: 5,
    year: '2025'
  },
  {
    id: '3',
    name: 'Ricardo Vasconcelos',
    age: 41,
    neighborhood: 'Moema, SP',
    condition: 'Liberação para Maratona & Ergometria',
    comment: 'Estava treinando para a Maratona de Berlim e precisava de uma avaliação cardiovascular rigorosa. O exame no consultório foi minucioso, analisamos limiares de frequência e recebi orientações precisas sobre hidratação e zonas de esforço cardíaco. Profissional de altíssimo gabarito.',
    rating: 5,
    year: '2026'
  },
  {
    id: '4',
    name: 'Ana Beatriz Fontes',
    age: 49,
    neighborhood: 'Jardins, SP',
    condition: 'Risco Cirúrgico & Controle de Colesterol',
    comment: 'Precisava de um risco cirúrgico urgente para uma cirurgia ortopédica e fui atendida prontamente. A secretária foi nota dez e o laudo ficou pronto no mesmo dia com todo o rigor exigido pelo meu cirurgião. O consultório na Alameda Santos é impecável e tem manobrista na porta.',
    rating: 5,
    year: '2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'convenios',
    question: 'O consultório aceita planos de saúde ou convênios médicos?',
    answer: 'As consultas são realizadas em caráter particular para assegurar o tempo integral de 60 minutos e a personalização necessária. No entanto, fornecemos nota fiscal médica completa, relatório clínico detalhado e toda a documentação comprobatória para que você solicite o reembolso junto ao seu plano de saúde (Bradesco, SulAmérica, Omint, Care Plus, Amil One, entre outros). Nossa equipe auxilia em todo o processo.'
  },
  {
    id: 'exames-mesmo-dia',
    question: 'É possível realizar a consulta e os exames no mesmo dia?',
    answer: 'Sim! Caso você opte pelo protocolo de Check-up Integrado ou necessite de Ecocardiograma com Doppler e ECG, basta nos avisar no momento do agendamento pelo WhatsApp. Reservamos um bloco estendido de horário para que você saia com os exames feitos e o parecer discutido.'
  },
  {
    id: 'retorno',
    question: 'A consulta dá direito a retorno para apresentação de exames?',
    answer: 'Sim. Em conformidade com as boas práticas médicas, quando são solicitados exames laboratoriais complementares externos, o retorno presencial ou por telemedicina para análise e fechamento da conduta está contemplado no período estabelecido.'
  },
  {
    id: 'preparo-consulta',
    question: 'O que devo levar no dia da minha primeira consulta?',
    answer: 'Recomendamos trazer todos os exames realizados nos últimos 12 meses (sangue, imagem, ECGs anteriores), uma lista de todos os medicamentos e suplementos em uso com as respectivas dosagens, além do nome de familiares diretos com histórico de problemas cardíacos ou AVC.'
  },
  {
    id: 'localizacao-estacionamento',
    question: 'Como é o acesso ao consultório e estacionamento?',
    answer: 'Estamos localizados na Alameda Santos, 1827 - Conjunto 142, em frente ao polo empresarial dos Jardins e a apenas 200m da Estação Trianon-MASP do Metrô. O edifício possui serviço próprio de manobrista (valet) com acesso facilitado e segurança 24 horas.'
  },
  {
    id: 'tempo-consulta',
    question: 'Quanto tempo dura a consulta com o Dr. José Roberto?',
    answer: 'Dedicamos em média 60 minutos para a primeira consulta. Acreditamos que a medicina de excelência exige tempo para conversa aprofundada, exame físico minucioso, esclarecimento de todas as dúvidas e definição conjunta do plano terapêutico.'
  }
];

export const RISK_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual é a sua faixa etária atual?',
    options: [
      { label: 'Abaixo de 35 anos', score: 1 },
      { label: 'Entre 35 e 49 anos', score: 2 },
      { label: 'Entre 50 e 64 anos', score: 3 },
      { label: '65 anos ou mais', score: 4 }
    ]
  },
  {
    id: 2,
    question: 'Existe histórico de infarto ou AVC em parentes de primeiro grau?',
    options: [
      { label: 'Não que eu saiba', score: 1 },
      { label: 'Sim, após os 60 anos de idade', score: 2 },
      { label: 'Sim, parente jovem (antes dos 55 anos em homens ou 65 em mulheres)', score: 4 },
      { label: 'Múltiplos parentes com problemas cardíacos', score: 4 }
    ]
  },
  {
    id: 3,
    question: 'Como você avalia sua rotina de atividade física semanal?',
    options: [
      { label: 'Regular (mais de 150 minutos de exercício por semana)', score: 1 },
      { label: 'Moderada (caminhadas ou 1 a 2 vezes por semana)', score: 2 },
      { label: 'Sedentário (pouco ou nenhum exercício)', score: 3 },
      { label: 'Sedentário e com rotina de alto estresse diário', score: 4 }
    ]
  },
  {
    id: 4,
    question: 'Você já possui diagnóstico de pressão alta, colesterol elevado ou diabetes?',
    options: [
      { label: 'Nenhum dos três, exames sempre normais', score: 1 },
      { label: 'Apenas um deles, controlado com medicação', score: 2 },
      { label: 'Mais de um fator ou não meço há mais de 1 ano', score: 3 },
      { label: 'Fumante ou com taxas frequentemente descontroladas', score: 4 }
    ]
  }
];
