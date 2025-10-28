/**
 * COMPONENTE: GradoConsultaBadge - Badge de Grado de Consulta
 * 
 * VARIANTES DE GRADO:
 * 
 * 1. LICU (Licenciatura)
 *    - Background: hsl(197 71% 73%) - Azul cielo claro #73c7e8
 *    - Color: hsl(198 100% 20%) - Azul oscuro #003e66
 *    - Uso: Usuarios con acceso limitado a consulta
 * 
 * 2. MACU (Maestría)
 *    - Background: hsl(266 68% 78%) - Púrpura claro #b69edc
 *    - Color: hsl(266 60% 25%) - Púrpura oscuro #291a52
 *    - Uso: Usuarios con acceso medio a consulta
 * 
 * 3. ALL (Todos)
 *    - Background: hsl(142 50% 75%) - Verde claro #8ed9a8
 *    - Color: hsl(142 60% 20%) - Verde oscuro #145229
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
        return 'bg-[hsl(197,71%,73%)] text-[hsl(198,100%,20%)]';
      case 'MACU':
        return 'bg-[hsl(266,68%,78%)] text-[hsl(266,60%,25%)]';
      case 'ALL':
        return 'bg-[hsl(142,50%,75%)] text-[hsl(142,60%,20%)]';
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
