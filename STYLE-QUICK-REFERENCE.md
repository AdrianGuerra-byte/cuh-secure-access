# 📋 Guía Rápida de Referencia - Estilos CUH

> **Cheat sheet** para desarrolladores: valores exactos y clases más usadas

---

## 🎨 Colores Principales (HSL)

```css
/* Azul CUH Institucional */
--primary: 218 54% 31%;           /* #1e4a7f */

/* Rojo Destructivo */
--destructive: 0 84.2% 60.2%;     /* #ea3943 */

/* Verde Éxito */
--success: 142 71% 45%;            /* #22c55e */

/* Grados de Consulta (no en variables, en GradoConsultaBadge) */
LICU: hsl(197,71%,73%) bg / hsl(198,100%,20%) text  /* Azul cielo */
MACU: hsl(266,68%,78%) bg / hsl(266,60%,25%) text   /* Púrpura */
ALL:  hsl(142,50%,75%) bg / hsl(142,60%,20%) text   /* Verde */

/* Fondo y Texto */
--background: 210 20% 98%;         /* #f7f8fa */
--foreground: 218 54% 20%;         /* #19365a */
--muted-foreground: 218 20% 45%;   /* #5f7389 */

/* Bordes */
--border: 215 20% 88%;             /* #d9dfe6 */
```

---

## 📐 Dimensiones Comunes

### Alturas de Componentes
```
Input/Button default:    40px    (h-10)
Button small:            36px    (h-9)
Button large:            44px    (h-11)
Avatar usuario:          48px    (h-12)
Logo navbar:             48px    (h-12)
```

### Tamaños de Fuente
```
xs:   12px   (0.75rem)   → Badges, metadata
sm:   14px   (0.875rem)  → Texto secundario, inputs
base: 16px   (1rem)      → Texto normal
lg:   18px   (1.125rem)  → Avatares, subtítulos
xl:   20px   (1.25rem)   → Subtítulos importantes
2xl:  24px   (1.5rem)    → Títulos navbar
3xl:  30px   (1.875rem)  → Títulos principales
```

### Espaciado (Padding/Margin)
```
1:  4px     (0.25rem)
2:  8px     (0.5rem)     → Separación pequeña
3:  12px    (0.75rem)
4:  16px    (1rem)       → ESTÁNDAR
6:  24px    (1.5rem)     → Secciones
8:  32px    (2rem)       → Páginas
12: 48px    (3rem)       → Headers
```

### Border Radius
```
sm:   8px    (calc(--radius - 4px))
md:   10px   (calc(--radius - 2px))  → Inputs, botones outline
lg:   12px   (var(--radius))         → Tarjetas, modales
xl:   16px
full: 9999px                         → Círculos, pills
```

---

## 🔘 Componentes Más Usados

### Button
```tsx
// Primary (azul)
<Button variant="default" size="default">Enviar</Button>
// 40px altura, 16px padding X, azul #1e4a7f

// Destructivo (rojo)
<Button variant="destructive">Eliminar</Button>
// 40px altura, rojo #ea3943

// Secundario (outline)
<Button variant="outline">Cancelar</Button>
// 40px altura, borde gris, fondo transparente

// Solo ícono
<Button variant="ghost" size="icon"><Icon /></Button>
// 40x40px cuadrado, sin fondo
```

### Input
```tsx
<Input type="text" placeholder="Nombre" />
// 40px altura, 12px padding X, 10px radius
```

### Card
```tsx
<Card>
  <CardContent className="p-4">
    {/* 16px padding, 12px radius, shadow-sm */}
  </CardContent>
</Card>
```

### Badge/Chip
```tsx
// Badge Departamento (Secondary)
<span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
  Departamento
</span>
// 2px vertical, 8px horizontal, 12px font, pill shape

// Badge Grado de Consulta (Componente personalizado)
import { GradoConsultaBadge } from '@/components/sige/GradoConsultaBadge';

<GradoConsultaBadge grado="LICU" />  // Azul cielo - Licenciatura
<GradoConsultaBadge grado="MACU" />  // Púrpura - Maestría  
<GradoConsultaBadge grado="ALL" />   // Verde - Todos
// 11px font, semibold, uppercase, tracking-wider
```

---

## 📊 Layout Grids

### Tarjetas Responsive
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 columna
      Tablet: 2 columnas
      Desktop: 3 columnas
      Gap: 16px */}
</div>
```

### Container Centrado
```tsx
<div className="container mx-auto px-4 md:px-8">
  {/* Max 1400px, centrado, padding responsive */}
</div>
```

---

## 🎭 Efectos

### Sombras
```css
/* Small - Elementos sutiles */
shadow-sm: 0 1px 2px 0 rgba(30,74,127,0.05)

/* Default - Tarjetas hover */
shadow-md: 0 4px 6px -1px rgba(30,74,127,0.1)

/* Large - Modales */
shadow-lg: 0 10px 25px -3px rgba(30,74,127,0.15)
```

### Transiciones
```tsx
// Hover suave en tarjetas
className="hover:shadow-md transition-shadow"

// Transform rápido
className="active:scale-95 transition-transform"

// Colores suaves
className="transition-colors duration-200"
```

---

## 🎯 Estados Interactivos

### Hover
```tsx
hover:bg-primary/90       // Background más oscuro
hover:shadow-md           // Elevación
hover:text-primary        // Cambio de color
```

### Focus
```tsx
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary
focus-visible:ring-offset-2
```

### Disabled
```tsx
disabled:opacity-50
disabled:cursor-not-allowed
disabled:pointer-events-none
```

---

## 📱 Breakpoints

```css
/* Mobile first */
sm:  640px    /* Tablet pequeña */
md:  768px    /* Tablet */
lg:  1024px   /* Desktop pequeño */
xl:  1280px   /* Desktop */
2xl: 1400px   /* Desktop grande */
```

### Uso
```tsx
// Responsive text size
<h1 className="text-2xl md:text-3xl lg:text-4xl">

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">

// Responsive display
<div className="flex-col sm:flex-row">
```

---

## 🚀 Clases Utilitarias Más Usadas

### Flex
```tsx
flex items-center justify-between  // Navbar
flex items-center gap-2            // Botón con ícono
flex-1 min-w-0                     // Contenido truncable
```

### Texto
```tsx
truncate                 // Texto con ellipsis
text-sm text-muted-foreground  // Texto secundario
font-semibold            // Peso 600
```

### Espaciado
```tsx
p-4                      // 16px padding (estándar)
mb-6                     // 24px margin bottom
gap-4                    // 16px gap en grid/flex
space-x-4                // 16px espacio horizontal
```

### Otros
```tsx
rounded-full             // Círculo/pill
cursor-pointer           // Clickeable
select-none              // No seleccionable
```

---

## 🎨 Paleta Completa de Variables CSS

```css
:root {
  /* Colores Base */
  --background: 210 20% 98%;
  --foreground: 218 54% 20%;
  
  /* Primary (Azul CUH) */
  --primary: 218 54% 31%;
  --primary-foreground: 0 0% 100%;
  
  /* Secondary (Azul claro) */
  --secondary: 215 45% 88%;
  --secondary-foreground: 218 54% 20%;
  
  /* Destructive (Rojo) */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 100%;
  
  /* Muted (Gris) */
  --muted: 215 30% 92%;
  --muted-foreground: 218 20% 45%;
  
  /* Accent (Hover) */
  --accent: 210 40% 90%;
  --accent-foreground: 218 54% 20%;
  
  /* Cards */
  --card: 0 0% 100%;
  --card-foreground: 218 54% 20%;
  
  /* Borders & Inputs */
  --border: 215 20% 88%;
  --input: 215 20% 88%;
  --ring: 218 54% 31%;
  
  /* Border Radius */
  --radius: 0.75rem; /* 12px */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 hsl(218 54% 31% / 0.05);
  --shadow: 0 4px 6px -1px hsl(218 54% 31% / 0.1);
  --shadow-lg: 0 10px 25px -3px hsl(218 54% 31% / 0.15);
}
```

---

## 📝 Ejemplos de Código Común

### UserCard completo
```tsx
import { GradoConsultaBadge } from '@/components/sige/GradoConsultaBadge';

<Card className="hover:shadow-md transition-shadow">
  <CardContent className="p-4">
    <div className="flex items-start gap-3">
      {/* Avatar 48x48px */}
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
        A
      </div>
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground truncate">
          Nombre Usuario
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          cuenta@email
        </p>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
            Departamento
          </span>
          <GradoConsultaBadge grado="LICU" />
        </div>
      </div>
      
      {/* Action */}
      <Button variant="ghost" size="icon">
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  </CardContent>
</Card>
```

### Form Input con Label
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-foreground">
    Nombre
  </label>
  <Input 
    type="text" 
    placeholder="Ingrese nombre"
    className="h-10 px-3 rounded-md"
  />
</div>
```

### Navbar
```tsx
<div className="py-6 px-4 border-b bg-card">
  <div className="container mx-auto flex items-center gap-4">
    <img src="/logo.png" alt="CUH" className="h-12" />
    <div>
      <h1 className="text-2xl font-bold text-primary">SIGE</h1>
      <p className="text-sm text-muted-foreground">Sistema Integrado</p>
    </div>
  </div>
</div>
```

---

**Tip**: Para override de estilos, siempre usar `className` prop:
```tsx
<Button className="h-12 px-6">  {/* Override altura y padding */}
```

**Importante**: Mantener múltiplos de 4px para espaciado consistente (4, 8, 12, 16, 24, 32, 48)
