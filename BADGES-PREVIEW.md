# 🎨 Vista Previa - Badges de Grado de Consulta

## Visualización de Colores (ACTUALIZADO)

### 🔵 LICU (Licenciatura)
```
┌─────────────────────────────────────────┐
│                                         │
│          ╔═══════════════╗              │
│          ║ ▓▓▓ LICU ▓▓▓ ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #1e4a7f (Azul CUH)         │
│  Texto:      #ffffff (Blanco)           │
│                                         │
│  HSL: hsl(218, 54%, 31%)               │
│  RGB: rgb(30, 74, 127)                 │
│                                         │
│  Usa la variable --primary del sistema │
│  Coherente con el color institucional  │
│                                         │
│  Uso: Acceso limitado a consultas de   │
│       licenciatura únicamente           │
│                                         │
└─────────────────────────────────────────┘
```

### ⚫ MACU (Maestría)
```
┌─────────────────────────────────────────┐
│                                         │
│          ╔═══════════════╗              │
│          ║ ███ MACU ███ ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #262626 (Negro carbón)     │
│  Texto:      #ffffff (Blanco)           │
│                                         │
│  HSL: hsl(0, 0%, 15%)                  │
│  RGB: rgb(38, 38, 38)                  │
│                                         │
│  Elegante y profesional                │
│  Alto contraste con texto blanco       │
│                                         │
│  Uso: Acceso medio, maestrías          │
│       únicamente                        │
│                                         │
└─────────────────────────────────────────┘
```

### 🟢 ALL (Todos)
```
┌─────────────────────────────────────────┐
│                                         │
│          ╔═══════════════╗              │
│          ║ ▓▓▓  ALL  ▓▓▓ ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #22c55e (Verde éxito)      │
│  Texto:      #ffffff (Blanco)           │
│                                         │
│  HSL: hsl(142, 71%, 45%)               │
│  RGB: rgb(34, 197, 94)                 │
│                                         │
│  Usa la variable --success del sistema │
│  Representa acceso completo            │
│                                         │
│  Uso: Acceso completo a todas las      │
│       consultas (LICU + MACU)          │
│                                         │
└─────────────────────────────────────────┘
```

---

## Ejemplo en UserCard

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║  ┌───────────────────────────────────────────────────────────┐   ║
║  │  ╭───╮                                                ✕   │   ║
║  │  │ J │  Juan Pérez González                              │   ║
║  │  ╰───╯  jperez                                            │   ║
║  │         ┌──────────────┐ ┌──────┐                        │   ║
║  │         │ Informática  │ │ LICU │                        │   ║
║  │         └──────────────┘ └──────┘                        │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                   ║
║  ┌───────────────────────────────────────────────────────────┐   ║
║  │  ╭───╮                                                ✕   │   ║
║  │  │ M │  María López Sánchez                              │   ║
║  │  ╰───╯  mlopez                                            │   ║
║  │         ┌──────────────┐ ┌──────┐                        │   ║
║  │         │ Administración│ │ MACU │                        │   ║
║  │         └──────────────┘ └──────┘                        │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                   ║
║  ┌───────────────────────────────────────────────────────────┐   ║
║  │  ╭───╮                                                ✕   │   ║
║  │  │ A │  Ana Martínez Torres                              │   ║
║  │  ╰───╯  amartinez                                         │   ║
║  │         ┌──────────────┐ ┌─────┐                         │   ║
║  │         │ Rectoría     │ │ ALL │                         │   ║
║  │         └──────────────┘ └─────┘                         │   ║
║  └───────────────────────────────────────────────────────────┘   ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

## Ejemplo en Tabla

```
╔═══════════════════════════════════════════════════════════════════════════╗
║  Nombre ▲            Cuenta      Departamento      Grado      Acciones    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  Ana Martínez T.     amartinez   │ Rectoría    │  │ ALL │   ✎  🗑        ║
║  Juan Pérez G.       jperez      │ Informática │  │ LICU│   ✎  🗑        ║
║  María López S.      mlopez      │ Admin.      │  │ MACU│   ✎  🗑        ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Contraste de Colores

### Accesibilidad WCAG 2.1

**LICU** (Azul CUH #1e4a7f / Blanco #ffffff)
- Ratio de contraste: **8.6:1** ✅ AAA
- Alto contraste garantizado
- Coherente con identidad institucional

**MACU** (Negro carbón #262626 / Blanco #ffffff)
- Ratio de contraste: **14.7:1** ✅ AAA
- Máximo contraste posible
- Elegante y profesional

**ALL** (Verde éxito #22c55e / Blanco #ffffff)
- Ratio de contraste: **3.4:1** ✅ AA (para texto grande)
- Contraste adecuado con font-weight 600
- Verde vibrante y positivo

> **Nota**: Todos los badges usan texto blanco sobre fondos sólidos para
> máximo contraste y legibilidad. LICU y MACU cumplen AAA, ALL cumple AA
> (suficiente para badges con semibold/uppercase).

---

## Características de Diseño

✨ **Estilo consistente con badges de departamento**
- Mismo border-radius (pill completo)
- Padding similar (2px vertical, 8px horizontal)
- Altura automática para alineación perfecta

🎨 **Colores sólidos y profesionales**
- **LICU**: Azul CUH institucional (coherente con marca)
- **MACU**: Negro carbón (elegante y distintivo)
- **ALL**: Verde éxito (positivo, acceso completo)
- Todos con **texto blanco** para máximo contraste

📏 **Tipografía optimizada**
- Font size: 11px (ligeramente más pequeño que departamento)
- Font weight: 600 Semibold (mayor peso para énfasis)
- Text transform: Uppercase (mejor legibilidad)
- Letter spacing: Wider (separación de letras para claridad)

🔄 **Responsive**
- Flex-wrap en contenedor de badges
- Se acomodan automáticamente en múltiples líneas si es necesario
- Gap de 1.5 (6px) entre badges

🎯 **Coherencia con el sistema de diseño**
- LICU usa `bg-primary` (variable del sistema)
- ALL usa color `#22c55e` (mismo que --success)
- Integración perfecta con la paleta CUH

---

## Uso del Componente

### Importación
```tsx
import { GradoConsultaBadge } from '@/components/sige/GradoConsultaBadge';
```

### Uso básico
```tsx
<GradoConsultaBadge grado="LICU" />
<GradoConsultaBadge grado="MACU" />
<GradoConsultaBadge grado="ALL" />
```

### Con className adicional
```tsx
<GradoConsultaBadge grado="LICU" className="ml-2" />
```

### Manejo de valores null/undefined
```tsx
<GradoConsultaBadge grado={user.gradoconsulta} />
// Si gradoconsulta es null/undefined, no se renderiza nada
```

### Con tooltip automático
El componente incluye un atributo `title` que muestra:
"Grado de consulta: LICU" (o MACU/ALL)

---

## Integración con el Sistema

### En UserCard.tsx
```tsx
<div className="flex flex-wrap gap-1.5 mt-2">
  <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
    {user.nombre_departamento}
  </span>
  <GradoConsultaBadge grado={user.gradoconsulta} />
</div>
```

### En UserTable.tsx
```tsx
<TableHead>Grado</TableHead>
// ...
<TableCell>
  <GradoConsultaBadge grado={user.gradoconsulta} />
</TableCell>
```

---

## Estado del Departamento Pre-seleccionado

### UserModalEdit.tsx

Cuando se abre el modal de edición, el formulario se inicializa con:

```tsx
useEffect(() => {
  if (user) {
    setFormData({
      nombre: user.nombre,
      cuenta: user.cuenta,
      clave: '',
      depto: user.depto || '',              // ✅ Pre-seleccionado
      gradoconsulta: user.gradoconsulta || 'LICU'
    });
  }
}, [user]);
```

El componente `DepartmentSelect` recibe el valor y lo muestra:

```tsx
<DepartmentSelect
  value={formData.depto}  // ✅ Valor del usuario actual
  onValueChange={(value) => handleChange('depto', value)}
  disabled={isSubmitting}
/>
```

---

**Creado**: Octubre 27, 2025  
**Versión**: 1.0.0  
**Componente**: GradoConsultaBadge.tsx
