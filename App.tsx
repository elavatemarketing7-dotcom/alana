
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { QuizResults } from './components/QuizResults';
import { Analyzing } from './components/Analyzing';
import { ShieldCheck, Sparkles, Star } from 'lucide-react';
import { EXPERT } from './constants';

type AppState = 'CHOICE' | 'QUIZ' | 'ANALYZING' | 'RESULTS' | 'LANDING';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('CHOICE');
  const [answers, setAnswers] = useState<string[]>([]);

  const startQuiz = () => setView('QUIZ');
  const goToLanding = () => setView('LANDING');
  
  const handleQuizFinish = (finalAnswers: string[]) => {
    setAnswers(finalAnswers);
    setView('ANALYZING');
  };

  const handleAnalysisComplete = () => {
    setView('RESULTS');
  };

  // Pre-load images for better experience
  useEffect(() => {
    const images = [
      EXPERT.heroImage,
      EXPERT.authorityImages[0]
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-100">
      <AnimatePresence mode="wait">
        {view === 'CHOICE' && (
          <motion.div 
            key="choice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-6"
          >
            <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-rose-100 rounded-full animate-pulse scale-110 opacity-50" />
                <img 
                  src={EXPERT.heroImage} 
                  alt={EXPERT.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg z-10"
                />
              </div>

              <div className="space-y-2">
                <span className="text-rose-600 font-bold tracking-[0.2em] text-[10px] uppercase">Dra. Alana Philereno</span>
                <h1 className="text-2xl font-display font-bold text-neutral-800">Como você deseja começar?</h1>
                <p className="text-neutral-500 text-sm leading-relaxed px-4">
                  Seja bem-vinda! Para uma experiência personalizada, recomendamos iniciar pelo quiz.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={startQuiz}
                  className="w-full bg-rose-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-rose-200 active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Iniciar Quiz Exclusivo
                </button>
                <button
                  onClick={goToLanding}
                  className="w-full bg-neutral-50 text-neutral-600 py-4 rounded-2xl font-semibold text-base border border-neutral-100 active:scale-95 transition-transform"
                >
                  Ver site completo
                </button>
              </div>

              <div className="pt-2 flex justify-center gap-4 text-neutral-300">
                 <Sparkles className="w-4 h-4" />
                 <Star className="w-4 h-4" />
                 <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}

        {view === 'QUIZ' && (
          <Quiz key="quiz" onFinish={handleQuizFinish} onCancel={goToLanding} />
        )}

        {view === 'ANALYZING' && (
          <Analyzing key="analyzing" onComplete={handleAnalysisComplete} />
        )}

        {view === 'RESULTS' && (
          <QuizResults key="results" answers={answers} onContinue={goToLanding} />
        )}

        {view === 'LANDING' && (
          <LandingPage key="landing" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
