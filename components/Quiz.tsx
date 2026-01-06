
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_FLOW, EXPERT } from '../constants';
import { ArrowLeft, ChevronRight, MessageSquare, X } from 'lucide-react';

interface QuizProps {
  initialId: string;
  onFinish: (answers: string[]) => void;
  onCancel: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ initialId, onFinish, onCancel }) => {
  const [currentId, setCurrentId] = useState(initialId);
  const [answers, setAnswers] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  const currentQuestion = QUIZ_FLOW[currentId];
  const isTreat = currentId.startsWith('treat');

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
    const typeText = isTreat ? 'Procedimento Estético' : 'Curso Academy';
    const msg = encodeURIComponent(`Olá Dra. Alana! Estou no seu quiz de ${typeText} e prefiro falar diretamente agora. Pode me atender?`);
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#fcfbf7]/98 backdrop-blur-md flex items-center justify-center overflow-y-auto p-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl border border-white overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-neutral-50 flex items-center justify-between">
          <button onClick={handleBack} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-neutral-400" />
          </button>
          
          <div className="text-center">
            <p className={`text-[9px] font-bold uppercase tracking-[0.3em] ${isTreat ? 'text-rose-500' : 'text-amber-500'}`}>
              Fluxo Personalizado
            </p>
          </div>

          <button onClick={onCancel} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
            <X className="w-5 h-5 text-neutral-300" />
          </button>
        </div>

        <div className="flex-1 p-8 lg:p-12 space-y-10">
          <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            <motion.div 
                className={`h-full ${isTreat ? 'bg-rose-500' : 'bg-amber-500'}`}
                animate={{ width: `${((history.length + 1) / 4) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentId}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="space-y-8"
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-800 leading-tight">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left p-5 lg:p-6 rounded-2xl border border-neutral-100 bg-neutral-50/30 transition-all flex items-center justify-between group ${isTreat ? 'hover:border-rose-200' : 'hover:border-amber-200'}`}
                  >
                    <span className="font-bold text-neutral-700">{option}</span>
                    <ChevronRight className={`w-4 h-4 text-neutral-200 group-hover:text-rose-400 transition-colors`} />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 bg-neutral-50/50 flex flex-col items-center border-t border-neutral-100">
             <button onClick={handleWhatsAppDirect} className="text-rose-600 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-70 transition-opacity py-2">
                <MessageSquare className="w-4 h-4" /> Prefiro falar agora no WhatsApp
             </button>
        </div>
      </motion.div>
    </div>
  );
};
