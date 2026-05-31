export type ServiceDetails = {
  about: string;
  whyRecommended: string;
  benefits: string[];
  contraindications: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  details?: ServiceDetails;
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Deep Tissue",
    description:
      "Trabalho miofascial focado principalmente em costas, pescoço e ombros para aliviar tensões profundas. Ideal para quem sofre de dores crónicas ou tensão muscular intensa, proporcionando alívio duradouro e melhor mobilidade.",
    details: {
      about:
        "A massagem Deep Tissue é uma técnica terapêutica que atua nas camadas mais profundas do tecido muscular e da fáscia. Utiliza pressão firme e movimentos lentos para atingir as fibras musculares mais internas, desfazendo nódulos de tensão (trigger points) e aderências que causam dor e limitação de movimento.",
      whyRecommended:
        "É especialmente indicada para quem acumula tensão muscular intensa devido ao stress, postura inadequada ou esforço físico repetitivo. Ao trabalhar em profundidade, a técnica atinge o que massagens de superfície não conseguem alcançar, proporcionando alívio duradouro e restaurando a mobilidade natural dos tecidos.",
      benefits: [
        "Alívio de dores crónicas nas costas, pescoço e ombros",
        "Quebra de aderências e nódulos de tensão profunda",
        "Melhora da postura e amplitude de movimento",
        "Redução da inflamação muscular",
        "Diminuição do stress e da ansiedade",
        "Melhora da circulação sanguínea local",
      ],
      contraindications:
        "Não recomendada em casos de trombose, osteoporose severa, lesões musculares agudas, infecções cutâneas, gravidez ou após cirurgias recentes. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "50€",
    duration: "40 min",
  },
  {
    id: 2,
    name: "Massagem Sueca",
    description:
      "A massagem sueca combina movimentos longos e suaves com técnicas combinadas para aliviar a tensão muscular, melhorar a circulação e promover o relaxamento profundo. Ideal para quem procura um momento de cuidado e alívio do stress do dia a dia.",
    price: "60€",
    duration: "50 min",
  },
  {
    id: 3,
    name: "Massagem Oriental",
    description:
      "A Massagem Oriental é uma experiência revigorante realizada no tatame, com movimentos ascendentes, alongamentos passivos e pontos de pressão ao longo dos meridianos energéticos do corpo. Ideal para quem busca um cuidado que integra corpo e mente, promovendo equilíbrio, flexibilidade e bem-estar geral.",
    price: "80€",
    duration: "60 min",
  },
  {
    id: 4,
    name: "Massagem com Pedras Quentes",
    description:
      "Combina o trabalho manual terapêutico com a termoterapia das pedras basálticas vulcânicas. As pedras são aquecidas e deslizadas em movimento contínuo sobre o corpo, proporcionando relaxamento profundo dos músculos, alívio da tensão e melhora da circulação.",
    price: "75€",
    duration: "70 min",
  },
  {
    id: 7,
    name: "Lomi Lomi",
    description:
      "Massagem havaiana que combina movimentos fluidos e rítmicos com o antebraço e as mãos percorrendo todo o corpo para promover relaxamento profundo e equilíbrio energético. Ideal para quem busca uma experiência de cuidado que nutre o corpo e a alma.",
    price: "70€",
    duration: "50 min",
  },
  {
    id: 6,
    name: "Drenagem Linfática Manual",
    description:
      "Técnica especializada de toque suave e profundamente eficaz. Com movimentos lentos, rítmicos e precisos, atua diretamente sobre o sistema linfático, estimulando a eliminação de líquidos em excesso, toxinas e resíduos metabólicos acumulados nos tecidos.",
    price: "75€",
    duration: "50 min",
  },
  {
    id: 5,
    name: "Ritual Pernas Leves",
    description:
      "Tratamento dedicado exclusivamente aos membros inferiores, combinando manobras manuais, drenantes e tonificantes para aliviar a sensação de pernas cansadas, melhorar a circulação e reduzir o inchaço.",
    price: "45€",
    duration: "30 min",
  },
];
