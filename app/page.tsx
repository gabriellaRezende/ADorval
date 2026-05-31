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
        className="mx-3 md:mx-6 rounded-3xl overflow-hidden relative"
        style={{ minHeight: "85vh" }}
      >
        {/* Foto de fundo */}
        <Image
          src="/ana-paula-hero.jpg"
          alt="Ana Paula Dorval — Massoterapia em Lisboa"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay atmosférico: escuro à esquerda/baixo, transparente à direita/cima */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to right, #2C3A52 0%, #2C3A52CC 28%, #2C3A5266 55%, transparent 78%)",
              "linear-gradient(to top,   #2C3A52 0%, #2C3A5299 18%, transparent 45%)",
            ].join(", "),
          }}
        />

        {/* Textura de grão subtil para profundidade táctil */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "260px 260px",
          }}
        />

        {/* Conteúdo — posicionamento editorial: canto inferior esquerdo */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-14 flex flex-col justify-end pb-14 md:pb-20" style={{ minHeight: "85vh" }}>
          <div className="flex flex-col gap-5 text-creme max-w-lg">

            {/* Eyebrow com traço decorativo */}
            <div className="hero-animate hero-animate-1 flex items-center gap-3">
              <span className="block w-7 h-px" style={{ background: "#C4956A" }} />
              <p className="font-sans uppercase text-bege/75" style={{ fontSize: "0.62rem", letterSpacing: "0.42em" }}>
                Bem-vinda ao teu espaço de
              </p>
            </div>

            {/* Título principal */}
            <h1
              className="hero-animate hero-animate-2 font-serif font-medium"
              style={{ fontSize: "clamp(3.4rem, 7.5vw, 6.5rem)", lineHeight: 0.88 }}
            >
              Cuidado<br />
              <span style={{ color: "#E8C9A0" }}>&amp; Bem-estar</span>
            </h1>

            {/* Separador + nome */}
            <div className="hero-animate hero-animate-3 flex items-center gap-4 pt-1">
              <span className="block h-px" style={{ width: "2.5rem", background: "#C4956A", opacity: 0.5 }} />
              <p
                className="font-sans text-bege/55"
                style={{ fontSize: "0.58rem", letterSpacing: "0.52em", textTransform: "uppercase" }}
              >
                Com Ana Dorval
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-animate hero-animate-4 flex flex-wrap gap-3 pt-2">
              <Button href="#contato" variant="primary" size="lg">
                Agendar sessão
              </Button>
              <a
                href="#servicos"
                className="font-sans font-medium rounded-pill transition-colors text-creme/80 border border-creme/30 hover:bg-creme/10 hover:text-creme"
                style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}
              >
                Conheça os serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="max-w-3xl mx-auto px-6 py-14 md:py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2 text-noite">
          Muito prazer, Ana Dorval!
        </h2>
        <p className="font-sans text-suave text-lg leading-relaxed">
          Sou massoterapeuta com formação técnica em fisioterapia e experiência em contextos de spa e desporto. O que me move é a atenção genuína a quem está à minha frente — cada sessão é dedicada ao teu bem-estar, com técnica e com presença.
        </p>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-gelo">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-noite mb-4">
              Serviços
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description}
                details={s.details}
                price={s.price}
                duration={s.duration}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── CONTATO ── */}
      <section id="contato" className="">
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
