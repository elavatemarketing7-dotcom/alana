
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
  next?: (answer: string) => string | null; // Função para determinar a próxima pergunta (ramificação)
}

export const QUIZ_FLOW: Record<string, QuizQuestion> = {
  start: {
    id: "start",
    question: "Como posso te ajudar hoje?",
    options: ["Quero realizar um procedimento", "Quero fazer um Curso (Hyaluron Pen)"],
    next: (val) => val.includes("Curso") ? "course_1" : "treat_1"
  },
  // Ramo de Tratamento
  treat_1: {
    id: "treat_1",
    question: "Qual o seu principal objetivo hoje?",
    options: ["Rosto mais harmônico", "Corpo mais definido", "Tratar manchas ou acne", "Rejuvenescimento"],
    next: () => "treat_2"
  },
  treat_2: {
    id: "treat_2",
    question: "Você já realizou algum procedimento estético antes?",
    options: ["Sim, realizo sempre", "Sim, há muito tempo", "Nunca realizei"],
    next: () => "treat_3"
  },
  treat_3: {
    id: "treat_3",
    question: "O que mais te preocupa em um procedimento?",
    options: ["Naturalidade no resultado", "Segurança e saúde", "Dor durante o processo", "Tempo de recuperação"],
    next: () => null // Fim
  },
  // Ramo de Curso
  course_1: {
    id: "course_1",
    question: "Você já atua na área da estética?",
    options: ["Sim, sou profissional", "Estou começando agora", "Quero mudar de carreira"],
    next: () => "course_2"
  },
  course_2: {
    id: "course_2",
    question: "Qual sua maior dificuldade atual?",
    options: ["Atrair clientes", "Domínio da técnica", "Medo de agulhas/procedimentos", "Falta de faturamento"],
    next: () => "course_3"
  },
  course_3: {
    id: "course_3",
    question: "Quando pretende iniciar sua especialização?",
    options: ["Imediatamente", "Nos próximos 30 dias", "Estou me planejando"],
    next: () => null // Fim
  }
};
