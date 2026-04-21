export type Service = {
  id: number;
  name: string;
  description: string;
  price: string; // ex: "R$ 200,00" ou "Consulte"
  duration: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Massagem Relaxante",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "60€",
    duration: "50 min",
  },
  {
    id: 2,
    name: "Massagem Oriental",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "80€",
    duration: "60 min",
  },
  {
    id: 3,
    name: "Massagem com Pedras Quentes",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "75€",
    duration: "70 min",
  },
  {
    id: 4,
    name: "Massagem Terapêutica",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "75€",
    duration: "50 min",
  },
  {
    id: 5,
    name: "Drenagem Linfática",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "75€",
    duration: "50 min",
  },
  {
    id: 6,
    name: "Massagem Desportiva",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "Consulte",
    duration: "70 min",
  },
];