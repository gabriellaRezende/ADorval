type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  ghost: "text-brand hover:bg-brand-light",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-1.5",
  md: "text-sm px-5 py-2",
  lg: "text-base px-6 py-3",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

type AsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type AsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = AsButton | AsAnchor;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `rounded-pill font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
}
