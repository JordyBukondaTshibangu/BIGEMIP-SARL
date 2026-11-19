import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type Variant = "ore" | "ghost-light" | "ghost-dark" | "ink";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  ore: "bg-ore text-basalt hover:bg-ore-bright",
  ink: "bg-basalt text-survey hover:bg-basalt-3",
  "ghost-light":
    "border border-white/35 text-white hover:border-white hover:bg-white/5",
  "ghost-dark": "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
};

export function buttonClasses(variant: Variant = "ore", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: Variant;
  className?: string;
};

function Button({
  buttonText,
  type = "button",
  disabled,
  variant,
  className,
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, className)}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

/** A locale-aware link styled as a button (avoids nesting <button> inside <a>). */
export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return (
    <Link {...props} className={buttonClasses(variant, className ?? "")} />
  );
}

export default Button;
