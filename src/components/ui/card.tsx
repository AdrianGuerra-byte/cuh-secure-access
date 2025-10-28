/**
 * COMPONENTE: Card - Sistema de Tarjetas con Subcomponentes
 * 
 * CARD (Contenedor Principal):
 * - Border radius: 12px (rounded-lg = var(--radius))
 * - Border: 1px solid hsl(215 20% 88%)
 * - Background: #ffffff (bg-card)
 * - Shadow: 0 1px 2px 0 rgba(30, 74, 127, 0.05) (shadow-sm)
 * - Color texto: hsl(218 54% 20%) (text-card-foreground)
 * 
 * CARDHEADER (Encabezado):
 * - Padding: 24px (p-6 = 1.5rem)
 * - Display: flex column
 * - Gap vertical: 6px (space-y-1.5)
 * - Uso: Título y descripción de la tarjeta
 * 
 * CARDTITLE (Título):
 * - Font size: 24px (text-2xl = 1.5rem)
 * - Font weight: 600 Semibold (font-semibold)
 * - Line height: 1 (leading-none)
 * - Letter spacing: Tight (tracking-tight)
 * - Uso: Título principal de la tarjeta
 * 
 * CARDDESCRIPTION (Descripción):
 * - Font size: 14px (text-sm = 0.875rem)
 * - Color: hsl(218 20% 45%) (text-muted-foreground)
 * - Uso: Subtítulo o descripción secundaria
 * 
 * CARDCONTENT (Contenido):
 * - Padding: 24px horizontal y bottom, 0 top (p-6 pt-0)
 * - Padding top: 0 (asume que hay CardHeader arriba)
 * - Uso: Contenido principal de la tarjeta
 * 
 * CARDFOOTER (Pie):
 * - Padding: 24px horizontal y bottom, 0 top (p-6 pt-0)
 * - Display: flex horizontal
 * - Align items: center
 * - Uso: Acciones o información adicional al final
 * 
 * NOTA: Los padding de Content y Footer tienen pt-0 para evitar
 * espacio duplicado cuando se usan juntos o después de Header.
 */

import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
