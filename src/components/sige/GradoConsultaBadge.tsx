/**
 * COMPONENTE: GradoConsultaBadge - Badge de Grado de Consulta
 * 
 * VARIANTES DE GRADO:
 * 
 * 1. LICU (Licenciatura)
 *    - Background: hsl(218 54% 31%) - Azul CUH institucional #1e4a7f
 *    - Color: hsl(0 0% 100%) - Blanco puro #ffffff
 *    - Uso: Usuarios con acceso limitado a consulta
 * 
 * 2. MACU (Maestría)
 *    - Background: hsl(0 0% 15%) - Negro carbón #262626
 *    - Color: hsl(0 0% 100%) - Blanco puro #ffffff
 *    - Uso: Usuarios con acceso medio a consulta
 * 
 * 3. ALL (Todos)
 *    - Background: hsl(142 71% 45%) - Verde éxito #22c55e
 *    - Color: hsl(0 0% 100%) - Blanco puro #ffffff
 *    - Uso: Usuarios con acceso completo a consulta
 * 
 * DIMENSIONES:
 * - Padding: 2px 8px (px-2 py-0.5)
 * - Font size: 11px (text-[11px])
 * - Font weight: 600 Semibold (font-semibold)
 * - Border radius: 9999px (rounded-full = pill)
 * - Letter spacing: Wider (tracking-wider)
 * - Text transform: Uppercase
 */

import { GradoConsulta } from '@/types/sige.types';

interface GradoConsultaBadgeProps {
  grado?: string;
  className?: string;
}

export const GradoConsultaBadge = ({ grado, className = '' }: GradoConsultaBadgeProps) => {
  // Si no hay grado, no mostrar badge
  if (!grado) return null;

  // Normalizar el grado a uppercase
  const normalizedGrado = grado.toUpperCase() as GradoConsulta;

  // Definir estilos según el grado de consulta
  const getGradoStyles = () => {
    switch (normalizedGrado) {
      case 'LICU':
        // Azul CUH institucional con texto blanco
        return 'bg-primary text-primary-foreground';
      case 'MACU':
        // Negro carbón con texto blanco
        return 'bg-[hsl(0,0%,15%)] text-white';
      case 'ALL':
        // Verde éxito con texto blanco
        return 'bg-[hsl(142,71%,45%)] text-white';
      default:
        // Fallback: estilo secondary por defecto
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <span 
      className={`inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-semibold rounded-full tracking-wider uppercase ${getGradoStyles()} ${className}`}
      title={`Grado de consulta: ${normalizedGrado}`}
    >
      {normalizedGrado}
    </span>
  );
};
