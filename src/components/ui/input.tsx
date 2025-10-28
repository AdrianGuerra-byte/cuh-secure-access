/**
 * COMPONENTE: Input - Campo de Entrada de Texto
 * 
 * DIMENSIONES:
 * - Altura: 40px (h-10 = 2.5rem)
 * - Ancho: 100% (w-full)
 * - Padding horizontal: 12px (px-3 = 0.75rem)
 * - Padding vertical: 8px (py-2 = 0.5rem)
 * - Border radius: 10px (rounded-md = calc(var(--radius) - 2px))
 * 
 * ESTILO:
 * - Border: 1px solid hsl(215 20% 88%) - Input border
 * - Background: hsl(210 20% 98%) - Background color
 * - Font size: 16px base, 14px en md+ (text-base md:text-sm)
 * - Color: hsl(218 54% 20%) - Foreground
 * 
 * ESTADOS:
 * - Normal: Border gris claro
 * - Focus: Ring 2px azul primary + offset 2px
 * - Disabled: Cursor not-allowed, opacity 50%
 * - Placeholder: Color gris medio hsl(218 20% 45%)
 * 
 * ACCESIBILIDAD:
 * - Focus visible con outline none + ring
 * - Ring offset para separación visual
 * - Soporte completo de atributos HTML input
 */

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
