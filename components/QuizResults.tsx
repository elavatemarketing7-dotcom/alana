
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERT } from '../constants';
import { Check, MessageSquare, ArrowRight, Share2, GraduationCap, Sparkles } from 'lucide-react';

interface ResultsProps {
  answers: string[];
  onContinue: () => void;
}

export const QuizResults: React.FC<ResultsProps> = ({ answers, onContinue }) => {
  const isCourse = answers[0]?.includes("Curso");
  const profileType = isCourse ? "Aluna(o) Ideal" : "Paciente Ideal";
  const mainBenefit = isCourse 
    ? "O Curso Hyaluron Pen da Dra. Alana é o salto que sua carreira precisa para atingir o faturamento e autoridade que você busca."
    : `Com base nas suas respostas, o Método da ${EXPERT.name} consegue entregar exatamente a naturalidade e segurança que você procura.`;

  const whatsappMsg = encodeURIComponent(
    `Olá Dra. Alana! Acabei de fazer o quiz e meu perfil é Compatível para ${isCourse ? 'o Curso Hyaluron Pen' : 'Procedimentos'}. Aqui estão minhas respostas:\n\n` +
    answers.map((a, i) => `${i+1}. ${a}`).join('\n') +
    `\n\nGostaria de mais informações!`
  );

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-hidden flex flex-col">
      <div className="relative h-[45%] flex-shrink-0">
        <img 
          src={isCourse ? EXPERT.courseImages[0] : EXPERT.heroImage} 
          alt={EXPERT.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        
        <div className="absolute top-8 left-0 right-0 px-6 text-center">
             <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-lg text-white ${isCourse ? 'bg-amber-500' : 'bg-green-500'}`}
             >
                {isCourse ? <GraduationCap className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                Perfil Compatível
             </motion.div>
        </div>
      </div>

      <div className="flex-1 px-8 pb-8 -mt-12 relative z-10 flex flex-col justify-between">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-display font-bold text-neutral-800 leading-tight">
            Você é a <span className={isCourse ? 'text-amber-600' : 'text-rose-600'}>{profileType}</span>.
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-xs mx-auto text-sm">
            {mainBenefit}
          </p>
        </div>

        <div className="space-y-3 mt-8">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className={`w-full text-white py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 animate-pulse ${isCourse ? 'bg-amber-600 shadow-amber-200' : 'bg-rose-600 shadow-rose-200'}`}
          >
            <Share2 className="w-5 h-5" />
            Enviar minha avaliação DRA
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-5 h-5 text-green-400" />
            Falar no WhatsApp agora
          </motion.button>

          <button
            onClick={onContinue}
            className="w-full text-neutral-400 py-4 font-semibold text-xs flex items-center justify-center gap-2 uppercase tracking-widest"
          >
            Ver mais detalhes no site
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
