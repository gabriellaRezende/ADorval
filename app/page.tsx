import Image from "next/image";
import ServiceCard from "@/src/components/ServiceCard";
import ContactForm from "@/src/components/ContactForm";
import FAQ from "@/src/components/FAQ";
import { services } from "@/src/lib/services";
import { Button } from "@/src/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        id="home"
        className="mx-3 md:mx-6 rounded-3xl overflow-hidden bg-lilas"
      >
        <div className="max-w-5xl mx-auto px-8 md:px-14 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 min-h-[70vh]">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-6 text-creme">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-creme">
              Bem-vinda ao teu espaço de
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-medium leading-[0.95]">
              Cuidado<br />& Bem-estar
            </h1>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em]">
              Com Ana Paula Dorval
            </p>
            <Button href="#contato" variant="ghost" size="sm" className="w-max">
              Fala comigo para agendar
            </Button>
            <Button href="#servicos" variant="outline" size="lg">
              Conhece os serviços
            </Button>
          </div>

          {/* Oval image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-60 md:w-90 aspect-[3/4] rounded-[50%] overflow-hidden ring-[6px] ring-bege/40">
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
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2 text-noite">
          Bem-vinda ao meu espaço.
        </h2>
        <h3 className="font-sans text-xl font-normal mb-6 text-suave">
          Chamo-me Ana Paula Dorval.
        </h3>
        <p className="font-sans text-suave text-lg leading-relaxed">
          Sou massoterapeuta em Lisboa, com formação como Auxiliar Técnica de Fisioterapia.
          O que me diferencia não é só a técnica — é a atenção a quem está à minha frente.
          Cada sessão é adaptada ao teu momento: ao que o teu corpo precisa, ao que estás a sentir.
          Cuido de ti com seriedade e com calor humano, porque acredito que os dois andam sempre juntos.
        </p>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-gelo">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-noite mb-4">
              Serviços
            </h2>
            <p className="font-sans text-suave text-lg max-w-xl mx-auto">
              Escolhe o que melhor se encaixa para ti.
            </p>
            <p className="font-sans text-suave text-sm font-light max-w-xl mx-auto mt-4">
              A cada adicional de 30 min, o valor aumenta em 15€.
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
      <section id="contato" className="bg-gelo">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-noite mb-4">
              Fala comigo
            </h2>
            <p className="font-sans text-suave text-lg max-w-xl mx-auto">
              Escolhe a forma mais cómoda de entrar em contacto.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
