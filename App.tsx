
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { QuizResults } from './components/QuizResults';
import { Analyzing } from './components/Analyzing';
import { Sparkles, GraduationCap, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { EXPERT } from './constants';

type AppState = 'CHOICE' | 'QUIZ' | 'ANALYZING' | 'RESULTS' | 'LANDING';
type QuizType = 'treat' | 'course';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('CHOICE');
  const [quizType, setQuizType] = useState<QuizType>('treat');
  const [answers, setAnswers] = useState<string[]>([]);

  const handleWhatsAppDirect = (topic: string) => {
    const msg = encodeURIComponent(`Olá Dra. Alana! Gostaria de falar agora sobre ${topic}. Vi no seu portal.`);
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${msg}`, '_blank');
  };

  const startQuiz = (type: QuizType) => {
    setQuizType(type);
    setView('QUIZ');
  };

  const goToLanding = () => setView('LANDING');
  
  const handleQuizFinish = (finalAnswers: string[]) => {
    setAnswers(finalAnswers);
    setView('ANALYZING');
  };

  const handleAnalysisComplete = () => setView('RESULTS');

  return (
    <div className="min-h-screen selection:bg-rose-100 bg-[#fcfbf7]">
      <AnimatePresence mode="wait">
        {view === 'CHOICE' && (
          <motion.div 
            key="choice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col lg:flex-row bg-[#fcfbf7] overflow-hidden"
          >
            {/* LADO A: EXPERT (Destaque Visual) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full lg:w-[40%] h-[40vh] lg:h-full shrink-0 overflow-hidden"
            >
              <img 
                src={EXPERT.heroImage} 
                alt={EXPERT.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#fcfbf7]" />
              
              <div className="absolute bottom-4 left-6 lg:bottom-12 lg:left-12">
                 <p className="font-signature text-4xl lg:text-6xl text-rose-600">Dra. Alana Philereno</p>
                 <div className="h-px w-12 bg-rose-200 my-2" />
                 <p className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-[8px] lg:text-[10px]">
                   Referência em Estética sem Agulhas
                 </p>
              </div>
            </motion.div>

            {/* LADO B: CONVERSÃO (Onde a mágica acontece) */}
            <div className="flex-1 flex flex-col justify-between p-6 lg:p-16">
              <div /> {/* Spacer superior */}

              <div className="max-w-md mx-auto lg:mx-0 w-full space-y-8 lg:space-y-12">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center lg:text-left space-y-2"
                >
                  <span className="text-rose-500 font-bold uppercase tracking-[0.4em] text-[9px] block">Portal de Atendimento</span>
                  <h1 className="text-3xl lg:text-5xl font-display font-bold text-neutral-800">
                    Como deseja <span className="text-rose-600 italic">iniciar?</span>
                  </h1>
                </motion.div>

                <div className="grid gap-6">
                  {/* Bloco Paciente */}
                  <div className="space-y-3">
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startQuiz('treat')}
                      className="group bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-rose-900/5 border border-rose-50 flex items-center gap-5 cursor-pointer transition-all"
                    >
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-800">Sou Paciente</h3>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Avaliação Online</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-200 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                    <button 
                      onClick={() => handleWhatsAppDirect('Agendamento VIP')}
                      className="w-full flex items-center justify-center gap-2 text-rose-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
                    >
                      <MessageSquare className="w-3 h-3" /> Falar com Especialista
                    </button>
                  </div>

                  {/* Bloco Aluna */}
                  <div className="space-y-3">
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startQuiz('course')}
                      className="group bg-neutral-900 rounded-3xl p-6 lg:p-8 shadow-2xl flex items-center gap-5 cursor-pointer transition-all"
                    >
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1 text-white">
                        <h3 className="text-lg font-bold">Quero ser Aluna</h3>
                        <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Academy Hyaluron Pen</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                    <button 
                      onClick={() => handleWhatsAppDirect('Cursos e Vagas')}
                      className="w-full flex items-center justify-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
                    >
                      <MessageSquare className="w-3 h-3" /> Informações sobre Cursos
                    </button>
                  </div>
                </div>
              </div>

              {/* FOOTER DISCRETO: Site Institucional Compactado */}
              <div className="mt-8 flex flex-col items-center lg:items-start opacity-30 hover:opacity-100 transition-opacity duration-500">
                <button 
                  onClick={goToLanding} 
                  className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400 group"
                >
                  <ExternalLink className="w-3 h-3" />
                  Site Institucional Completo
                </button>
                <p className="text-[8px] text-neutral-300 mt-2 uppercase tracking-widest">© 2024 ALANA PHILERENO ACADEMY</p>
              </div>
            </div>
          </motion.div>
        )}

        {view === 'QUIZ' && (
          <Quiz 
            key="quiz" 
            initialId={quizType === 'treat' ? 'treat_1' : 'course_1'} 
            onFinish={handleQuizFinish} 
            onCancel={() => setView('CHOICE')} 
          />
        )}

        {view === 'ANALYZING' && (
          <Analyzing key="analyzing" onComplete={handleAnalysisComplete} />
        )}

        {view === 'RESULTS' && (
          <QuizResults key="results" type={quizType} answers={answers} onContinue={goToLanding} />
        )}

        {view === 'LANDING' && (
          <LandingPage key="landing" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
