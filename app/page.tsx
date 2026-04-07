import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero — banner com foto */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gray-50">
        {/* Troque o src pela foto real. Coloque a imagem em /public/foto-profissional.jpg */}
        <Image
          src="/foto-profissional.jpg"
          alt="Foto da profissional"
          fill
          priority
          className="object-cover object-top opacity-80"
        />
        {/* Overlay escuro suave para legibilidade do texto */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Texto sobre a foto */}
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-3 opacity-80">
            Profissão / Especialidade
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Nome da Profissional
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Frase de destaque: o que ela oferece e para quem.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/servicos"
              className="bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              Ver serviços
            </Link>
            <Link
              href="/contato"
              className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de boas-vindas */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
          Bem-vindo ao meu espaço
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          {/* Substitua pelo texto real de apresentação da profissional */}
          Escreva aqui uma apresentação calorosa sobre quem ela é, sua formação,
          valores e o que a diferencia. Esse texto aparece logo abaixo do banner
          e é a primeira impressão de quem visita o site.
        </p>
      </section>
    </>
  );
}