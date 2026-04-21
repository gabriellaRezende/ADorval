import Image from "next/image";
import ServiceCard from "@/src/components/ServiceCard";
import ContactForm from "@/src/components/ContactForm";
import FAQ from "@/src/components/FAQ";
import { services } from "@/src/lib/services";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        id="home"
        className="mx-3 md:mx-6 rounded-3xl overflow-hidden bg-brand"
      >
        <div className="max-w-5xl mx-auto px-8 md:px-14 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 min-h-[70vh]">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Bem-vinda ao seu espaço de
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-black uppercase leading-[0.9]">
              Cuidado<br />&amp; Bem-estar
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Com Ana Paula Dorval
            </p>
            <a
              href="#contato"
              className="mt-2 border border-white/80 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase w-fit hover:bg-white/10 transition-colors"
            >
              Agendar Sessão
            </a>
          </div>

          {/* Oval image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-60 md:w-80 aspect-[3/4] rounded-[50%] overflow-hidden ring-[10px] ring-bege/40">
              <Image
                src="/foto-profissional.jpg"
                alt="Ana Paula Dorval"
                fill
                priority
                className="object-cover"
              />
            </div>
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
            <p className="text-suave text-sm  font-light max-w-xl mx-auto mt-6">
              A cada adicional de 30min, o valor aumenta em 15€.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description}
                price={s.price}
                duration={s.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CONTATO ── */}
      <section id="servicos" className="bg-gelo">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-noite mb-4">
              Contato
            </h2>
            <p className="text-suave text-lg max-w-xl mx-auto">
              Escolha a melhor forma de falar comigo.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
