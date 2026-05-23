import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  as: Component = "div",
  hover = true,
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/25 backdrop-blur-xl",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </Component>
  );
}
