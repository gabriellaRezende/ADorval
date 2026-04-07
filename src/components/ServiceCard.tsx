type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
  onSchedule?: () => void;
};

export default function ServiceCard({
  name,
  description,
  price,
  onSchedule,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium text-gray-800">{price}</span>
        <button
          onClick={onSchedule}
          className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition"
        >
          Agendar
        </button>
      </div>
    </div>
  );
}
