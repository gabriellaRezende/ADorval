import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
  onSchedule?: () => void;
};

export default function ServiceCard({ name, description, price, onSchedule }: ServiceCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-noite mb-2">{name}</h3>
        <p className="text-suave text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium text-noite">{price}</span>
        <Button onClick={onSchedule}>Agendar</Button>
      </div>
    </Card>
  );
}
