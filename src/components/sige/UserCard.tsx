/**
 * COMPONENTE: UserCard - Tarjeta de Usuario para Vista en Cuadrícula
 * 
 * DIMENSIONES:
 * - Padding total: 16px (p-4 = 1rem)
 * - Border radius: 12px (rounded-lg = var(--radius))
 * - Min height: Auto (basado en contenido)
 * - Width: 100% del contenedor grid
 * 
 * EFECTOS:
 * - Shadow normal: 0 1px 2px 0 rgba(30, 74, 127, 0.05)
 * - Shadow hover: 0 4px 6px -1px rgba(30, 74, 127, 0.1)
 * - Transition: box-shadow 0.3s ease
 * - Cursor: pointer (toda la tarjeta es clickeable)
 * 
 * LAYOUT:
 * - Display: flex horizontal
 * - Gap entre elementos: 12px (gap-3 = 0.75rem)
 * - Alineación: items-start (top alignment)
 * 
 * INTERACCIÓN:
 * - Click en tarjeta: Abre modal de edición
 * - Click en botón eliminar: Abre modal de confirmación
 */

import { SigeUser } from '@/types/sige.types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { GradoConsultaBadge } from './GradoConsultaBadge';

interface UserCardProps {
  user: SigeUser;
  onEdit: (user: SigeUser) => void;
  onDelete: (user: SigeUser) => void;
}

export const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => onEdit(user)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onEdit(user);
        }
      }}
      aria-label={`Editar usuario ${user.nombre}`}
    >
      {/* Contenedor de la tarjeta: padding 16px */}
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          
          {/* AVATAR CIRCULAR
            * Dimensiones: 48x48px (h-12 w-12 = 3rem)
            * Border radius: 9999px (rounded-full = círculo completo)
            * Background: hsl(218 54% 31%) - Azul CUH (bg-primary)
            * Color texto: #ffffff (text-primary-foreground)
            * Font size: 18px (text-lg = 1.125rem)
            * Font weight: 600 Semibold (font-semibold)
            * Text align: center (flex items-center justify-center)
            * Flex shrink: 0 (mantiene tamaño fijo)
          */}
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
            {getInitial(user.nombre)}
          </div>

          {/* INFORMACIÓN DEL USUARIO
            * Flex: 1 (ocupa espacio disponible)
            * Min width: 0 (permite truncate funcionar)
            * Contiene: nombre, cuenta, departamento
          */}
          <div className="flex-1 min-w-0">
            
            {/* NOMBRE DEL USUARIO
              * Font size: 16px (text-base = 1rem)
              * Font weight: 600 Semibold (font-semibold)
              * Color: hsl(218 54% 20%) - Texto principal (text-foreground)
              * Overflow: truncate (text-ellipsis)
            */}
            <h3 className="font-semibold text-foreground truncate">
              {user.nombre}
            </h3>
            
            {/* CUENTA/USERNAME
              * Font size: 14px (text-sm = 0.875rem)
              * Color: hsl(218 20% 45%) - Texto secundario (text-muted-foreground)
              * Overflow: truncate
            */}
            <p className="text-sm text-muted-foreground truncate">
              {user.cuenta}
            </p>
            
            {/* CONTENEDOR DE BADGES
              * Display: flex horizontal
              * Gap: 6px (gap-1.5)
              * Margin top: 8px (mt-2)
              * Flex wrap: permite que badges pasen a nueva línea si es necesario
            */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {/* BADGE DEPARTAMENTO
                * Padding: 2px 8px (px-2 py-1 = 0.5rem horizontal, 0.25rem vertical)
                * Font size: 12px (text-xs = 0.75rem)
                * Border radius: 9999px (rounded-full = pill)
                * Background: hsl(215 45% 88%) - Azul claro (bg-secondary)
                * Color: hsl(218 54% 20%) - Texto oscuro (text-secondary-foreground)
              */}
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                {user.nombre_departamento}
              </span>
              
              {/* BADGE GRADO DE CONSULTA
                * Colores dinámicos según grado (LICU, MACU, ALL)
                * Font size: 11px
                * Font weight: 600 Semibold
                * Uppercase
              */}
              <GradoConsultaBadge grado={user.gradoconsulta} />
            </div>
          </div>

          {/* BOTÓN ELIMINAR
            * Container: flex-shrink-0 (mantiene tamaño)
            * Click: stopPropagation (no abre modal de edición)
          */}
          <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            {/* BUTTON GHOST ICON
              * Variant: ghost (transparente con hover)
              * Size: icon (40x40px cuadrado)
              * Hover: fondo accent hsl(210 40% 90%)
              * Icon: Trash2 de lucide-react
              * Icon size: 16x16px (h-4 w-4 = 1rem)
              * Icon color: hsl(0 84.2% 60.2%) - Rojo destructive
            */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(user)}
              aria-label={`Eliminar ${user.nombre}`}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
