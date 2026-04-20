import Image from "next/image";
import ServiceCard from "@/src/components/ServiceCard";
import ContactForm from "@/src/components/ContactForm";
import { services } from "@/src/lib/services";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="relative w-full h-[90vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-creme">
        <Image
          src="/foto-profissional.jpg"
          alt="Foto da profissional"
          fill
          priority
          className="object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-noite/30" />
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-3 opacity-80">
            Massoterapeuta / Massagem Desportiva
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Ana Paula Dorval
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Aqui você encontra a paz e o cuidado que merece. Agende seu momento de bem-estar e relaxamento.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#servicos"
              className="bg-white text-noite px-6 py-3 rounded-pill text-sm font-medium hover:bg-creme transition"
            >
              Ver serviços
            </a>
            <a
              href="#contato"
              className="border border-white text-white px-6 py-3 rounded-pill text-sm font-medium hover:bg-white/10 transition"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="max-w-3xl mx-auto px-6 py-14 md:py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-noite">
          Bem-vindo ao meu espaço!
        </h2>
        <h2 className="text-xl font-normal mb-6 text-suave">
          Me chamo Ana Dorval.
        </h2>
        <p className="text-suave text-lg leading-relaxed">
          Escreva aqui uma apresentação calorosa sobre quem ela é, sua formação,
          valores e o que a diferencia. Esse texto aparece logo abaixo do banner
          e é a primeira impressão de quem visita o site.
        </p>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-gelo">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-noite mb-4">
              Serviços
            </h2>
            <p className="text-suave text-lg max-w-xl mx-auto">
              Conheça as formas de atendimento e escolha o que melhor se encaixa
              para você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description}
                price={s.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-noite mb-4">
            Contato
          </h2>
          <p className="text-suave text-lg">
            Escolha a melhor forma de falar comigo.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
