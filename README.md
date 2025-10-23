# SIREC - Frontend

Aplicación web frontend para el Sistema Integral de Recuperación de Credenciales (SIREC). Interfaz de usuario moderna y responsive para el restablecimiento seguro de contraseñas de estudiantes, docentes y personal administrativo del Centro Universitario Hidalguense.

## Tabla de Contenidos

- [SIREC - Frontend](#sirec---frontend)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Tecnologías](#tecnologías)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Configuración](#configuración)
    - [Variables de Entorno](#variables-de-entorno)
    - [Integración con API Backend](#integración-con-api-backend)
  - [Uso](#uso)
    - [Modo Desarrollo](#modo-desarrollo)
    - [Modo Producción](#modo-producción)
    - [Scripts Disponibles](#scripts-disponibles)
  - [Flujo de la Aplicación](#flujo-de-la-aplicación)
    - [Estados de Vista](#estados-de-vista)
    - [Proceso de Restablecimiento](#proceso-de-restablecimiento)
  - [Componentes Principales](#componentes-principales)
    - [ProfileSelector](#profileselector)
    - [SearchForm](#searchform)
    - [UserDetails](#userdetails)
    - [SuccessMessage](#successmessage)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Arquitectura](#arquitectura)
  - [Integración API](#integración-api)
    - [Endpoints Consumidos](#endpoints-consumidos)
    - [Tipos de Datos](#tipos-de-datos)
  - [Manejo de Errores](#manejo-de-errores)
  - [Accesibilidad](#accesibilidad)
  - [Estándares de Desarrollo](#estándares-de-desarrollo)
    - [Convenciones de Código](#convenciones-de-código)
    - [Flujo de Contribución](#flujo-de-contribución)
  - [Solución de Problemas](#solución-de-problemas)
  - [Autor](#autor)


## Características

- Interfaz multiusuario para estudiantes, docentes y administrativos
- Búsqueda avanzada con múltiples criterios por tipo de perfil
- Búsqueda especializada de docentes con campos separados (nombre, apellido paterno, apellido materno)
- Restablecimiento automático de contraseñas con visualización segura
- Diseño responsive adaptable a móviles, tablets y desktop
- Validación en tiempo real de formularios
- Sistema de notificaciones toast para feedback del usuario
- Redirección automática con contador después de operaciones exitosas
- Navegación por teclado y soporte de accesibilidad WCAG 2.1
- Iconografía contextual según tipo de perfil

## Tecnologías

- **React** 18.3.1 - Biblioteca para construcción de interfaces de usuario
- **TypeScript** 5.8.3 - Superset tipado de JavaScript
- **Vite** 5.4.19 - Herramienta de construcción y servidor de desarrollo
- **Tailwind CSS** 3.4.17 - Framework CSS utilitario
- **shadcn/ui** - Sistema de componentes UI basado en Radix UI
- **React Router DOM** 6.30.1 - Enrutamiento del lado del cliente
- **TanStack Query** 5.83.0 - Gestión de estado del servidor
- **React Hook Form** 7.61.1 - Manejo de formularios
- **Lucide React** 0.462.0 - Iconos SVG
- **Sonner** 1.7.4 - Sistema de notificaciones toast

## Requisitos Previos

- Node.js >= 18.x
- pnpm (recomendado), npm o yarn
- Git
- Acceso al API Backend de SIREC

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Guerra-666/cuh-secure-access.git
cd cuh-secure-access
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Configurar variables de entorno:

```bash
cp .env.example .env.local
```

4. Editar el archivo `.env.local` con los valores correspondientes al entorno.

## Configuración

### Variables de Entorno

El archivo `.env.local` debe contener las siguientes variables:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | URL base del API backend | `http://localhost:3000/api/v1` |

### Integración con API Backend

La aplicación se comunica con el backend mediante fetch nativo. La URL base se configura mediante la variable de entorno `VITE_API_BASE_URL`.

**Archivo de servicio API:**

```typescript
// src/services/api.service.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
```

## Uso

### Modo Desarrollo

```bash
pnpm dev
```

Este comando inicia el servidor de desarrollo con hot-reload en el puerto 8080.

```
VITE v5.4.19  ready in 500 ms

➜  Local:   http://localhost:8080/
➜  Network: http://192.168.1.x:8080/
```

### Modo Producción

```bash
pnpm build
pnpm preview
```

El comando `build` genera los archivos optimizados en el directorio `/dist`. El comando `preview` sirve la construcción localmente para verificación.

### Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `dev` | `pnpm dev` | Inicia servidor de desarrollo |
| `build` | `pnpm build` | Genera build de producción |
| `build:dev` | `pnpm build:dev` | Genera build de desarrollo |
| `preview` | `pnpm preview` | Previsualiza build de producción |
| `lint` | `pnpm lint` | Ejecuta análisis de código con ESLint |

## Flujo de la Aplicación

### Estados de Vista

La aplicación maneja 4 estados de vista principales:

```typescript
type ViewState = 'profile-selection' | 'search' | 'user-details' | 'success';
```

| Estado | Descripción |
|--------|-------------|
| `profile-selection` | Selección inicial del tipo de perfil |
| `search` | Formulario de búsqueda de usuario |
| `user-details` | Visualización de datos del usuario encontrado |
| `success` | Confirmación de restablecimiento exitoso |

### Proceso de Restablecimiento

```
1. Selección de Perfil
   ↓
2. Búsqueda de Usuario
   ├─ Por Nombre
   └─ Por ID (matrícula/clave)
   ↓
3. Verificación de Datos
   ↓
4. Confirmación de Restablecimiento
   ↓
5. Visualización de Nueva Contraseña
   ↓
6. Redirección Automática (50s) o Manual
```

## Componentes Principales

### ProfileSelector

Componente de selección inicial del tipo de perfil de usuario.

**Props:**

```typescript
interface ProfileSelectorProps {
  onSelectProfile: (profile: ProfileType) => void;
}
```

**Características:**
- Tres opciones de perfil: estudiante, docente, administrativo
- Iconografía distintiva por tipo (GraduationCap, BookOpen, Briefcase)
- Animaciones hover y transiciones CSS
- Grid responsive

### SearchForm

Formulario dinámico de búsqueda que se adapta según el perfil seleccionado.

**Props:**

```typescript
interface SearchFormProps {
  profileType: ProfileType;
  onSearch: (query: string | TeacherNameData, searchType: 'name' | 'id') => void;
  onBack: () => void;
  isLoading?: boolean;
}
```

**Características:**
- Búsqueda dual: por nombre completo o identificador
- Campos separados para docentes (nombre, apellido paterno, apellido materno)
- Validación de campos requeridos
- Estados de carga con indicadores visuales
- Limpieza automática al cambiar tipo de búsqueda

**Tipos de búsqueda por perfil:**

| Perfil | Búsqueda por Nombre | Búsqueda por ID |
|--------|---------------------|-----------------|
| Estudiante | Nombre completo | Matrícula |
| Docente | Nombre + Apellidos (separados) | Clave docente |
| Administrativo | Nombre completo | Matrícula |

### UserDetails

Componente de visualización de información detallada del usuario.

**Props:**

```typescript
interface UserDetailsProps {
  profileType: ProfileType;
  userData: Student | Teacher | Administrative;
  onBack: () => void;
  onResetPassword: () => void;
  isResetting?: boolean;
}
```

**Características:**
- Visualización organizada con iconografía contextual
- Validación de datos requeridos antes de permitir reset
- Mensajes de error descriptivos
- Botón de acción con estados de carga
- Información específica por tipo de perfil

**Información mostrada por perfil:**

**Estudiante/Administrativo:**
- Nombre completo
- Matrícula
- Grado académico
- Carrera/Departamento

**Docente:**
- Nombre completo
- Clave docente
- Teléfono celular
- Grado que imparte

### SuccessMessage

Pantalla de confirmación tras restablecimiento exitoso.

**Props:**

```typescript
interface SuccessMessageProps {
  phoneNumber: string;
  onReset: () => void;
  onGoHome?: () => void;
}
```

**Características:**
- Visualización destacada de nueva contraseña
- Diseño con gradiente y efectos visuales
- Contador regresivo de 50 segundos para redirección automática
- Opciones de navegación manual
- Soporte de tecla Escape para redirección inmediata
- Efectos de limpieza con useEffect

## Estructura del Proyecto

```
cuh-secure-access/
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   └── cuh-logo.png
│   ├── components/
│   │   ├── ui/                      # Componentes base shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── ...
│   │   ├── ProfileSelector.tsx      # Selector de perfil
│   │   ├── SearchForm.tsx           # Formulario de búsqueda
│   │   ├── UserDetails.tsx          # Detalles del usuario
│   │   └── SuccessMessage.tsx       # Mensaje de éxito
│   ├── hooks/
│   │   ├── use-mobile.tsx           # Hook detección móvil
│   │   └── use-toast.ts             # Hook notificaciones
│   ├── lib/
│   │   └── utils.ts                 # Utilidades
│   ├── pages/
│   │   ├── Index.tsx                # Página principal
│   │   └── NotFound.tsx             # Página 404
│   ├── services/
│   │   └── api.service.ts           # Cliente HTTP API
│   ├── types/
│   │   └── user.types.ts            # Tipos TypeScript
│   ├── App.tsx                      # Componente raíz
│   ├── main.tsx                     # Punto de entrada
│   └── index.css                    # Estilos globales
├── .env.example
├── .gitignore
├── components.json                  # Configuración shadcn/ui
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

### Arquitectura

El proyecto sigue el patrón de arquitectura en capas:

1. **Pages** - Componentes de página que manejan estado global y flujo de navegación
2. **Components** - Componentes reutilizables de UI con responsabilidades específicas
3. **Services** - Capa de comunicación con API backend
4. **Types** - Definiciones de tipos TypeScript para entidades de datos
5. **Hooks** - Hooks personalizados de React para lógica reutilizable
6. **Lib** - Utilidades y funciones auxiliares

## Integración API

### Endpoints Consumidos

La aplicación consume los siguientes endpoints del backend:

**Búsqueda de Estudiantes:**

```typescript
GET /api/v1/usuarios?tipo=alumno&{matricula|nombre}={valor}
```

**Búsqueda de Administrativos:**

```typescript
GET /api/v1/usuarios?tipo=administrativo&{matricula|nombre}={valor}
```

**Búsqueda de Docentes:**

```typescript
GET /api/v1/docentes?{clave_docente|nombre|paterno|materno}={valor}
```

**Reinicio de Contraseña (Estudiantes/Administrativos):**

```typescript
PATCH /api/v1/usuarios/{matricula}/password
```

**Reinicio de Contraseña (Docentes):**

```typescript
PATCH /api/v1/docentes/{clave_docente}/password
```

### Tipos de Datos

**Tipos de Perfil:**

```typescript
export type ProfileType = 'student' | 'teacher' | 'administrative';
```

**Interfaz Estudiante:**

```typescript
export interface Student {
  nombre_completo: string;
  matricula: string;
  grado_academico: string;
  carrera: string;
}
```

**Interfaz Docente:**

```typescript
export interface Teacher {
  clave_docente: string;
  nombre: string;
  paterno: string;
  materno: string;
  telefono_celular: string;
  gradoimparte: string;
}
```

**Interfaz Administrativo:**

```typescript
export interface Administrative {
  nombre_completo: string;
  matricula: string;
  grado_academico: string;
  carrera: string;
}
```

**Interfaz Búsqueda de Docente:**

```typescript
export interface TeacherNameData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
}
```

**Tipo Unión de Usuario:**

```typescript
export type UserData = Student | Teacher | Administrative;
```

## Manejo de Errores

La aplicación implementa manejo de errores en múltiples niveles:

**Errores de Red:**

```typescript
try {
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error('Error al buscar usuario');
  }
  return await response.json();
} catch (error) {
  console.error('Error en petición:', error);
  throw error;
}
```

**Mensajes de Error por Tipo:**

| Tipo de Error | Mensaje al Usuario |
|---------------|-------------------|
| Usuario no encontrado | "No se encontró ningún usuario con esos datos" |
| Error de red | "Error al buscar usuario. Intente nuevamente" |
| Datos faltantes | "Faltan datos requeridos para restablecer la contraseña" |
| Error de validación | "Por favor complete todos los campos requeridos" |

**Sistema de Notificaciones:**

```typescript
import { toast } from 'sonner';

// Éxito
toast.success('Usuario encontrado');

// Error
toast.error('No se encontró el usuario');

// Información
toast.info('Buscando usuario...');
```

## Accesibilidad

El sistema cumple con los estándares WCAG 2.1 Nivel AA:

- **Navegación por teclado** - Soporte completo sin necesidad de mouse
- **Lectores de pantalla** - Etiquetas ARIA y estructura semántica HTML
- **Contraste de color** - Cumplimiento de ratio 4.5:1 mínimo
- **Focus visible** - Indicadores claros de elementos enfocados
- **Texto escalable** - Soporte para zoom y configuraciones de accesibilidad
- **Teclas de acceso rápido** - Escape para cerrar diálogos y redirigir

## Estándares de Desarrollo

### Convenciones de Código

**Nomenclatura:**
- `camelCase` para variables y funciones
- `PascalCase` para componentes y clases
- `UPPER_SNAKE_CASE` para constantes
- `kebab-case` para nombres de archivos CSS

**Estructura de Componentes:**

```typescript
// Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Interfaces
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// Componente
const Component = ({ title, onAction }: ComponentProps) => {
  // Hooks
  const [state, setState] = useState(false);
  
  // Funciones
  const handleClick = () => {
    setState(true);
    onAction();
  };
  
  // Renderizado
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Acción</Button>
    </div>
  );
};

// Export
export default Component;
```

### Flujo de Contribución

1. **Crear rama feature:**

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-descriptivo
```

2. **Implementar cambios:**
   - Código limpio y documentado
   - Tipado estricto de TypeScript
   - Validaciones necesarias

3. **Verificar calidad:**

```bash
pnpm lint
pnpm build
```

4. **Commit con Conventional Commits:**

```bash
git add .
git commit -m "feat: descripción del cambio"
```

**Tipos de commit:**
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Cambios en documentación
- `style` - Cambios de formato
- `refactor` - Refactorización de código
- `test` - Agregar o modificar tests
- `chore` - Tareas de mantenimiento

5. **Push y Pull Request:**

```bash
git push origin feature/nombre-descriptivo
```

## Solución de Problemas

**Error de Conexión con API:**

```bash
# Verificar variable de entorno
echo $VITE_API_BASE_URL

# Probar conectividad
curl -I $VITE_API_BASE_URL/docentes
```

**Problemas de CORS:**

Verificar configuración CORS en el backend:

```javascript
app.use(cors({
  origin: ['http://localhost:8080', 'https://sirec.cuh.edu.mx'],
  methods: ['GET', 'PATCH'],
  credentials: true
}));
```

**Errores de Build TypeScript:**

```bash
# Limpiar cache y reconstruir
rm -rf node_modules dist .vite
pnpm install
pnpm build
```

**Problemas de Cache:**

```bash
# Limpiar cache de Vite
rm -rf node_modules/.vite

# En el navegador
# Ctrl + Shift + R (forzar recarga sin cache)
```

## Autor

Adrian Guerra
