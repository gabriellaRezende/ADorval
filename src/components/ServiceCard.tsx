"use client";
import { useState, useEffect } from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import type { ServiceDetails } from "@/src/lib/services";

type ServiceCardProps = {
  name: string;
  description: string;
  details?: ServiceDetails;
  price: string;
  duration: string;
};

const WPP_NUMBER = "+351932426003";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-xs font-semibold text-ardosia uppercase tracking-widest mb-2">
      {children}
    </h3>
  );
}

function ServiceModal({
  name,
  description,
  details,
  price,
  duration,
  onClose,
}: ServiceCardProps & { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-noite/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-creme rounded-card shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-gelo">
          <div>
            <h2 className="font-sans text-lg font-semibold text-noite">{name}</h2>
            <p className="font-sans text-xs text-ardosia uppercase tracking-widest mt-1">{duration}</p>
          </div>
          <button
            onClick={onClose}
            className="text-ardosia hover:text-noite transition-colors ml-4 mt-0.5 flex-shrink-0"
            aria-label="Fechar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 flex-1 space-y-6">
          {details ? (
            <>
              <div>
                <SectionTitle>O que é?</SectionTitle>
                <p className="font-sans text-sm text-suave leading-relaxed">{details.about}</p>
              </div>

              <div>
                <SectionTitle>Por que é recomendada?</SectionTitle>
                <p className="font-sans text-sm text-suave leading-relaxed">{details.whyRecommended}</p>
              </div>

              <div>
                <SectionTitle>Benefícios</SectionTitle>
                <ul className="space-y-1.5">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span className="font-sans text-sm text-suave leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionTitle>Contraindicações</SectionTitle>
                <p className="font-sans text-sm text-suave leading-relaxed">{details.contraindications}</p>
              </div>
            </>
          ) : (
            <p className="font-sans text-sm text-suave leading-relaxed">{description}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gelo bg-gelo/40">
          <span className="font-sans text-base font-semibold text-noite">{price}</span>
          <Button onClick={() => window.open(`https://wa.me/${WPP_NUMBER}`, "_blank")}>
            Fala comigo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCard({ name, description, details, price, duration }: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col justify-between">
        <div>
          <h3 className="font-sans text-base font-medium text-noite mb-1">{name}</h3>
          <p className="font-sans text-xs text-ardosia uppercase tracking-widest mb-3">{duration}</p>
          <p className="font-sans text-suave text-sm leading-relaxed mb-3">{description}</p>
          <button
            onClick={() => setOpen(true)}
            className="font-sans text-xs font-medium text-brand hover:text-brand-dark underline underline-offset-2 transition-colors"
          >
            Saiba mais
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-sans text-base font-medium text-noite">{price}</span>
          <Button onClick={() => window.open(`https://wa.me/${WPP_NUMBER}`, "_blank")}>
            Fala comigo
          </Button>
        </div>
      </Card>

      {open && (
        <ServiceModal
          name={name}
          description={description}
          details={details}
          price={price}
          duration={duration}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
