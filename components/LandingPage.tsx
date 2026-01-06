
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERT } from '../constants';
import { Gallery } from './Gallery';
import { 
  MessageSquare, 
  Instagram, 
  CheckCircle2, 
  Award, 
  Heart, 
  Calendar, 
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const handleCTA = () => {
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=Olá Dra. Alana! Vi seu site e gostaria de agendar minha primeira consulta gratuita.`, '_blank');
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true }
  };

  return (
    <div className="bg-[#fcfbf7] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col">
        <div className="absolute top-0 right-0 w-[80%] h-full z-0 opacity-80">
          <img 
            src={EXPERT.heroImage} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbf7] via-[#fcfbf7]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 pt-24 pb-12 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-sm"
          >
            <div className="space-y-2">
              <span className="text-rose-600 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Expert em Naturalidade
              </span>
              <h1 className="text-5xl font-display font-bold text-neutral-800 leading-[1.1]">
                Eu sou a <br />
                <span className="text-rose-600">Dra. Alana</span>
              </h1>
            </div>

            <p className="text-neutral-600 text-lg leading-relaxed">
              Resgatando sua autoestima através de resultados <span className="font-bold text-neutral-800">naturais, seguros e exclusivos</span>. Sem exageros, apenas a sua melhor versão.
            </p>

            <div className="space-y-4 pt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCTA}
                className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-rose-400" />
                Agendar consulta gratuita
              </motion.button>
              <p className="text-center text-xs text-neutral-400 font-medium">
                Avaliação personalizada e sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="px-6 py-20 bg-white">
        <div className="grid gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-neutral-800">
              Muito além da técnica, um olhar <span className="italic">humano</span>.
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Minha missão é realçar o que você já tem de mais bonito. Acredito que a estética deve ser um caminho para a confiança, e não para a padronização.
              </p>
              <ul className="space-y-3">
                {[
                  "Atendimento 100% individualizado",
                  "Protocolos exclusivos para cada paciente",
                  "Foco total em segurança e biossegurança",
                  "Pós-procedimento com acompanhamento real"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={EXPERT.authorityImages[0]} alt="Dra Alana em atendimento" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-600 text-white p-6 rounded-3xl shadow-xl space-y-1">
              <p className="font-signature text-2xl tracking-wide">Alana P.</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Sua especialista</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTADOS REAIS */}
      <section className="px-6 py-20 bg-[#fcfbf7]">
        <motion.div {...fadeInUp} className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-display font-bold text-neutral-800 italic">Resultados Reais</h2>
          <p className="text-neutral-500 max-w-xs mx-auto text-sm">Transformações que respeitam a identidade de cada paciente.</p>
        </motion.div>
        
        <Gallery images={EXPERT.resultsImages} title="Antes e Depois" />
        
        <div className="mt-12">
            <Gallery images={EXPERT.harmonyImages} title="Harmonização" />
        </div>

        <p className="text-center text-[10px] text-neutral-400 mt-8 italic">
          *Os resultados podem variar de pessoa para pessoa de acordo com o biotipo.
        </p>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="px-6 py-20 bg-white">
        <div className="space-y-12">
          <h2 className="text-3xl font-display font-bold text-neutral-800 text-center">O Diferencial <br/><span className="text-rose-600 underline underline-offset-8 decoration-rose-100 italic">Alana Philereno</span></h2>
          
          <div className="grid gap-4">
            {[
              { icon: <ShieldCheck className="w-6 h-6"/>, title: "Avaliação Honesta", desc: "Só recomendo o que realmente trará benefícios para você." },
              { icon: <Award className="w-6 h-6"/>, title: "Técnicas Modernas", desc: "Constante atualização com o que há de mais novo no mercado." },
              { icon: <Heart className="w-6 h-6"/>, title: "Atendimento Humanizado", desc: "Você não é apenas um número, é uma história única." },
              { icon: <Smartphone className="w-6 h-6"/>, title: "Acesso Direto", desc: "Suporte e acompanhamento direto via WhatsApp." }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-rose-500 flex-shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-neutral-800">{card.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIARIO */}
      <section className="px-6 py-16">
        <motion.div 
          {...fadeInUp}
          className="bg-neutral-900 rounded-3xl p-10 text-center space-y-8 shadow-2xl"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">Pronta para sua transformação?</h3>
            <p className="text-neutral-400 text-sm">Não adie sua autoestima. A primeira avaliação é por minha conta.</p>
          </div>
          <button
            onClick={handleCTA}
            className="w-full bg-rose-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-rose-900/20 active:scale-95 transition-transform"
          >
            Quero agendar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-display font-bold text-neutral-800 text-center mb-16 italic">Simples e prático</h2>
        
        <div className="space-y-12">
          {[
            { step: "01", title: "WhatsApp", desc: "Clique nos botões do site para iniciar uma conversa comigo." },
            { step: "02", title: "Agendamento", desc: "Escolhemos o melhor horário para sua visita." },
            { step: "03", title: "Avaliação", desc: "Conversamos pessoalmente para traçar seu plano exclusivo." }
          ].map((item, idx) => (
            <motion.div 
                key={idx}
                {...fadeInUp}
                className="relative flex gap-6"
            >
              <div className="text-5xl font-display font-black text-rose-50 opacity-100 absolute -top-4 -left-2 z-0">
                {item.step}
              </div>
              <div className="relative z-10 flex flex-col gap-1">
                <h4 className="text-xl font-bold text-neutral-800">{item.title}</h4>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAIS PROVAS - CURSOS/BASTIDORES */}
      <section className="px-6 py-20 bg-[#fcfbf7]">
        <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-display font-bold text-neutral-800 leading-tight">Autoridade em <br/>ensinar e cuidar</h2>
            <div className="pb-1 text-rose-600 flex gap-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
            </div>
        </div>
        <Gallery images={EXPERT.courseImages} title="Cursos e Práticas" />
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 bg-white text-center">
        <motion.div {...fadeInUp} className="space-y-8 max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-rose-50 mb-4">
            <img src={EXPERT.heroImage} alt="Dra Alana" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-neutral-800">Sua jornada começa aqui.</h2>
            <p className="text-neutral-600">Garanta sua vaga para a primeira consulta gratuita e descubra o que podemos conquistar juntas.</p>
          </div>
          
          <button
            onClick={handleCTA}
            className="w-full bg-rose-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-rose-200 active:scale-95 transition-transform animate-float"
          >
            Agendar Consulta Gratuita
          </button>
          
          <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
            <ShieldCheck className="w-6 h-6" />
            <Award className="w-6 h-6" />
            <Calendar className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white px-8 py-16 text-center space-y-10">
        <div className="space-y-6">
          <p className="font-signature text-4xl text-rose-300">{EXPERT.name}</p>
          <div className="space-y-2 opacity-60 text-sm font-medium tracking-wide">
            <p>{EXPERT.role}</p>
            <p>{EXPERT.location}</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href={EXPERT.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
            <Instagram className="w-5 h-5" />
          </a>
          <button onClick={handleCTA} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-2">
            <p className="text-[10px] uppercase tracking-widest opacity-30 font-bold">
              © 2024 Todos os direitos reservados
            </p>
            <p className="text-[10px] opacity-20">Design Premium by Expert Studio</p>
        </div>
      </footer>

      {/* FAB - WHATSAPP MOBILE */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={handleCTA}
        className="fixed bottom-6 right-6 z-[90] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center shadow-green-500/40 active:scale-90 transition-transform"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>
    </div>
  );
};
