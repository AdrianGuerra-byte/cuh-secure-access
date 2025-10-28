# 🎨 Guía de Estilos - Sistema CUH Secure Access

## 📋 Índice
1. [Paleta de Colores](#paleta-de-colores)
2. [Tipografía](#tipografía)
3. [Componentes](#componentes)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Efectos y Sombras](#efectos-y-sombras)
6. [Responsividad](#responsividad)

---

## 🎨 Paleta de Colores

Todos los colores están definidos en formato **HSL** (Hue, Saturation, Lightness) para facilitar variaciones y temas.

### Colores Institucionales (Modo Claro)

#### **Primary - Azul CUH**
```css
--primary: 218 54% 31%;           /* #1e4a7f - Azul institucional principal */
--primary-foreground: 0 0% 100%;   /* #ffffff - Texto sobre primary */
--primary-hover: 218 54% 26%;      /* #183a66 - Hover más oscuro */
```
- **Uso**: Botones principales, títulos importantes, enlaces
- **RGB**: `rgb(30, 74, 127)`
- **HEX**: `#1e4a7f`

#### **Secondary - Azul Claro**
```css
--secondary: 215 45% 88%;          /* #d4dfe9 - Azul muy claro */
--secondary-foreground: 218 54% 20%; /* #19365a - Texto oscuro */
```
- **Uso**: Badges, chips, fondos secundarios
- **RGB**: `rgb(212, 223, 233)`
- **HEX**: `#d4dfe9`

#### **Background - Fondo Principal**
```css
--background: 210 20% 98%;         /* #f7f8fa - Gris muy claro */
--foreground: 218 54% 20%;         /* #19365a - Texto principal */
```
- **Uso**: Fondo de la aplicación, texto general

#### **Card - Tarjetas**
```css
--card: 0 0% 100%;                 /* #ffffff - Blanco puro */
--card-foreground: 218 54% 20%;    /* #19365a - Texto en tarjetas */
```
- **Uso**: Tarjetas de usuario, modales, contenedores elevados

#### **Destructive - Acciones Peligrosas**
```css
--destructive: 0 84.2% 60.2%;      /* #ea3943 - Rojo para eliminar */
--destructive-foreground: 0 0% 100%; /* #ffffff - Texto sobre rojo */
```
- **Uso**: Botones de eliminar, alertas de error

#### **Success - Acciones Exitosas**
```css
--success: 142 71% 45%;            /* #22c55e - Verde éxito */
--success-foreground: 0 0% 100%;   /* #ffffff - Texto sobre verde */
```
- **Uso**: Mensajes de confirmación, estados positivos

#### **Muted - Elementos Deshabilitados**
```css
--muted: 215 30% 92%;              /* #e5eaef - Gris claro */
--muted-foreground: 218 20% 45%;   /* #5f7389 - Gris medio */
```
- **Uso**: Texto secundario, elementos deshabilitados

#### **Border & Input**
```css
--border: 215 20% 88%;             /* #d9dfe6 - Bordes sutiles */
--input: 215 20% 88%;              /* #d9dfe6 - Bordes de inputs */
--ring: 218 54% 31%;               /* #1e4a7f - Focus ring */
```
- **Uso**: Bordes de componentes, campos de formulario

### Modo Oscuro (Dark Mode)

```css
--background: 218 45% 12%;         /* #112233 - Fondo oscuro */
--foreground: 210 40% 98%;         /* #f4f6f8 - Texto claro */
--card: 218 40% 16%;               /* #1a2c42 - Tarjetas oscuras */
--primary: 218 70% 55%;            /* #3a7bd5 - Azul más brillante */
--destructive: 0 62.8% 50.6%;      /* #e84855 - Rojo ajustado */
```

---

## 📝 Tipografía

### Fuentes
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```
- **Sistema operativo nativo**: Usa la fuente del sistema para mejor rendimiento
- **Fallback**: Roboto, Helvetica, Arial, sans-serif

### Tamaños de Texto

#### **Headings (Encabezados)**
| Elemento | Clase Tailwind | Tamaño | Uso |
|----------|---------------|---------|-----|
| H1 | `text-3xl` | 30px (1.875rem) | Títulos principales (rara vez) |
| H2 | `text-2xl` | 24px (1.5rem) | Títulos de sección (Navbar) |
| H3 | `text-xl` | 20px (1.25rem) | Subtítulos |
| H4 | `text-lg` | 18px (1.125rem) | Títulos de tarjetas |

#### **Body Text (Texto Cuerpo)**
| Elemento | Clase Tailwind | Tamaño | Uso |
|----------|---------------|---------|-----|
| Base | `text-base` | 16px (1rem) | Texto normal |
| Small | `text-sm` | 14px (0.875rem) | Texto secundario, subtítulos |
| Extra Small | `text-xs` | 12px (0.75rem) | Badges, metadata |

#### **Font Weights (Pesos)**
```css
font-weight: 400;  /* Normal - text normal */
font-weight: 500;  /* Medium - text-medium */
font-weight: 600;  /* Semibold - text-semibold */
font-weight: 700;  /* Bold - text-bold */
```

### Line Height
```css
line-height: 1.5;    /* Normal - leading-normal */
line-height: 1.25;   /* Tight - leading-tight (títulos) */
line-height: 1.75;   /* Loose - leading-loose (párrafos largos) */
```

---

## 🧩 Componentes

### 🔘 Botones

#### **Button Primary (Botón Principal)**
```tsx
<Button variant="default" size="default">
  Texto del Botón
</Button>
```
**Estilos:**
- **Altura**: `40px` (2.5rem)
- **Padding horizontal**: `16px` (1rem)
- **Padding vertical**: `8px` (0.5rem)
- **Border radius**: `12px` (0.75rem) - `--radius`
- **Font size**: `14px` (0.875rem)
- **Font weight**: `500` (Medium)
- **Background**: `hsl(218 54% 31%)` - Primary
- **Color**: `#ffffff` - White
- **Hover**: Fondo más oscuro `hsl(218 54% 26%)`
- **Transition**: `all 0.2s ease`

#### **Button Outline (Botón Secundario)**
```tsx
<Button variant="outline" size="default">
  Texto del Botón
</Button>
```
**Estilos:**
- **Altura**: `40px` (2.5rem)
- **Border**: `1px solid hsl(215 20% 88%)`
- **Background**: Transparente
- **Color**: `hsl(218 54% 20%)` - Foreground
- **Hover**: Fondo `hsl(210 40% 90%)` - Accent

#### **Button Ghost (Botón Fantasma)**
```tsx
<Button variant="ghost" size="icon">
  <Icon />
</Button>
```
**Estilos:**
- **Altura**: `40px` (2.5rem) - `size="default"`
- **Altura Icon**: `40px` (2.5rem) cuadrado - `size="icon"`
- **Background**: Transparente
- **Hover**: Fondo `hsl(210 40% 90%)` - Accent

#### **Button Destructive (Botón Eliminar)**
```tsx
<Button variant="destructive" size="default">
  Eliminar
</Button>
```
**Estilos:**
- **Background**: `hsl(0 84.2% 60.2%)` - Red
- **Color**: `#ffffff` - White
- **Hover**: Fondo más oscuro

#### **Tamaños de Botones**
| Size | Altura | Padding X | Padding Y | Uso |
|------|--------|-----------|-----------|-----|
| `sm` | 36px | 12px | 6px | Botones pequeños (navbar) |
| `default` | 40px | 16px | 8px | Botones estándar |
| `lg` | 44px | 20px | 10px | Botones destacados |
| `icon` | 40x40px | - | - | Botones solo ícono |

### 🃏 Tarjetas (Cards)

#### **UserCard - Tarjeta de Usuario**
```tsx
<Card>
  <CardContent className="p-4">
    {/* Contenido */}
  </CardContent>
</Card>
```

**Dimensiones:**
- **Padding**: `16px` (1rem) - `p-4`
- **Border radius**: `12px` (0.75rem)
- **Border**: `1px solid hsl(215 20% 88%)`
- **Background**: `#ffffff`
- **Shadow normal**: `0 1px 2px 0 rgba(30, 74, 127, 0.05)`
- **Shadow hover**: `0 4px 6px -1px rgba(30, 74, 127, 0.1)`
- **Transition**: `box-shadow 0.3s ease`

**Estructura Interna:**
- **Avatar**: 
  - Tamaño: `48x48px` (12 x 12) - `h-12 w-12`
  - Border radius: `9999px` (círculo completo) - `rounded-full`
  - Background: Primary `hsl(218 54% 31%)`
  - Color: White
  - Font size: `18px` (1.125rem) - `text-lg`
  - Font weight: `600` (Semibold)

- **Nombre de Usuario**:
  - Font size: `16px` (1rem) - `text-base`
  - Font weight: `600` (Semibold) - `font-semibold`
  - Color: `hsl(218 54% 20%)` - Foreground
  - Truncate: `truncate` (overflow hidden)

- **Cuenta**:
  - Font size: `14px` (0.875rem) - `text-sm`
  - Color: `hsl(218 20% 45%)` - Muted Foreground
  - Truncate: `truncate`

- **Badge Departamento**:
  - Padding: `2px 8px` - `px-2 py-1`
  - Font size: `12px` (0.75rem) - `text-xs`
  - Border radius: `9999px` (pill) - `rounded-full`
  - Background: `hsl(215 45% 88%)` - Secondary
  - Color: `hsl(218 54% 20%)` - Secondary Foreground
  - Margin top: `8px` (0.5rem) - `mt-2`

- **Botón Eliminar**:
  - Tamaño: `40x40px` - `size="icon"`
  - Ícono: `16x16px` - `h-4 w-4`
  - Color ícono: `hsl(0 84.2% 60.2%)` - Destructive

**Grid Layout (Vista Cards):**
```css
display: grid;
grid-template-columns: repeat(1, 1fr);  /* Mobile */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);  /* Tablet */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);  /* Desktop */
}

gap: 16px;  /* 1rem - gap-4 */
```

### 📊 Tabla (UserTable)

**Dimensiones:**
- **Row height**: `64px` (4rem) mínimo
- **Cell padding**: `16px` (1rem) - `p-4`
- **Border**: `1px solid hsl(215 20% 88%)`
- **Header background**: `hsl(215 30% 92%)` - Muted
- **Row hover**: `hsl(210 40% 90%)` - Accent

**Typography:**
- **Header**: 
  - Font size: `14px` (0.875rem) - `text-sm`
  - Font weight: `600` (Semibold)
  - Color: `hsl(218 54% 20%)` - Foreground

- **Cell**:
  - Font size: `14px` (0.875rem) - `text-sm`
  - Color: `hsl(218 54% 20%)` - Foreground

### 📝 Inputs (Campos de Formulario)

#### **Input Text**
```tsx
<Input type="text" placeholder="Nombre" />
```

**Dimensiones:**
- **Altura**: `40px` (2.5rem)
- **Padding**: `8px 12px` - `px-3 py-2`
- **Border radius**: `10px` (md) - `rounded-md`
- **Border**: `1px solid hsl(215 20% 88%)`
- **Font size**: `14px` (0.875rem) - `text-sm`

**Estados:**
- **Normal**: Border gris `hsl(215 20% 88%)`
- **Focus**: Ring azul `2px solid hsl(218 54% 31%)`
- **Error**: Border rojo `hsl(0 84.2% 60.2%)`
- **Disabled**: Background `hsl(215 30% 92%)`, cursor `not-allowed`

#### **Select (Dropdown)**
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Seleccionar..." />
  </SelectTrigger>
</Select>
```

**Dimensiones:**
- **Altura**: `40px` (2.5rem)
- **Padding**: `8px 12px`
- **Border radius**: `10px`
- **Ícono dropdown**: `16x16px` - `h-4 w-4`

### 🔔 Modales y Diálogos

#### **Modal Edit/Delete**
```tsx
<Dialog>
  <DialogContent className="sm:max-w-[425px]">
    {/* Contenido */}
  </DialogContent>
</Dialog>
```

**Dimensiones:**
- **Max width**: `425px` (26.5625rem) en desktop
- **Mobile**: `calc(100vw - 32px)` con `16px` margin
- **Padding**: `24px` (1.5rem) - `p-6`
- **Border radius**: `16px` (1rem) - `rounded-lg`
- **Background**: `#ffffff`
- **Shadow**: `0 10px 25px -3px rgba(30, 74, 127, 0.15)`

**Header:**
- **Título font size**: `18px` (1.125rem) - `text-lg`
- **Título font weight**: `600` (Semibold)
- **Padding bottom**: `16px` (1rem) - `pb-4`

**Footer:**
- **Padding top**: `16px` (1rem) - `pt-4`
- **Gap entre botones**: `8px` (0.5rem) - `gap-2`

### 🎯 Badges y Chips

#### Badge Departamento (Secondary)
```tsx
<span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
  Badge Text
</span>
```

**Dimensiones:**
- **Padding**: `2px 8px` - `px-2 py-1`
- **Font size**: `12px` (0.75rem) - `text-xs`
- **Border radius**: `9999px` (pill completo)
- **Height**: Auto (basado en contenido)
- **Display**: `inline-block`

#### Badge Grado de Consulta (Personalizado)

El badge de grado de consulta usa colores específicos según el nivel de acceso:

**LICU (Licenciatura)**
```tsx
<GradoConsultaBadge grado="LICU" />
```
- **Background**: `hsl(197 71% 73%)` - Azul cielo claro #73c7e8
- **Color texto**: `hsl(198 100% 20%)` - Azul oscuro #003e66
- **Padding**: `2px 8px` - `px-2 py-0.5`
- **Font size**: `11px` - `text-[11px]`
- **Font weight**: `600` Semibold - `font-semibold`
- **Border radius**: `9999px` (pill)
- **Letter spacing**: `tracking-wider`
- **Text transform**: `uppercase`
- **Uso**: Usuarios con acceso limitado a consulta

**MACU (Maestría)**
```tsx
<GradoConsultaBadge grado="MACU" />
```
- **Background**: `hsl(266 68% 78%)` - Púrpura claro #b69edc
- **Color texto**: `hsl(266 60% 25%)` - Púrpura oscuro #291a52
- **Padding**: `2px 8px` - `px-2 py-0.5`
- **Font size**: `11px` - `text-[11px]`
- **Font weight**: `600` Semibold
- **Border radius**: `9999px` (pill)
- **Letter spacing**: `tracking-wider`
- **Text transform**: `uppercase`
- **Uso**: Usuarios con acceso medio a consulta

**ALL (Todos)**
```tsx
<GradoConsultaBadge grado="ALL" />
```
- **Background**: `hsl(142 50% 75%)` - Verde claro #8ed9a8
- **Color texto**: `hsl(142 60% 20%)` - Verde oscuro #145229
- **Padding**: `2px 8px` - `px-2 py-0.5`
- **Font size**: `11px` - `text-[11px]`
- **Font weight**: `600` Semibold
- **Border radius**: `9999px` (pill)
- **Letter spacing**: `tracking-wider`
- **Text transform**: `uppercase`
- **Uso**: Usuarios con acceso completo a consulta

### 🎨 Iconos

**Tamaños estándar:**
```tsx
// Extra Small - Badges, inline text
<Icon className="h-3 w-3" />  // 12x12px

// Small - Botones pequeños, navbar
<Icon className="h-4 w-4" />  // 16x16px

// Default - Botones estándar
<Icon className="h-5 w-5" />  // 20x20px

// Large - Headers, features destacados
<Icon className="h-6 w-6" />  // 24x24px

// Extra Large - Logos, iconos principales
<Icon className="h-12 w-12" /> // 48x48px
```

---

## 📏 Espaciado y Layout

### Container
```css
.container {
  max-width: 1400px;      /* 2xl breakpoint */
  margin: 0 auto;         /* Centrado */
  padding: 0 16px;        /* Mobile: 1rem */
  padding: 0 32px;        /* Desktop: 2rem */
}
```

### Espaciado Interno (Padding)

| Clase | Valor | Píxeles | Uso |
|-------|-------|---------|-----|
| `p-1` | 0.25rem | 4px | Espaciado mínimo |
| `p-2` | 0.5rem | 8px | Elementos compactos |
| `p-3` | 0.75rem | 12px | Inputs, botones pequeños |
| `p-4` | 1rem | 16px | **Estándar** - Tarjetas, contenedores |
| `p-6` | 1.5rem | 24px | Secciones, modales |
| `p-8` | 2rem | 32px | Páginas principales |
| `p-12` | 3rem | 48px | Headers, heros |

### Espaciado Externo (Margin)

| Clase | Valor | Píxeles | Uso |
|-------|-------|---------|-----|
| `mb-2` | 0.5rem | 8px | Separación pequeña |
| `mb-4` | 1rem | 16px | **Estándar** - Entre elementos |
| `mb-6` | 1.5rem | 24px | Entre secciones |
| `mb-8` | 2rem | 32px | Secciones grandes |
| `mb-12` | 3rem | 48px | Separación mayor |

### Gap (Espaciado en Grid/Flex)

```css
gap-1: 4px;     /* 0.25rem */
gap-2: 8px;     /* 0.5rem */
gap-3: 12px;    /* 0.75rem */
gap-4: 16px;    /* 1rem - ESTÁNDAR */
gap-6: 24px;    /* 1.5rem */
```

---

## 🎭 Efectos y Sombras

### Box Shadows

#### **Small - Elementos sutiles**
```css
box-shadow: 0 1px 2px 0 hsl(218 54% 31% / 0.05);
```
- **Uso**: Inputs, badges, elementos pequeños

#### **Default - Tarjetas**
```css
box-shadow: 0 4px 6px -1px hsl(218 54% 31% / 0.1);
```
- **Uso**: Tarjetas, cards hover, botones elevados

#### **Large - Modales, Popovers**
```css
box-shadow: 0 10px 25px -3px hsl(218 54% 31% / 0.15);
```
- **Uso**: Modales, dropdowns, elementos flotantes

### Transiciones

```css
/* Transición estándar - Smooth */
transition: all 0.2s ease;

/* Hover suave */
transition: box-shadow 0.3s ease;

/* Transform rápido */
transition: transform 0.15s ease-out;
```

**Timing Functions:**
- `ease`: Inicio lento, rápido, fin lento (general)
- `ease-in`: Inicio lento (apariciones)
- `ease-out`: Fin lento (desapariciones)
- `ease-in-out`: Inicio y fin lentos (transformaciones)

### Border Radius

```css
--radius: 0.75rem;  /* 12px - Base radius */

/* Variaciones */
rounded-none: 0px;
rounded-sm: 8px;    /* calc(0.75rem - 4px) */
rounded-md: 10px;   /* calc(0.75rem - 2px) */
rounded-lg: 12px;   /* var(--radius) */
rounded-xl: 16px;
rounded-full: 9999px; /* Círculo/Pill completo */
```

### Opacidades

```css
opacity-0: 0;       /* Invisible */
opacity-50: 0.5;    /* Semi-transparente */
opacity-75: 0.75;   /* Casi opaco */
opacity-100: 1;     /* Completamente opaco */
```

---

## 📱 Responsividad

### Breakpoints

```css
/* Mobile First */
sm: 640px;   /* Tablets pequeñas */
md: 768px;   /* Tablets */
lg: 1024px;  /* Desktop pequeño */
xl: 1280px;  /* Desktop */
2xl: 1400px; /* Desktop grande */
```

### Grid Responsive (Tarjetas de Usuario)

```tsx
// Mobile: 1 columna
// Tablet: 2 columnas
// Desktop: 3 columnas

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Tarjetas */}
</div>
```

### Navbar Responsive

```tsx
// Mobile: Stack vertical
// Desktop: Horizontal con espacio entre elementos

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
  {/* Contenido */}
</div>
```

### Tamaños de Texto Responsivos

```tsx
// Título responsive
<h1 className="text-2xl sm:text-3xl lg:text-4xl">
  Título
</h1>

// Padding responsive
<div className="p-4 md:p-6 lg:p-8">
  {/* Contenido */}
</div>
```

---

## 🎯 Estados de Componentes

### Hover States

```css
/* Botones */
hover:bg-primary-hover      /* Fondo más oscuro */
hover:shadow-md             /* Sombra al hacer hover */

/* Tarjetas */
hover:shadow-md             /* Elevación */
transition-shadow           /* Transición suave */

/* Links */
hover:underline             /* Subrayado */
hover:text-primary          /* Color primario */
```

### Focus States

```css
/* Inputs y botones */
focus:outline-none                          /* Quitar outline por defecto */
focus:ring-2                                /* Ring de 2px */
focus:ring-primary                          /* Color primary */
focus:ring-offset-2                         /* Espacio entre ring y elemento */
```

### Disabled States

```css
/* Botones deshabilitados */
disabled:opacity-50                         /* 50% opacidad */
disabled:cursor-not-allowed                 /* Cursor prohibido */
disabled:pointer-events-none                /* Sin eventos */
```

### Active States

```css
/* Botones presionados */
active:scale-95                             /* Ligeramente más pequeño */
active:shadow-sm                            /* Menos sombra */
```

---

## 📦 Componentes Específicos del Proyecto

### Header/Navbar CUH

**Dimensiones:**
- **Altura**: Auto (mínimo `80px`)
- **Padding vertical**: `24px` (1.5rem) - `py-6`
- **Padding horizontal**: `16px` (1rem) - `px-4`
- **Background**: `#ffffff` - Card
- **Border bottom**: `1px solid hsl(215 20% 88%)`

**Logo CUH:**
- **Altura**: `48px` (3rem) - `h-12`
- **Object fit**: `contain`
- **Margin right**: `16px` (1rem) - `space-x-4`

**Título:**
- **Font size**: `24px` (1.5rem) - `text-2xl`
- **Font weight**: `700` (Bold) - `font-bold`
- **Color**: `hsl(218 54% 31%)` - Primary

**Subtítulo:**
- **Font size**: `14px` (0.875rem) - `text-sm`
- **Color**: `hsl(218 20% 45%)` - Muted Foreground

### Footer

**Dimensiones:**
- **Padding vertical**: `24px` (1.5rem) - `py-6`
- **Padding horizontal**: `16px` (1rem) - `px-4`
- **Margin top**: `48px` (3rem) - `mt-12`
- **Background**: `#ffffff` - Card
- **Border top**: `1px solid hsl(215 20% 88%)`
- **Text align**: Center
- **Font size**: `14px` (0.875rem) - `text-sm`
- **Color**: `hsl(218 20% 45%)` - Muted Foreground

---

## 🔧 Utilidades Personalizadas

### Truncate Text

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### Contenedor Centrado

```css
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

### Flex Utilities

```css
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## 📝 Notas Importantes

1. **Consistencia**: Todos los componentes siguen el mismo sistema de espaciado (múltiplos de 4px)

2. **Accesibilidad**: 
   - Contraste mínimo 4.5:1 para texto normal
   - Contraste mínimo 3:1 para texto grande
   - Focus visible en todos los elementos interactivos

3. **Performance**:
   - Sombras con HSL y alpha para mejor rendimiento
   - Transiciones solo en propiedades que se pueden animar eficientemente (transform, opacity)

4. **Modo Oscuro**: 
   - Todos los colores tienen equivalente en dark mode
   - Se activa con clase `.dark` en elemento raíz

5. **Mobile First**:
   - Todos los estilos base son para móvil
   - Se agregan breakpoints para pantallas más grandes

---

**Última actualización**: Octubre 2025  
**Versión del Sistema de Diseño**: 1.0.0  
**Mantenido por**: Equipo de Desarrollo CUH
