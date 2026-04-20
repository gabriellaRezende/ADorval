"use client";
import { useState } from "react";
import { Button } from "./ui/Button";

const WPP_NUMBER = "5511999999999";
const EMAIL = "email@profissional.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(data: FormData) {
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    setSent(true);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-sm font-medium text-ardosia uppercase tracking-widest mb-2">
            Local de atendimento
          </h3>
          <p className="text-noite leading-relaxed">
            Rua Exemplo, 123 — Bairro<br />
            Cidade — Estado<br />
            Presencial e online
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ardosia uppercase tracking-widest mb-2">
            WhatsApp
          </h3>
          <a
            href={`https://wa.me/${WPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-pill text-sm font-medium hover:bg-green-600 transition"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ardosia uppercase tracking-widest mb-2">
            E-mail
          </h3>
          <a
            href={`mailto:${EMAIL}`}
            className="text-noite hover:text-brand transition underline underline-offset-4"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="border border-gelo rounded-card p-6">
        <h3 className="text-lg font-semibold text-noite mb-1">Proposta de parceria</h3>
        <p className="text-sm text-suave mb-6">Preencha e entrarei em contato.</p>

        {sent ? (
          <p className="text-green-600 font-medium text-sm">
            Mensagem enviada! Retornarei em breve.
          </p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)); }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-sm text-suave mb-1 block">Nome</label>
              <input
                name="nome"
                required
                className="w-full border border-gelo rounded-lg px-4 py-2.5 text-sm outline-none focus:border-ardosia transition"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm text-suave mb-1 block">Empresa / Organização</label>
              <input
                name="empresa"
                className="w-full border border-gelo rounded-lg px-4 py-2.5 text-sm outline-none focus:border-ardosia transition"
                placeholder="Opcional"
              />
            </div>
            <div>
              <label className="text-sm text-suave mb-1 block">Mensagem</label>
              <textarea
                name="mensagem"
                required
                rows={4}
                className="w-full border border-gelo rounded-lg px-4 py-2.5 text-sm outline-none focus:border-ardosia transition resize-none"
                placeholder="Conte sobre a parceria que tem em mente"
              />
            </div>
            <Button type="submit" className="w-full justify-center py-2.5">
              Enviar mensagem
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
