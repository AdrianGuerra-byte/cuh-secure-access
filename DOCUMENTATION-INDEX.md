# 📚 Índice de Documentación - Sistema de Diseño CUH

## Archivos de Documentación Creados

### 1. **DESIGN-SYSTEM.md** (Guía Completa)
📄 **Archivo**: `/DESIGN-SYSTEM.md`  
📋 **Contenido**: Documentación completa del sistema de diseño

**Incluye**:
- ✅ Paleta de colores completa (HSL, HEX, RGB)
- ✅ Tipografía (fuentes, tamaños, pesos)
- ✅ Componentes detallados (botones, cards, inputs, etc.)
- ✅ Espaciado y layout (padding, margin, gap, grid)
- ✅ Efectos y sombras (box-shadow, transitions, border-radius)
- ✅ Responsividad (breakpoints, mobile-first)
- ✅ Estados de componentes (hover, focus, disabled, active)
- ✅ Componentes específicos del proyecto (navbar, footer, UserCard)

**Uso**: Referencia completa para entender el sistema de diseño

---

### 2. **STYLE-QUICK-REFERENCE.md** (Cheat Sheet)
📄 **Archivo**: `/STYLE-QUICK-REFERENCE.md`  
🚀 **Contenido**: Guía rápida de referencia

**Incluye**:
- ✅ Colores principales (valores exactos HSL/HEX)
- ✅ Dimensiones comunes (alturas, fuentes, espaciado)
- ✅ Componentes más usados (ejemplos de código)
- ✅ Layout grids (responsive patterns)
- ✅ Efectos (sombras, transiciones)
- ✅ Estados interactivos (hover, focus, disabled)
- ✅ Breakpoints y responsive
- ✅ Clases utilitarias más usadas
- ✅ Ejemplos de código común (UserCard, Form, Navbar)

**Uso**: Consulta rápida durante desarrollo

---

## Archivos de Código Comentados

### 3. **src/index.css** (Variables CSS)
📄 **Archivo**: `/src/index.css`  
🎨 **Contenido**: Variables CSS del sistema con comentarios extensos

**Comentarios incluyen**:
- ✅ Explicación de cada variable CSS
- ✅ Valores HSL con conversión a HEX
- ✅ Casos de uso de cada color
- ✅ Explicación del formato HSL
- ✅ Documentación de modo claro y oscuro
- ✅ Detalles de sombras y border-radius
- ✅ Explicación de variaciones (sm, md, lg)

---

### 4. **src/components/sige/UserCard.tsx** (Componente)
📄 **Archivo**: `/src/components/sige/UserCard.tsx`  
🃏 **Contenido**: Tarjeta de usuario con comentarios completos

**Comentarios incluyen**:
- ✅ Dimensiones del componente (padding, border-radius, min-height)
- ✅ Efectos (shadows, transitions, cursor)
- ✅ Layout interno (flex, gap, alignment)
- ✅ Avatar (48x48px, colores, fuente)
- ✅ Información de usuario (tamaños de fuente, colores, truncate)
- ✅ Badge de departamento (padding, border-radius, colores)
- ✅ Botón eliminar (size icon, hover)
- ✅ Estados de interacción

---

### 5. **src/components/ui/button.tsx** (Sistema de Botones)
📄 **Archivo**: `/src/components/ui/button.tsx`  
🔘 **Contenido**: Sistema completo de botones con documentación

**Comentarios incluyen**:
- ✅ Todas las variantes (default, destructive, outline, secondary, ghost, link)
- ✅ Colores específicos de cada variante (background, text, hover)
- ✅ Todos los tamaños (default, sm, lg, icon)
- ✅ Dimensiones exactas (altura, padding X, padding Y)
- ✅ Estilos base (display, align, gap, transition)
- ✅ Estados (focus, disabled, active)
- ✅ Casos de uso para cada variante

---

### 6. **src/components/ui/input.tsx** (Campos de Entrada)
📄 **Archivo**: `/src/components/ui/input.tsx`  
📝 **Contenido**: Input component con especificaciones completas

**Comentarios incluyen**:
- ✅ Dimensiones (40px altura, padding horizontal/vertical)
- ✅ Border radius (10px)
- ✅ Estilos (border, background, font-size)
- ✅ Estados (normal, focus, disabled, placeholder)
- ✅ Accesibilidad (focus visible, ring offset)

---

### 7. **src/components/ui/card.tsx** (Sistema de Tarjetas)
📄 **Archivo**: `/src/components/ui/card.tsx`  
🎴 **Contenido**: Componente Card con todos sus subcomponentes

**Comentarios incluyen**:
- ✅ Card principal (border-radius, border, background, shadow)
- ✅ CardHeader (padding, display, gap)
- ✅ CardTitle (font-size, font-weight, line-height)
- ✅ CardDescription (font-size, color)
- ✅ CardContent (padding logic)
- ✅ CardFooter (padding, flex)
- ✅ Nota sobre padding-top en Content y Footer

---

## Resumen de lo Documentado

### Colores Documentados ✅
```
✓ Primary (Azul CUH): #1e4a7f - HSL 218 54% 31%
✓ Destructive (Rojo): #ea3943 - HSL 0 84.2% 60.2%
✓ Success (Verde): #22c55e - HSL 142 71% 45%
✓ Secondary (Azul claro): #d4dfe9 - HSL 215 45% 88%
✓ Background: #f7f8fa - HSL 210 20% 98%
✓ Foreground: #19365a - HSL 218 54% 20%
✓ Muted-foreground: #5f7389 - HSL 218 20% 45%
✓ Border: #d9dfe6 - HSL 215 20% 88%
✓ Accent: #e3e9ee - HSL 210 40% 90%
```

### Fuentes Documentadas ✅
```
✓ Font family: Sistema nativo (-apple-system, etc.)
✓ xs: 12px (0.75rem)
✓ sm: 14px (0.875rem)
✓ base: 16px (1rem)
✓ lg: 18px (1.125rem)
✓ xl: 20px (1.25rem)
✓ 2xl: 24px (1.5rem)
✓ 3xl: 30px (1.875rem)
✓ Font weights: 400, 500, 600, 700
```

### Tamaños de Componentes Documentados ✅
```
✓ Button default: 40px altura
✓ Button sm: 36px altura
✓ Button lg: 44px altura
✓ Button icon: 40x40px
✓ Input: 40px altura
✓ Avatar: 48x48px
✓ Logo navbar: 48px
✓ Badge: Auto altura, 2px vertical padding
```

### Espaciado Documentado ✅
```
✓ p-1: 4px
✓ p-2: 8px
✓ p-3: 12px
✓ p-4: 16px (ESTÁNDAR)
✓ p-6: 24px
✓ p-8: 32px
✓ p-12: 48px
✓ gap-4: 16px (Grid/Flex estándar)
```

### Border Radius Documentado ✅
```
✓ sm: 8px
✓ md: 10px
✓ lg: 12px (ESTÁNDAR - var(--radius))
✓ xl: 16px
✓ full: 9999px (círculos/pills)
```

### Sombras Documentadas ✅
```
✓ shadow-sm: 0 1px 2px 0 rgba(30,74,127,0.05)
✓ shadow-md: 0 4px 6px -1px rgba(30,74,127,0.1)
✓ shadow-lg: 0 10px 25px -3px rgba(30,74,127,0.15)
```

### Componentes Documentados ✅
```
✓ Button (6 variantes, 4 tamaños)
✓ Card (5 subcomponentes)
✓ Input (estados y dimensiones)
✓ UserCard (estructura completa)
✓ Badge/Chip
✓ Avatar
✓ Navbar
✓ Footer
✓ Table
✓ Modal/Dialog
```

---

## Cómo Usar Esta Documentación

### Para Desarrollo Rápido:
1. Abre **STYLE-QUICK-REFERENCE.md**
2. Busca el componente que necesitas
3. Copia el código de ejemplo
4. Ajusta según necesidad

### Para Entender el Sistema:
1. Abre **DESIGN-SYSTEM.md**
2. Lee la sección completa del componente
3. Revisa colores, tipografía, y efectos
4. Consulta ejemplos de uso

### Para Ver Implementación:
1. Abre el archivo del componente en `/src/components/`
2. Lee los comentarios en el código
3. Busca los valores exactos (padding, margin, etc.)
4. Verifica en **src/index.css** las variables CSS

### Para Modificar Estilos:
1. Consulta **DESIGN-SYSTEM.md** para el color/tamaño actual
2. Verifica consistencia con otros componentes
3. Actualiza en **src/index.css** si es variable global
4. Actualiza en componente si es estilo específico
5. Documenta el cambio en comentarios

---

## Mantenimiento de la Documentación

### Al Agregar Nuevos Componentes:
1. ✅ Agregar comentarios detallados en el archivo del componente
2. ✅ Documentar en **DESIGN-SYSTEM.md** (sección Componentes)
3. ✅ Agregar ejemplo en **STYLE-QUICK-REFERENCE.md**

### Al Cambiar Colores/Variables:
1. ✅ Actualizar **src/index.css** con comentarios
2. ✅ Actualizar tabla de colores en **DESIGN-SYSTEM.md**
3. ✅ Actualizar sección de colores en **STYLE-QUICK-REFERENCE.md**

### Al Modificar Tamaños/Espaciado:
1. ✅ Actualizar comentarios en componente afectado
2. ✅ Actualizar tabla de tamaños en **DESIGN-SYSTEM.md**
3. ✅ Verificar que sigue múltiplos de 4px

---

## Archivos Clave del Proyecto

```
/
├── DESIGN-SYSTEM.md              ← Documentación completa
├── STYLE-QUICK-REFERENCE.md      ← Cheat sheet
├── ANTI-SEO.md                   ← Anti-SEO configuration
├── src/
│   ├── index.css                 ← Variables CSS comentadas
│   ├── components/
│   │   ├── sige/
│   │   │   └── UserCard.tsx      ← Componente comentado
│   │   └── ui/
│   │       ├── button.tsx        ← Sistema de botones comentado
│   │       ├── input.tsx         ← Input comentado
│   │       └── card.tsx          ← Card comentado
│   └── pages/
│       ├── SigeHome.tsx          ← Página SIGE (navbar estandarizado)
│       └── Index.tsx             ← Página SIREC (navbar estandarizado)
└── tailwind.config.ts            ← Configuración Tailwind
```

---

## Notas Importantes

1. **Formato HSL**: Todos los colores usan HSL sin `hsl()` wrapper para permitir modificadores de opacidad en Tailwind (`bg-primary/90`)

2. **Mobile First**: Todos los estilos base son para móvil, con breakpoints para pantallas más grandes

3. **Consistencia**: Usar siempre múltiplos de 4px para espaciado (4, 8, 12, 16, 24, 32, 48)

4. **Accesibilidad**: Mínimo contraste 4.5:1 para texto normal, 3:1 para texto grande

5. **Dark Mode**: Todos los colores tienen equivalente en dark mode (clase `.dark`)

6. **Componentes shadcn/ui**: Basados en Radix UI con estilos personalizados

---

**Última actualización**: Octubre 2025  
**Versión**: 1.0.0  
**Mantenido por**: Equipo de Desarrollo CUH
