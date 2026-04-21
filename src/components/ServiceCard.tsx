"use client";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

type ServiceCardProps = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

const WPP_NUMBER = "+351932426003";

export default function ServiceCard({ name, description, price, duration }: ServiceCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-noite mb-2">{name} | {duration}</h3>
        <p className="text-suave text-sm leading-relaxed mb-4">{description}</p>
        <p className="text-suave text-sm leading-relaxed mb-4">Tempo: {duration}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium text-noite">{price}</span>
        <Button onClick={() => window.open(`https://wa.me/${WPP_NUMBER}`, "_blank")}>Agendar</Button>
      </div>
    </Card>
  );
}
