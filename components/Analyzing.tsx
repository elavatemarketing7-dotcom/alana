
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EXPERT } from '../constants';
import { Sparkles } from 'lucide-react';

interface AnalyzingProps {
  onComplete: () => void;
}

const MESSAGES = [
  "Processando suas respostas...",
  "Analisando perfil de naturalidade...",
  "Cruzando dados com o Método Alana Philereno...",
  "Verificando compatibilidade de agenda...",
  "Finalizando diagnóstico personalizado..."
];

export const Analyzing: React.FC<AnalyzingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 segundos de análise
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, duration / MESSAGES.length);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#fcfbf7] flex flex-col items-center justify-center px-8 text-center">
      <div className="relative mb-12">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-rose-100 shadow-xl relative z-10">
          <img src={EXPERT.heroImage} alt={EXPERT.name} className="w-full h-full object-cover" />
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border-2 border-dashed border-rose-300 rounded-full opacity-40"
        />
      </div>

      <div className="space-y-6 w-full max-w-xs">
        <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-neutral-800">Analisando Perfil</h2>
            <div className="flex items-center justify-center gap-2 text-rose-500">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <motion.p 
                  key={messageIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium italic"
                >
                  {MESSAGES[messageIndex]}
                </motion.p>
            </div>
        </div>

        <div className="relative h-2 w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-rose-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
            {Math.round(progress)}% Concluído
        </p>
      </div>
    </div>
  );
};
