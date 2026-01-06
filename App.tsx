
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { QuizResults } from './components/QuizResults';
import { Analyzing } from './components/Analyzing';
import { Sparkles, GraduationCap, ArrowRight, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen selection:bg-rose-100 bg-[#fcfbf7] flex flex-col">
      <AnimatePresence mode="wait">
        {view === 'CHOICE' && (
          <motion.div 
            key="choice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col lg:flex-row bg-[#fcfbf7] overflow-y-auto lg:overflow-hidden"
          >
            {/* TOPO/ESQUERDA: EXPERT (Compactado no Mobile) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-[40%] h-[28vh] lg:h-full shrink-0 overflow-hidden"
            >
              <img 
                src={EXPERT.heroImage} 
                alt={EXPERT.name} 
                className="w-full h-full object-cover object-top lg:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#fcfbf7]" />
              
              <div className="absolute bottom-3 left-5 lg:bottom-12 lg:left-12">
                 <p className="font-signature text-3xl lg:text-6xl text-rose-600 drop-shadow-sm">Dra. Alana Philereno</p>
                 <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[7px] lg:text-[10px] mt-1 opacity-70">
                   Estética Avançada sem Agulhas
                 </p>
              </div>
            </motion.div>

            {/* CONTEÚDO: Opções Compactas */}
            <div className="flex-1 flex flex-col justify-center p-5 lg:p-20">
              <div className="max-w-md mx-auto lg:mx-0 w-full space-y-6 lg:space-y-12">
                
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center lg:text-left space-y-1"
                >
                  <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-[8px] block opacity-80">Seja bem-vinda</span>
                  <h1 className="text-2xl lg:text-5xl font-display font-bold text-neutral-800 leading-tight">
                    Escolha como <span className="text-rose-600 italic">começar</span>
                  </h1>
                </motion.div>

                <div className="grid gap-4 lg:gap-6">
                  
                  {/* Card 01: Paciente (Compacto) */}
                  <div className="space-y-2">
                    <motion.div 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startQuiz('treat')}
                      className="group bg-white rounded-2xl p-4 lg:p-6 shadow-lg shadow-rose-900/5 border border-rose-50 flex items-center gap-4 cursor-pointer transition-all"
                    >
                      <div className="w-11 h-11 lg:w-14 lg:h-14 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
                        <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base lg:text-lg font-bold text-neutral-800">Sou Paciente</h3>
                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">Avaliação On-line</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-200 group-hover:text-rose-500 transition-all" />
                    </motion.div>
                    <button 
                      onClick={() => handleWhatsAppDirect('Atendimento Clínico')}
                      className="w-full flex items-center justify-center gap-2 text-rose-500 text-[9px] font-bold uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                    >
                      <MessageSquare className="w-3 h-3" /> Falar com Especialista
                    </button>
                  </div>

                  {/* Card 02: Aluna (Compacto) */}
                  <div className="space-y-2">
                    <motion.div 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => startQuiz('course')}
                      className="group bg-neutral-900 rounded-2xl p-4 lg:p-6 shadow-xl flex items-center gap-4 cursor-pointer transition-all"
                    >
                      <div className="w-11 h-11 lg:w-14 lg:h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all">
                        <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div className="flex-1 text-white">
                        <h3 className="text-base lg:text-lg font-bold">Quero ser Aluna</h3>
                        <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Academy Hyaluron Pen</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:text-amber-500 transition-all" />
                    </motion.div>
                    <button 
                      onClick={() => handleWhatsAppDirect('Cursos Academy')}
                      className="w-full flex items-center justify-center gap-2 text-amber-500 text-[9px] font-bold uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
                    >
                      <MessageSquare className="w-3 h-3" /> Informações sobre Curso
                    </button>
                  </div>

                  {/* Card 03: Portal Institucional (Sleek/Compacto abaixo dos Quiz) */}
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    onClick={goToLanding}
                    className="group bg-neutral-100/40 rounded-2xl p-4 lg:p-6 border border-neutral-200/50 flex items-center gap-4 cursor-pointer transition-all mt-2"
                  >
                    <div className="w-11 h-11 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center text-neutral-500 shrink-0 group-hover:bg-neutral-800 group-hover:text-white transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-bold text-neutral-800 leading-tight">Portal Completo</h3>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Conheça nossa História</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-800 transition-all" />
                  </motion.div>

                </div>

                <p className="text-[8px] text-neutral-300 text-center lg:text-left uppercase tracking-[0.3em] font-medium pt-2">
                  © 2024 Alana Philereno Academy
                </p>
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
