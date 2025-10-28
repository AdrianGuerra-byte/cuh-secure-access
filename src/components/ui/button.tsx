/**
 * COMPONENTE: Button - Sistema de Botones con Variantes
 * 
 * VARIANTES DE ESTILO (variant):
 * 
 * 1. DEFAULT (Primary)
 *    - Background: hsl(218 54% 31%) - Azul CUH institucional
 *    - Color: #ffffff - Texto blanco
 *    - Hover: bg-primary/90 (10% más transparente)
 *    - Uso: Acciones principales, envío de formularios
 * 
 * 2. DESTRUCTIVE (Peligroso)
 *    - Background: hsl(0 84.2% 60.2%) - Rojo advertencia
 *    - Color: #ffffff - Texto blanco
 *    - Hover: bg-destructive/90
 *    - Uso: Eliminar, acciones irreversibles
 * 
 * 3. OUTLINE (Secundario)
 *    - Background: Transparente
 *    - Border: 1px solid hsl(215 20% 88%)
 *    - Color: hsl(218 54% 20%) - Texto oscuro
 *    - Hover: bg-accent hsl(210 40% 90%)
 *    - Uso: Acciones secundarias, cancelar
 * 
 * 4. SECONDARY
 *    - Background: hsl(215 45% 88%) - Azul muy claro
 *    - Color: hsl(218 54% 20%) - Texto oscuro
 *    - Hover: bg-secondary/80
 *    - Uso: Acciones terciarias
 * 
 * 5. GHOST (Fantasma)
 *    - Background: Transparente (sin borde)
 *    - Hover: bg-accent hsl(210 40% 90%)
 *    - Uso: Botones de ícono, acciones sutiles
 * 
 * 6. LINK
 *    - Color: hsl(218 54% 31%) - Azul primary
 *    - Text decoration: underline on hover
 *    - Uso: Links estilizados como botones
 * 
 * TAMAÑOS (size):
 * 
 * 1. DEFAULT
 *    - Altura: 40px (h-10 = 2.5rem)
 *    - Padding X: 16px (px-4 = 1rem)
 *    - Padding Y: 8px (py-2 = 0.5rem)
 *    - Font size: 14px (text-sm = 0.875rem)
 *    - Font weight: 500 Medium (font-medium)
 *    - Uso: Botones estándar
 * 
 * 2. SM (Small)
 *    - Altura: 36px (h-9 = 2.25rem)
 *    - Padding X: 12px (px-3 = 0.75rem)
 *    - Border radius: 10px (rounded-md)
 *    - Uso: Botones compactos, navbar
 * 
 * 3. LG (Large)
 *    - Altura: 44px (h-11 = 2.75rem)
 *    - Padding X: 32px (px-8 = 2rem)
 *    - Border radius: 10px (rounded-md)
 *    - Uso: Botones destacados, CTAs
 * 
 * 4. ICON (Solo ícono)
 *    - Dimensiones: 40x40px (h-10 w-10 cuadrado)
 *    - Padding: 0 (centrado automático)
 *    - Uso: Botones de acción con solo ícono
 * 
 * ESTILOS BASE (todos los botones):
 * - Display: inline-flex
 * - Align items: center
 * - Justify: center
 * - Gap: 8px (gap-2 entre ícono y texto)
 * - Border radius: 10px (rounded-md)
 * - Transition: colors 0.2s ease
 * - Focus ring: 2px solid primary con offset 2px
 * - Disabled: opacity 50%, pointer-events none
 * - SVG size: 16x16px automático
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
