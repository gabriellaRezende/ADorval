import { services } from "../lib/services";

export const metadata = { title: "Serviços" };

export default function ServicosPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Serviços
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Conheça as formas de atendimento e escolha o que melhor se encaixa
          para você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition flex flex-col"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {s.name}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {s.description}
            </p>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-gray-900 font-medium text-sm">
                {s.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}