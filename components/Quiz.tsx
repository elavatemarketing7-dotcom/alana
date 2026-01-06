
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_FLOW, EXPERT } from '../constants';
import { ArrowLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onCancel: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onFinish, onCancel }) => {
  const [currentId, setCurrentId] = useState('start');
  const [answers, setAnswers] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  const currentQuestion = QUIZ_FLOW[currentId];

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    const nextId = currentQuestion.next ? currentQuestion.next(option) : null;

    if (nextId && QUIZ_FLOW[nextId]) {
      setAnswers(newAnswers);
      setHistory([...history, currentId]);
      setCurrentId(nextId);
    } else {
      onFinish(newAnswers);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevHistory = [...history];
      const prevId = prevHistory.pop()!;
      setHistory(prevHistory);
      setCurrentId(prevId);
      setAnswers(answers.slice(0, -1));
    } else {
      onCancel();
    }
  };

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent(`Olá Dra. Alana! Estou no seu quiz e gostaria de falar diretamente com você agora.`);
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#fcfbf7] overflow-y-auto">
      {/* Background Hero Image Subtle Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${EXPERT.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="relative min-h-screen flex flex-col px-6 py-6">
        {/* Compact Header with Expert Photo */}
        <div className="flex items-center justify-between mb-8 bg-white/50 backdrop-blur-sm p-3 rounded-full border border-white shadow-sm">
          <button onClick={handleBack} className="p-2 text-neutral-400">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-rose-200">
                <img src={EXPERT.heroImage} alt={EXPERT.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-display italic text-sm text-rose-900 font-bold">{EXPERT.name}</span>
          </div>

          <button onClick={handleWhatsAppDirect} className="p-2 text-green-500">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
          <div className="mb-8 space-y-3">
            <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-rose-500"
                initial={{ width: '10%' }}
                animate={{ width: history.length === 0 ? '25%' : '75%' }} // Simples indicação de progresso
              />
            </div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] text-center">
              Avaliação Personalizada • {history.length + 1}ª etapa
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentId}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display font-bold text-neutral-800 leading-tight text-center px-4">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(option)}
                    className="w-full text-left p-5 rounded-2xl border border-neutral-100 bg-white shadow-sm hover:border-rose-200 hover:bg-rose-50/30 transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-neutral-700 text-sm">{option}</span>
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                        <ChevronRight className="w-4 h-4 text-rose-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-8 flex flex-col items-center gap-4 pb-4">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppDirect}
              className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-[0.2em] bg-rose-50 px-8 py-4 rounded-2xl border border-rose-100 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chamar no WhatsApp Agora
            </motion.button>
            
            <button 
              onClick={onCancel}
              className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest hover:text-rose-500 transition-colors"
            >
              Pular avaliação e ir para o site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
