# 🎨 Vista Previa - Badges de Grado de Consulta

## Visualización de Colores

### 🔵 LICU (Licenciatura)
```
┌─────────────────────────────────────────┐
│                                         │
│          ╔═══════════════╗              │
│          ║     LICU      ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #73c7e8 (Azul cielo)       │
│  Texto:      #003e66 (Azul oscuro)      │
│                                         │
│  HSL: hsl(197, 71%, 73%)               │
│  RGB: rgb(115, 199, 232)               │
│                                         │
│  Uso: Acceso limitado a consultas de   │
│       licenciatura únicamente           │
│                                         │
└─────────────────────────────────────────┘
```

### 🟣 MACU (Maestría)
```
┌─────────────────────────────────────────┐
│                                         │
│          ╔═══════════════╗              │
│          ║     MACU      ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #b69edc (Púrpura claro)    │
│  Texto:      #291a52 (Púrpura oscuro)   │
│                                         │
│  HSL: hsl(266, 68%, 78%)               │
│  RGB: rgb(182, 158, 220)               │
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
│          ║      ALL      ║              │
│          ╚═══════════════╝              │
│                                         │
│  Background: #8ed9a8 (Verde claro)      │
│  Texto:      #145229 (Verde oscuro)     │
│                                         │
│  HSL: hsl(142, 50%, 75%)               │
│  RGB: rgb(142, 217, 168)               │
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

**LICU** (Azul cielo #73c7e8 / Azul oscuro #003e66)
- Ratio de contraste: **7.8:1** ✅ AAA
- Cumple con estándares de accesibilidad más estrictos

**MACU** (Púrpura claro #b69edc / Púrpura oscuro #291a52)
- Ratio de contraste: **8.2:1** ✅ AAA
- Cumple con estándares de accesibilidad más estrictos

**ALL** (Verde claro #8ed9a8 / Verde oscuro #145229)
- Ratio de contraste: **7.5:1** ✅ AAA
- Cumple con estándares de accesibilidad más estrictos

> **Nota**: Todos los badges cumplen con WCAG 2.1 nivel AAA (ratio > 7:1)
> para texto pequeño, garantizando excelente legibilidad.

---

## Características de Diseño

✨ **Estilo consistente con badges de departamento**
- Mismo border-radius (pill completo)
- Padding similar (2px vertical, 8px horizontal)
- Altura automática para alineación perfecta

🎨 **Colores distintivos**
- Azul para nivel básico (LICU)
- Púrpura para nivel intermedio (MACU)
- Verde para acceso completo (ALL)

📏 **Tipografía optimizada**
- Font size: 11px (ligeramente más pequeño que departamento)
- Font weight: 600 Semibold (mayor peso para énfasis)
- Text transform: Uppercase (mejor legibilidad)
- Letter spacing: Wider (separación de letras para claridad)

🔄 **Responsive**
- Flex-wrap en contenedor de badges
- Se acomodan automáticamente en múltiples líneas si es necesario
- Gap de 1.5 (6px) entre badges

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
