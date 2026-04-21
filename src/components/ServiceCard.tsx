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
        <h3 className="font-sans text-base font-medium text-noite mb-1">{name}</h3>
        <p className="font-sans text-xs text-ardosia uppercase tracking-widest mb-3">{duration}</p>
        <p className="font-sans text-suave text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="font-sans text-base font-medium text-noite">{price}</span>
        <Button onClick={() => window.open(`https://wa.me/${WPP_NUMBER}`, "_blank")}>
          Fala comigo
        </Button>
      </div>
    </Card>
  );
}
