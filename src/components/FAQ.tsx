"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Como escolho o tipo de massagem ideal?",
    a: "No primeiro contacto fazemos uma avaliação rápida do seu objectivo e recomendamos a opção mais indicada para o seu momento.",
  },
  {
    q: "Preciso levar algum material?",
    a: "Não é necessário levar nada. Todo o material é disponibilizado no espaço.",
  },
  {
    q: "Posso ajustar a intensidade durante a sessão?",
    a: "Sim, pode e deve! A sessão é personalizada e a intensidade é adaptada ao seu conforto a qualquer momento.",
  },
  {
    q: "Como faço para reagendar?",
    a: "Entre em contacto pelo WhatsApp ou telefone com pelo menos 24h de antecedência e faremos o reagendamento sem problemas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-noite mb-3">
          Dúvidas frequentes
        </h2>
        <span className="block w-12 h-1 bg-brand mx-auto rounded-full" />
        <p className="text-suave text-lg mt-5">
          Respostas objectivas para você agendar com segurança.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-card border transition-colors ${
              open === i ? "border-brand" : "border-gelo"
            }`}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-medium text-noite">{faq.q}</span>
              <span className="text-brand text-xl font-light ml-4 shrink-0">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="px-6 pb-5 text-suave leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
