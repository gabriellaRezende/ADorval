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
        "A Deep Tissue e uma massagem de trabalho muscular profundo, focada nas zonas de maior acumulacao de tensao cronica — costas, pescoco e ombros. Com tecnica precisa e pressao progressiva, actua nas camadas mais profundas da musculatura para libertar aderencias e restaurar o movimento natural dos tecidos.",
      whyRecommended:
        "E recomendada para quem sofre de dores musculares persistentes, rigidez cervical ou lombar, cefaleias de origem muscular, ou para quem passa longas horas sentado ou em posicoes estaticas. Adequada tambem para quem pratica actividade fisica regularmente e sente necessidade de recuperacao muscular",
      benefits: [
        "Libertação de tensão muscular profunda e crônica",
        "Alívio de dores cervicais e lombares",
        "Redução de cefaleias de origem muscular",
        "Melhora da mobilidade e amplitude de movimento",
        "Sensação duradoura de descompressão e leveza",
      ],
      contraindications:
        "Não recomendada em casos de osteoporose severa, inflamação muscular aguda, hernias discais em fase aguda, alterações de coagulação. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "50€",
    duration: "40 min",
  },
  {
    id: 2,
    name: "Massagem Sueca",
    description:
      "A massagem sueca combina movimentos longos e suaves com técnicas combinadas para aliviar a tensão muscular, melhorar a circulação e promover o relaxamento profundo. Ideal para quem procura um momento de cuidado e alívio do stress do dia a dia.",
      details: {
      about:
        "A Massagem Sueca e uma das técnicas mais reconhecidas e atemporais da massoterapia ocidental. Através de manobras manuais cuidadosamente combinadas, trabalha o corpo de forma global e harmoniosa, promovendo relaxamento muscular profundo, estimulação da circulação e reequilíbrio do sistema nervoso. E uma massagem calma, de ritmo suave e intenção clara: devolver ao corpo o equilíbrio que o quotidiano vai retirando.",
      whyRecommended:
        "E recomendada para quem experiencia stress acumulado, tensão muscular generalizada, dificuldade em relaxar ou perturbações do sono. Ideal também como massagem de manutenção regular para quem pretende cuidar do corpo e da mente de forma preventiva.",
      benefits: [
        "Relaxamento muscular e mental profundo",
        "Redução do stress e da ansiedade",
        "Estimulação da circulação sanguínea",
        "Alívio de tensões musculares acumuladas",
        "Melhora da qualidade do sono e do bem-estar geral",
      ],
      contraindications:
        "Não recomendada em casos de Lesões cutâneas agudas, febre e trombose. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "60€",
    duration: "50 min",
  },
  {
    id: 3,
    name: "Massagem Oriental",
    description:
      "A Massagem Oriental é uma experiência revigorante realizada no tatame, com movimentos ascendentes, alongamentos passivos e pontos de pressão ao longo dos meridianos energéticos do corpo. Ideal para quem busca um cuidado que integra corpo e mente, promovendo equilíbrio, flexibilidade e bem-estar geral.",
      details: {
      about:
        "A Massagem Oriental e uma experiencia energizante que combina o melhor de três grandes tradições — Shiatsu, Ayurveda e Massagem Tailandesa. Realizada no tatame, une pontos de pressão, movimentos ascendentes profundos e alongamentos passivos numa sequência fluida que atua sobre o corpo em todas as suas dimensões.",
      whyRecommended:
        "E recomendada para quem se sente bloqueado, sem energia ou com mobilidade reduzida. Indicada também para quem experiencia tensão lombar, rigidez articular ou simplesmente procura uma massagem que revitalize em vez de adormecer. Uma opção ideal para quem quer sentir o corpo mais livre e a mente mais clara.",
      benefits: [
       "Estimulação dos meridianos e reequilíbrio do fluxo energético",
       "Aumento da flexibilidade e amplitude articular",
       "Descompressão vertebral e alívio de tensão lombar",
       "Revitalização e aumento de energia",
       "Efeito imediato de leveza, fluidez e bem-estar global",
      ],
      contraindications:
        "Não recomendada em casos de osteoporose, gravidez, lesões articulares agudas, hipotensão severa, hernias discais inflamadas. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "80€",
    duration: "60 min",
  },
  {
    id: 4,
    name: "Massagem com Pedras Quentes",
    description:
      "Combina o trabalho manual terapêutico com a termoterapia das pedras basálticas vulcânicas. As pedras são aquecidas e deslizadas em movimento contínuo sobre o corpo, proporcionando relaxamento profundo dos músculos, alívio da tensão e melhora da circulação.",
      details: {
      about:
        "A Massagem com Pedras Quentes combina o trabalho manual terapêutico com a termoterapia das pedras basálticas vulcânicas. As pedras, aquecidas e deslizadas em movimento contínuo sobre o corpo, preparam os tecidos musculares para receber o trabalho manual com maior profundidade e conforto, criando uma experiencia de relaxamento sensivelmente rica e restauradora.",
      whyRecommended:
        "E recomendada para quem apresenta tensão muscular persistente, dores crônicas de baixa intensidade ou simplesmente procura uma experiencia de bem-estar mais profunda e envolvente. O calor das pedras vulcânicas torna a massagem mais tolerável para pessoas com maior sensibilidade, ao mesmo tempo que potencia os seus efeitos terapêuticos.",
      benefits: [
        "Relaxamento muscular profundo por acao termica e manual combinadas",
        "Efeito analgésico e reducao da percepcao de dor muscular",
        "Vasodilatacao e melhora da circulacao local",
        "Maior tolerancia e conforto durante o trabalho manual",
        "Experiencia sensorial profundamente envolvente e restauradora",
      ],
      contraindications:
        "Não recomendada em casos de diabetes descontrolada, hipersensibilidade ao calor e gravidez. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "75€",
    duration: "70 min",
  },
  {
    id: 5,
    name: "Lomi Lomi",
    description:
      "Massagem havaiana que combina movimentos fluidos e rítmicos com o antebraço e as mãos percorrendo todo o corpo para promover relaxamento profundo e equilíbrio energético. Ideal para quem busca uma experiência de cuidado que nutre o corpo e a alma.",
      details: {
      about:
        "A Lomi Lomi e uma massagem de origem havaiana que se distingue pela sua fluidez e continuidade. Realizada com antebraços e mãos em movimentos longos e envolventes, percorre o corpo de forma ininterrupta, criando uma experiencia sensivelmente única e integrada que atua ao mesmo tempo sobre o físico e o sistema nervoso.",
      whyRecommended:
        "E recomendada para quem procura um relaxamento verdadeiramente profundo, para quem carrega tensão emocional acumulada ou para quem deseja uma experiencia de massagem completa e diferenciada. Particularmente indicada em momentos de esgotamento, transição ou necessidade de reconexão com o próprio corpo.",
      benefits: [
        "Relaxamento profundo do sistema nervoso central e periférico",
        "Libertação de tensão física e emocional acumulada",
        "Trabalho global e contínuo de toda a musculatura",
        "Melhora da consciência e presença corporal",
        "Sensação duradoura de renovação e leveza",
      ],
      contraindications:
        "Não recomendada em casos de gravidez, trombose ativa, doenças de pele em fase aguda. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "70€",
    duration: "50 min",
  },
  {
    id: 6,
    name: "Drenagem Linfática Manual",
    description:
      "Técnica especializada de toque suave e profundamente eficaz. Com movimentos lentos, rítmicos e precisos, atua diretamente sobre o sistema linfático, estimulando a eliminação de líquidos em excesso, toxinas e resíduos metabólicos acumulados nos tecidos.",
      details: {
      about:
        "A Drenagem Linfática Manual e uma técnica especializada de toque suave e profundamente eficaz. Com movimentos lentos, rítmicos e precisos, atua diretamente sobre o sistema linfático, estimulando a eliminação de líquidos em excesso, toxinas e resíduos metabólicos acumulados nos tecidos.",
      whyRecommended:
        "E recomendada para quem sofre de retenção de líquidos, inchaço nos membros, sensação de peso ou fadiga. Indicada também no período pós-operatório, em contexto de recuperação estética, ou como suporte ao sistema imunológico. Em situações de linfedema ou pós-cirurgia oncológica, requer acompanhamento médico prévio.",
      benefits: [
        "Redução efetiva de edemas e retenção de líquidos",
        "Estimulação e reforço do sistema imunológico",
        "Alívio da sensação de peso, inchaço e fadiga",
        "Suporte na recuperação pós-operatória e estética",
        "Melhora do bem-estar geral e da circulação linfática",

      ],
      contraindications:
        "Não recomendada em casos de Trombose ativa, insuficiência cardíaca descompensada, infecções agudas. Em caso de dúvida e em contextos oncológico ou pós-cirúrgico, consulte o seu médico antes de realizar a sessão.",
    },
    price: "75€",
    duration: "50 min",
  },
  {
    id: 7,
    name: "Ritual Pernas Leves",
    description:
      "Tratamento dedicado exclusivamente aos membros inferiores, combinando manobras manuais, drenantes e tonificantes para aliviar a sensação de pernas cansadas, melhorar a circulação e reduzir o inchaço.",
      details: {
      about:
        "O Ritual Pernas Leves e um tratamento drenante e tonificante dedicado exclusivamente aos membros inferiores. Combina manobras manuais especializadas com a passagem de pedras vulcânicas frias — um elemento diferenciador que potencia os resultados e eleva a experiencia. As pedras, mantidas entre os 10 e os 15 graus, provocam uma vasoconstrição periférica natural que estimula o retorno venoso e linfático, reduz o inchaço e proporciona uma sensação imediata de frescura e leveza.",
      whyRecommended:
        "E especialmente recomendado nos meses mais quentes, quando o calor favorece a acumulação de líquidos e a sensação de pernas pesadas e cansadas. Indicado para quem passa longas horas de pé ou sentado, para quem sofre de retenção de líquidos nos membros inferiores, ou simplesmente para quem quer tratar as pernas com a atenção que merecem. Os resultados são visíveis e sensíveis logo após a primeira sessão.",
      benefits: [
        "Redução imediata da sensação de peso, inchaço e cansaço nas pernas",
        "Estimulação do retorno venoso e linfático pelos membros inferiores",
        "Efeito tonificante e refrescante proporcionado pelas pedras vulcânicas frias",
        "As pedras frias promovem vasoconstrição periférica, reduzindo o edema e ativando a circulação",
        "Estimulação da bomba plantar — mecanismo natural de retorno venoso",
        "Sensação prolongada de leveza e frescura, especialmente benéfica no verão",
        "Ideal como tratamento regular de manutenção para quem tem tendencia para pernas pesadas",
      ],
      contraindications:
        "Não recomendada em casos de trombose ativa, varizes em fase aguda, neuropatia periférica severa. Em caso de dúvida, consulte o seu médico antes de realizar a sessão.",
    },
    price: "45€",
    duration: "30 min",
  },
];
