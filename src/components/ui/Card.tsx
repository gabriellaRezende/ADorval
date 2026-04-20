type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-white border border-gelo rounded-card p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
      {...props}
    />
  );
}
