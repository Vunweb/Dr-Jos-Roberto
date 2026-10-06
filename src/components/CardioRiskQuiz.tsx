import { useState } from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Check, ArrowRight, RotateCcw, MessageCircle, AlertCircle } from 'lucide-react';
import { RISK_QUIZ_QUESTIONS } from '../data/cardiologistData';
import { createWhatsAppBookingUrl } from '../utils/whatsapp';

export function CardioRiskQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const scoreVal = RISK_QUIZ_QUESTIONS[currentStep].options[selectedOption].score;
    const newScores = [...scores, scoreVal];
    setScores(newScores);
    setSelectedOption(null);

    if (currentStep < RISK_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores([]);
    setSelectedOption(null);
    setIsCompleted(false);
  };

  const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

  const getResult = () => {
    if (totalScore <= 6) {
      return {
        level: 'Perfil de Risco Baixo',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        recommendation: 'Excelente! Mantenha seus hábitos saudáveis de alimentação e exercício. A recomendação médica padrão para o seu perfil é um check-up preventivo anual ou a cada 2 anos para monitoramento dos biomarcadores.',
        suggestedService: 'Check-up Preventivo Anual'
      };
    } else if (totalScore <= 10) {
      return {
        level: 'Perfil de Atenção Moderada',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        recommendation: 'Atenção aos sinais preventivos. Você apresenta fatores que merecem investigação detalhada, como rastreio de placas arteriais precoces, eletrocardiograma e cálculo de risco cardiovascular global.',
        suggestedService: 'Check-up Cardiológico com Ecocardiograma'
      };
    } else {
      return {
        level: 'Recomendação de Avaliação Prioritária',
        color: 'text-rose-800 bg-rose-50 border-rose-200',
        recommendation: 'Identificamos a presença de múltiplos fatores de risco cardiovascular. É altamente recomendável não adiar uma consulta presencial detalhada para estratificação e início de proteção vascular ativa.',
        suggestedService: 'Consulta Cardiológica Completa + MAPA/Holter'
      };
    }
  };

  const currentQ = RISK_QUIZ_QUESTIONS[currentStep];
  const result = isCompleted ? getResult() : null;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <HeartPulse className="w-4 h-4 text-teal-700" />
            <span>Ferramenta Educativa Preventiva</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Descubra se o seu coração precisa de um check-up agora.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Responda 4 perguntas rápidas baseadas nos principais parâmetros de prevenção cardiovascular.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                <span>Pergunta {currentStep + 1} de {RISK_QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep) / RISK_QUIZ_QUESTIONS.length) * 100)}% concluído</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
                <div 
                  className="bg-teal-700 h-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentStep + 1) / RISK_QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-5">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-xs sm:text-sm cursor-pointer ${
                        isSelected
                          ? 'border-teal-700 bg-teal-50/70 text-teal-950 font-semibold shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-teal-700 bg-teal-700 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action */}
              <div className="flex justify-end">
                <button
                  disabled={selectedOption === null}
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer"
                >
                  <span>{currentStep === RISK_QUIZ_QUESTIONS.length - 1 ? 'Ver Resultado' : 'Próxima'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : result ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className={`p-4 rounded-xl border ${result.color} flex items-start gap-3`}>
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">
                    {result.level}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Conduta Recomendada para seu perfil
                </div>
                <div className="text-base font-bold text-slate-900 mb-2">
                  {result.suggestedService} com Dr. José Roberto
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Envie o resumo deste questionário para nossa secretária no WhatsApp para receber horários e valores correspondentes.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={createWhatsAppBookingUrl({
                      service: `${result.suggestedService} (Indicado pelo Simulador)`,
                      notes: `Resultado do teste de perfil de risco: ${result.level}`,
                      source: 'Simulador Preventivo'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar pelo WhatsApp com esse perfil</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer teste</span>
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                * Este simulador tem caráter puramente educativo e informativo, não configurando diagnóstico médico ou substituindo consulta presencial.
              </p>
            </motion.div>
          ) : null}
        </div>

      </div>
    </section>
  );
}
