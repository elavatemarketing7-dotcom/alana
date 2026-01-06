
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERT } from '../constants';
import { Check, MessageSquare, ArrowRight, Share2, GraduationCap, Sparkles } from 'lucide-react';

interface ResultsProps {
  type: 'treat' | 'course';
  answers: string[];
  onContinue: () => void;
}

export const QuizResults: React.FC<ResultsProps> = ({ type, answers, onContinue }) => {
  const isCourse = type === 'course';
  const profileTitle = isCourse ? "Especialista em Formação" : "Perfil para Transformação";
  const mainBenefit = isCourse 
    ? "O seu perfil demonstra ambição e foco. A Academy da Dra. Alana Philereno é o lugar onde você dominará o faturamento alto com o Método Hyaluron Pen."
    : `Sua busca por naturalidade é compatível com nossa filosofia. A Dra. Alana identificou que você é a candidata ideal para nossos protocolos exclusivos.`;

  const whatsappMsg = encodeURIComponent(
    `Olá Dra. Alana! Finalizei minha avaliação de ${isCourse ? 'CARREIRA/CURSOS' : 'BELEZA/PROCEDIMENTOS'}.\n\n` +
    `Meu objetivo principal: ${answers[1] || 'Transformação'}\n` +
    `Status atual: ${answers[0] || 'Interessada'}\n\n` +
    `Gostaria de agendar minha conversa personalizada!`
  );

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#fcfbf7] overflow-y-auto flex items-center justify-center p-4 lg:p-10">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="relative h-72 flex-shrink-0">
          <img 
            src={isCourse ? EXPERT.courseImages[0] : EXPERT.heroImage} 
            alt={EXPERT.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          
          <div className="absolute top-6 left-0 right-0 px-6 flex justify-center">
               <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-xl text-white ${isCourse ? 'bg-amber-600' : 'bg-rose-600'}`}>
                  {isCourse ? <GraduationCap className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  Compatibilidade 100%
               </div>
          </div>
        </div>

        <div className="p-10 space-y-8">
          <div className="text-center space-y-4">
            <h2 className={`text-3xl font-display font-bold text-neutral-800 leading-tight`}>
               {profileTitle}
            </h2>
            <p className="text-neutral-500 leading-relaxed max-w-sm mx-auto text-sm">
              {mainBenefit}
            </p>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className={`w-full text-white py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 ${isCourse ? 'bg-amber-600 shadow-amber-200' : 'bg-rose-600 shadow-rose-200'}`}
            >
              <MessageSquare className="w-5 h-5" />
              {isCourse ? 'Reservar Vaga Academy' : 'Agendar Minha Consulta'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3"
            >
              <Share2 className="w-5 h-5 text-neutral-400" />
              Falar com Dra. Alana
            </motion.button>

            <button
              onClick={onContinue}
              className="w-full text-neutral-400 py-2 font-bold text-[10px] flex items-center justify-center gap-2 uppercase tracking-[0.2em] hover:text-rose-500 transition-colors"
            >
              Acessar site completo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
