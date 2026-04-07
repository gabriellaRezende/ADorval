export type Service = {
  id: number;
  name: string;
  description: string;
  price: string; // ex: "R$ 200,00" ou "Consulte"
};

export const services: Service[] = [
  {
    id: 1,
    name: "Nome do serviço 1",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "R$ 200,00",
  },
  {
    id: 2,
    name: "Nome do serviço 2",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "R$ 350,00",
  },
  {
    id: 3,
    name: "Nome do serviço 3",
    description: "Descrição breve do que é esse serviço e para quem se destina.",
    price: "Consulte",
  },
];