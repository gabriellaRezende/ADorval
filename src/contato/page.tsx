"use client";
import { useState } from "react";

export default function ContatoPage() {
  const WPP_NUMBER = "5511999999999"; // substitua pelo número real (com DDI+DDD)
  const EMAIL = "email@profissional.com"; // substitua pelo email real

  const [form, setForm] = useState({ nome: "", empresa: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Envia via Formspree — troque YOUR_FORM_ID pelo ID gerado em formspree.io
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSent(true);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Contato
        </h1>
        <p className="text-gray-500 text-lg">
          Escolha a melhor forma de falar comigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Coluna esquerda — informações */}
        <div className="flex flex-col gap-8">
          {/* Local de atendimento */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
              Local de atendimento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Rua Exemplo, 123 — Bairro<br />
              Cidade — Estado<br />
              Atendimento presencial e online
            </p>
          </div>

          {/* WhatsApp */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
              WhatsApp
            </h2>
            <a
              href={`https://wa.me/${WPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-600 transition"
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* E-mail */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
              E-mail
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-700 hover:text-gray-900 transition underline underline-offset-4"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Coluna direita — formulário de parceria */}
        <div className="border border-gray-100 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Proposta de parceria
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Preencha o formulário e entrarei em contato.
          </p>

          {sent ? (
            <p className="text-green-600 font-medium text-sm">
              Mensagem enviada! Retornarei em breve.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Nome</label>
                <input
                  name="nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Empresa / Organização</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition"
                  placeholder="Opcional"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition resize-none"
                  placeholder="Conte sobre a parceria que tem em mente"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}