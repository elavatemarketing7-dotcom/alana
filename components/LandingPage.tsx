
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
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  Star,
  GraduationCap,
  Users,
  TrendingUp,
  Zap,
  MapPin,
  Clock,
  Navigation,
  Quote
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const handleCTA = (isCourse = false) => {
    const text = isCourse 
      ? `Olá Dra. Alana! Tenho interesse no Curso Hyaluron Pen. Pode me enviar os detalhes das próximas turmas?`
      : `Olá Dra. Alana! Vi seu site e gostaria de agendar minha primeira consulta gratuita.`;
    window.open(`https://wa.me/${EXPERT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true }
  };

  return (
    <div className="bg-[#fcfbf7] overflow-x-hidden">
      
      {/* BANNER DE URGÊNCIA/CONTATO NO TOPO */}
      <div className="bg-rose-600 text-white py-2 px-4 text-center text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] relative z-[60]">
         Consultas e Vagas para Cursos via WhatsApp. 
         <button onClick={() => handleCTA(false)} className="ml-2 underline hover:text-rose-200 transition-colors">
            Falar agora
         </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
          <img 
            src={EXPERT.heroImage} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbf7]/20 via-[#fcfbf7]/80 lg:via-transparent to-[#fcfbf7] lg:bg-gradient-to-r lg:from-[#fcfbf7] lg:to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl space-y-8 py-20"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-bold tracking-widest text-[10px] uppercase border border-rose-100 shadow-sm">
                <Sparkles className="w-3 h-3" /> Expert em Naturalidade
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-neutral-800 leading-[1.1]">
                Eu sou a <br />
                <span className="text-rose-600">Dra. Alana</span>
              </h1>
            </div>

            <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed max-w-md">
              Resgatando sua autoestima e formando as melhores profissionais através do método <span className="font-bold text-neutral-800 underline decoration-rose-200 decoration-4 text-rose-700">Hyaluron Pen</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTA(false)}
                className="flex-1 lg:flex-none lg:px-12 bg-neutral-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-rose-400" />
                Agendar Consulta
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTA(true)}
                className="flex-1 lg:flex-none lg:px-12 bg-white text-rose-600 border-2 border-rose-100 py-5 rounded-2xl font-bold text-lg shadow-sm flex items-center justify-center gap-3 transition-all"
              >
                <span className="shrink-0"><GraduationCap className="w-5 h-5" /></span>
                Quero Estudar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO QUEM SOU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#fcfbf7]">
                <img src={EXPERT.authorityImages[0]} alt="Dra Alana" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-rose-600 text-white p-8 rounded-[2rem] shadow-2xl space-y-2 max-w-[200px]">
                <p className="font-signature text-3xl leading-none">Alana P.</p>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80 leading-tight">Pioneira em Estética Labial</p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 leading-tight">
                  Muito além da técnica, <br/><span className="italic text-rose-600">um olhar humano</span>.
                </h2>
                <div className="w-20 h-1.5 bg-rose-200 rounded-full" />
              </div>
              
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed text-justify">
                <p>
                  Minha missão é realçar o que você já tem de mais bonito. Acredito que a estética deve ser um caminho para a confiança, e não para a padronização. Atendo cada paciente com um protocolo único, focado no equilíbrio das formas.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["Anatomia Facial", "Bioestimuladores", "Harmonização Sem Dor", "Suporte Completo"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      <span className="font-bold text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACADEMY SECTION */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="space-y-10">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">
                  <GraduationCap className="w-5 h-5" /> Mentoria de Elite
                </span>
                <h2 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Academy: De Aluna <br/>
                  a <span className="text-amber-500 italic underline decoration-amber-900">Especialista</span>
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                  O curso de Hyaluron Pen mais completo do país. Aprenda a técnica que me permitiu faturar alto e ter agenda lotada todos os meses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6 text-amber-500"/>, title: "Gestão e Lucro", desc: "Como cobrar o preço justo." },
                  { icon: <Zap className="w-6 h-6 text-amber-500"/>, title: "Técnica Prática", desc: "Hands-on em modelos reais." },
                  { icon: <Users className="w-6 h-6 text-amber-500"/>, title: "Networking", desc: "Comunidade VIP de alunas." },
                  { icon: <Award className="w-6 h-6 text-amber-500"/>, title: "Selo de Qualidade", desc: "Diploma reconhecido." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <h4 className="font-bold text-white group-hover:text-amber-500 transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-500 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCTA(true)}
                className="w-full sm:w-auto px-12 py-5 bg-amber-600 text-white rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3 hover:bg-amber-500 transition-colors"
              >
                Garantir minha Vaga <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <img src={EXPERT.courseImages[0]} className="rounded-3xl shadow-2xl border-4 border-white/10" alt="Aula" />
                  <img src={EXPERT.courseImages[1]} className="rounded-3xl shadow-2xl border-4 border-white/10" alt="Prática" />
               </div>
               <div className="space-y-4">
                  <img src={EXPERT.courseImages[2]} className="rounded-3xl shadow-2xl border-4 border-white/10" alt="Diploma" />
                  <div className="bg-amber-600 p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center shadow-2xl">
                     <Star className="w-10 h-10 fill-white mb-2" />
                     <p className="font-bold text-2xl">4.9/5</p>
                     <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Avaliação Alunas</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESULTADOS - GALERIA */}
      <section className="py-24 bg-[#fcfbf7]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
             <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-xs">O Poder da Naturalidade</span>
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 italic">Transformações Antes e Depois</h2>
             <p className="text-neutral-500 max-w-md mx-auto">Resultados reais em pacientes reais. Sem filtros, apenas técnica e harmonia.</p>
          </motion.div>
          
          <div className="space-y-16">
            <Gallery images={EXPERT.resultsImages} title="Rostos & Lábios" />
            <Gallery images={EXPERT.harmonyImages} title="Harmonia Corporal" />
          </div>
        </div>
      </section>

      {/* SEÇÃO FEEDBACK (O Wall of Love) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
             <div className="flex items-center justify-center gap-2 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
             </div>
             <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-xs">A voz das nossas pacientes</span>
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 italic">Wall of Love</h2>
             <p className="text-neutral-500 max-w-md mx-auto">Mais do que procedimentos, criamos conexões e resgatamos sorrisos todos os dias.</p>
          </motion.div>

          <div className="relative">
            {/* Gradientes laterais para efeito de carrossel suave no mobile */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none lg:hidden" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none lg:hidden" />

            <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
              {EXPERT.feedbackImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-shrink-0 w-[280px] lg:w-full snap-center"
                >
                  <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-neutral-100 bg-neutral-50 p-2">
                    <img 
                      src={img} 
                      alt={`Feedback ${idx + 1}`} 
                      className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
             <motion.button
               whileHover={{ scale: 1.05 }}
               onClick={() => handleCTA(false)}
               className="inline-flex items-center gap-3 text-rose-600 font-bold text-sm uppercase tracking-widest border-b-2 border-rose-100 pb-1 hover:border-rose-500 transition-all"
             >
                Ver mais no Instagram <Instagram className="w-4 h-4" />
             </motion.button>
          </div>
        </div>
      </section>

      {/* SEÇÃO: LOCALIZAÇÃO */}
      <section className="py-24 bg-[#fcfbf7] border-t border-neutral-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
             <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-xs">Onde nos encontrar</span>
             <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800">Nossa <span className="text-rose-600 italic">Clínica</span></h2>
             <p className="text-neutral-500 max-w-md mx-auto">Ambiente projetado para seu máximo conforto e segurança em Balneário Camboriú.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Mapa Interativo */}
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14216.54148967657!2d-48.6341295!3d-26.9902638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b60338605c75%3A0x6d9004044140081e!2sBalne%C3%A1rio%20Cambori%C3%BA%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1716382049102!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Card de Endereço */}
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 lg:p-10 rounded-[3rem] shadow-xl border border-neutral-100 space-y-8 h-full flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 text-lg">Endereço Premium</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mt-1">
                      Av. Atlântica, Edifício Visionaire, 1200<br/>
                      Centro, Balneário Camboriú - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 text-lg">Horários</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mt-1">
                      Segunda a Sexta: 09h às 20h<br/>
                      Sábados: 09h às 14h
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/50">
                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/uX3L5x3Y5h5h5h5h5', '_blank')}
                  className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-rose-600 transition-colors shadow-lg"
                >
                  <Navigation className="w-4 h-4" /> Traçar Rota no GPS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-rose-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl space-y-12">
          <div className="space-y-4 text-white">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">Dê o próximo passo hoje.</h2>
            <p className="text-rose-100 text-lg italic opacity-90">Não deixe para amanhã a mudança que você pode iniciar agora.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
                onClick={() => handleCTA(false)}
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-rose-600 rounded-2xl font-bold text-xl shadow-2xl flex items-center justify-center gap-3"
            >
                Agendar Procedimento <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
                onClick={() => handleCTA(true)}
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 border border-white/20"
            >
                Mentoria Profissional <GraduationCap className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="space-y-6">
               <p className="font-signature text-5xl text-rose-400">{EXPERT.name}</p>
               <p className="text-neutral-400 text-sm">{EXPERT.role}</p>
            </div>
            
            <div className="flex gap-12">
               <div className="space-y-4">
                  <h5 className="font-bold text-rose-500 uppercase tracking-widest text-[10px]">Redes</h5>
                  <a href={EXPERT.instagram} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                     <Instagram className="w-4 h-4" /> Instagram
                  </a>
               </div>
               <div className="space-y-4">
                  <h5 className="font-bold text-rose-500 uppercase tracking-widest text-[10px]">Endereço</h5>
                  <p className="text-neutral-400 text-sm">Consultório em Balneário Camboriú, SC</p>
               </div>
            </div>

            <div className="space-y-4 lg:text-right">
               <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest leading-loose">
                  © 2024 Alana Philereno Academy <br/>
                  Desenvolvido por Web Design Premium
               </p>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB WHATSAPP - PULSANTE */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => handleCTA(false)}
        className="fixed bottom-6 right-6 z-[90] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center shadow-green-500/30 border-4 border-white animate-bounce"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>
    </div>
  );
};
