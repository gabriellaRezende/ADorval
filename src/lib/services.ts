export type Service = {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Massagem Desportiva",
    description:
      "Para atletas e quem treina com regularidade. Melhora a circulação, acelera a recuperação muscular e previne lesões. O teu corpo agradece antes e depois do esforço.",
    price: "sob consulta",
    duration: "60 min",
  },
  {
    id: 2,
    name: "Massagem de Relaxamento",
    description:
      "Para quem vive com o stress no limite. Acalma o sistema nervoso, reduz a tensão no pescoço e nos ombros e devolve-te a sensação de respirar com mais espaço.",
    price: "60€",
    duration: "50 min",
  },
  {
    id: 3,
    name: "Massagem Oriental",
    description:
      "Trabalha os meridianos do corpo para aliviar bloqueios físicos e emocionais. Para quem procura equilíbrio energético e bem-estar holístico.",
    price: "80€",
    duration: "60 min",
  },
  {
    id: 4,
    name: "Massagem com Pedras Quentes",
    description:
      "O calor penetra fundo nos músculos, liberta a tensão acumulada e melhora a circulação. Uma experiência sensorial para os momentos em que o corpo pede mais do que uma massagem comum.",
    price: "75€",
    duration: "70 min",
  },
  {
    id: 5,
    name: "Massagem Terapêutica",
    description:
      "Personalizada para ti a cada sessão. Indicada para dores crónicas, problemas posturais e recuperação pós-reabilitação. Combina técnicas conforme o que o teu corpo precisa naquele momento.",
    price: "70€",
    duration: "50 min",
  },
  {
    id: 6,
    name: "Drenagem Linfática",
    description:
      "Estimula o sistema linfático, reduz o inchaço e a retenção de líquidos. Depois da sessão o corpo fica mais leve — por dentro e por fora.",
    price: "75€",
    duration: "50 min",
  },
];
