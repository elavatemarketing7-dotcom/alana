
export const EXPERT = {
  name: "Alana Philereno",
  role: "Referência em estética corporal e facial",
  whatsapp: "5500000000000", // Substituir pelo número real
  instagram: "https://www.instagram.com/estetica_alana_philereno/",
  location: "Brasil",
  heroImage: "https://i.imgur.com/HS20Piy.png",
  authorityImages: [
    "https://i.imgur.com/Arcb8e0.png",
    "https://i.imgur.com/UwQp0m6.png",
    "https://i.imgur.com/Ba5DA1q.png"
  ],
  resultsImages: [
    "https://i.imgur.com/m3TV9yt.png",
    "https://i.imgur.com/VrQEOal.png",
    "https://i.imgur.com/5WeTHEL.png",
    "https://i.imgur.com/juOfZTA.png",
    "https://i.imgur.com/gNQqBZi.png",
    "https://i.imgur.com/f9bFUz8.png",
    "https://i.imgur.com/5UxS1H0.png",
    "https://i.imgur.com/VIM0xpz.png",
    "https://i.imgur.com/GJRutGN.png",
    "https://i.imgur.com/DOIYYnw.png"
  ],
  harmonyImages: [
    "https://i.imgur.com/Y2BTs6Z.png",
    "https://i.imgur.com/STCmyvc.png",
    "https://i.imgur.com/EUGnPEe.png",
    "https://i.imgur.com/yC6AyUG.png",
    "https://i.imgur.com/yairwiV.png",
    "https://i.imgur.com/pOUZaM2.png"
  ],
  courseImages: [
    "https://i.imgur.com/dz3xvi3.png",
    "https://i.imgur.com/F0nPf8n.png",
    "https://i.imgur.com/PnyXs9W.png",
    "https://i.imgur.com/8M0fhb0.png",
    "https://i.imgur.com/MF2kvau.png",
    "https://i.imgur.com/boe1aEi.png",
    "https://i.imgur.com/pEAUvME.png",
    "https://i.imgur.com/55Q96EK.png"
  ]
};

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  descriptions?: string[];
  next?: (answer: string) => string | null;
}

// Nota: O fluxo agora é isolado via App.tsx. 
// start é mantido apenas como fallback, mas o sistema inicia direto em treat_1 ou course_1.
export const QUIZ_FLOW: Record<string, QuizQuestion> = {
  treat_1: {
    id: "treat_1",
    question: "Qual área deseja transformar?",
    options: ["Harmonização Facial", "Protocolo Corporal", "Rejuvenescimento Labial", "Tratamento de Pele"],
    next: () => "treat_2"
  },
  treat_2: {
    id: "treat_2",
    question: "Você já realizou algum procedimento estético?",
    options: ["Sim, busco manutenção", "Já fiz, mas quero naturalidade", "Nunca fiz, estou ansiosa"],
    next: () => "treat_3"
  },
  treat_3: {
    id: "treat_3",
    question: "O que é mais importante para você?",
    options: ["Resultado 100% natural", "Segurança absoluta", "Rapidez na recuperação"],
    next: () => null
  },
  course_1: {
    id: "course_1",
    question: "Qual seu nível de experiência atual?",
    options: ["Sou iniciante do zero", "Já atuo mas quero faturar mais", "Sou profissional avançada"],
    next: () => "course_2"
  },
  course_2: {
    id: "course_2",
    question: "Qual sua maior meta profissional?",
    options: ["Liberdade Financeira", "Domínio da Técnica Hyaluron Pen", "Autoridade no Mercado Local"],
    next: () => "course_3"
  },
  course_3: {
    id: "course_3",
    question: "Quando deseja começar sua formação?",
    options: ["Imediatamente", "Nas próximas semanas", "Estou me planejando financeiramente"],
    next: () => null
  }
};
