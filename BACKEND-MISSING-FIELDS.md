# 🐛 Problema: Campos Faltantes en API de Usuarios SIGE

## 📋 Descripción del Problema

El endpoint del backend `/usuarios/sige` (GET) **NO está devolviendo** los campos `depto` y `gradoconsulta` en la respuesta, por lo que:

1. ❌ **Los badges de grado de consulta NO se muestran** (campo `gradoconsulta` es `undefined`)
2. ❌ **El departamento NO se pre-selecciona** en el modal de edición (campo `depto` es `undefined`)

### Evidencia

**Respuesta actual del backend:**
```json
{
  "numero_usuario": 9818,
  "nombre": "Juan Pérez",
  "cuenta": "jperez",
  "nombre_departamento": "Informática"
  // ❌ Falta: "depto": "INF"
  // ❌ Falta: "gradoconsulta": "LICU"
}
```

**Respuesta esperada:**
```json
{
  "numero_usuario": 9818,
  "nombre": "Juan Pérez",
  "cuenta": "jperez",
  "nombre_departamento": "Informática",
  "depto": "INF",              // ✅ Necesario para pre-selección
  "gradoconsulta": "LICU"      // ✅ Necesario para badge
}
```

---

## 🔧 Solución Requerida

### Backend (URGENTE)

Necesitas modificar el **endpoint GET `/api/v1/usuarios/sige`** para que incluya los campos adicionales en la consulta SQL.

#### Ejemplo de Query SQL (ajustar según tu esquema):

```sql
-- Query ACTUAL (probablemente):
SELECT 
  numero_usuario,
  nombre,
  cuenta,
  nombre_departamento
FROM usuarios_sige;

-- Query CORRECTA (agregar campos):
SELECT 
  numero_usuario,
  nombre,
  cuenta,
  nombre_departamento,
  depto,              -- ✅ Campo ID del departamento
  gradoconsulta       -- ✅ Campo grado de consulta
FROM usuarios_sige;
```

#### Si usas un ORM (Sequelize, TypeORM, etc.):

```javascript
// Asegúrate de incluir todos los campos en el select
const usuarios = await Usuario.findAll({
  attributes: [
    'numero_usuario',
    'nombre',
    'cuenta',
    'nombre_departamento',
    'depto',           // ✅ Agregar
    'gradoconsulta'    // ✅ Agregar
  ]
});
```

---

## 📊 Verificación

### Paso 1: Probar el Endpoint

Usa Postman, Thunder Client, o curl para verificar la respuesta:

```bash
curl -H "ngrok-skip-browser-warning: true" \
  https://hoyt-uncautious-jonnie.ngrok-free.dev/api/v1/usuarios/sige | jq '.[0]'
```

**Resultado esperado:**
```json
{
  "numero_usuario": 9818,
  "nombre": "...",
  "cuenta": "...",
  "nombre_departamento": "...",
  "depto": "...",           // ✅ Debe aparecer
  "gradoconsulta": "..."    // ✅ Debe aparecer
}
```

### Paso 2: Verificar en el Frontend

Una vez corregido el backend, recarga la página y verifica en la consola:

```javascript
// En la consola del navegador:
users[0]
```

Deberías ver algo como:
```javascript
{
  numero_usuario: 9818,
  nombre: "Juan Pérez",
  cuenta: "jperez",
  nombre_departamento: "Informática",
  depto: "INF",              // ✅ Ahora presente
  gradoconsulta: "LICU"      // ✅ Ahora presente
}
```

---

## ✅ Funcionalidades que se Activarán

Una vez que el backend devuelva estos campos:

### 1. Badges de Grado de Consulta

Los badges aparecerán automáticamente en:

- **Tarjetas de usuario (UserCard)**
  ```
  ┌─────────────────────────────┐
  │ [J] Juan Pérez             │
  │     jperez                 │
  │     [Informática] [LICU]   │ ← Badge de grado
  └─────────────────────────────┘
  ```

- **Tabla de usuarios (UserTable)**
  ```
  Nombre       | Depto         | Grado
  -------------|---------------|-------
  Juan Pérez   | Informática   | LICU  ← Badge de grado
  ```

### 2. Departamento Pre-seleccionado

Al hacer clic en editar usuario, el select de departamento mostrará automáticamente el departamento actual del usuario.

```
Antes (sin depto):
  Departamento: [Seleccionar departamento ▼]  ← Vacío

Después (con depto):
  Departamento: [Informática ▼]  ← Pre-seleccionado
```

---

## 🔍 Campos Requeridos por Tabla

Según la estructura actual, necesitas:

### Tabla: `usuarios` (o `usuarios_sige`)

| Campo              | Tipo         | Descripción                    |
|--------------------|--------------|--------------------------------|
| numero_usuario     | INT/BIGINT   | ID único del usuario           |
| nombre             | VARCHAR(100) | Nombre completo                |
| cuenta             | VARCHAR(14)  | Username                       |
| clave              | VARCHAR(14)  | Contraseña (no en GET)         |
| depto              | VARCHAR(10)  | **ID del departamento** ✅     |
| gradoconsulta      | VARCHAR(4)   | **LICU/MACU/ALL** ✅           |
| nombre_departamento| VARCHAR(100) | Nombre del departamento (JOIN) |

---

## 🚨 Importante

1. **No modifiques la estructura de la tabla** si ya existe `depto` y `gradoconsulta`, solo asegúrate de incluirlos en el SELECT.

2. **Verifica que los datos existan** en la base de datos:
   ```sql
   SELECT COUNT(*) FROM usuarios_sige WHERE depto IS NOT NULL;
   SELECT COUNT(*) FROM usuarios_sige WHERE gradoconsulta IS NOT NULL;
   ```

3. **Si los campos no existen en la tabla**, necesitarás:
   - Agregar las columnas a la tabla
   - Popular los datos existentes con valores por defecto
   - Modificar los endpoints POST/PUT para guardar estos campos

---

## 📝 Checklist de Solución

### Backend
- [ ] Agregar `depto` al SELECT del endpoint GET `/usuarios/sige`
- [ ] Agregar `gradoconsulta` al SELECT del endpoint GET `/usuarios/sige`
- [ ] Verificar que los campos existen en la tabla
- [ ] Probar endpoint con Postman/curl
- [ ] Verificar que devuelve los campos correctos

### Frontend (Ya está listo ✅)
- [x] Componente `GradoConsultaBadge` creado
- [x] Integrado en `UserCard`
- [x] Integrado en `UserTable`
- [x] Modal de edición lee campo `depto`
- [x] `DepartmentSelect` maneja pre-selección

---

## 🎯 Estado Actual

**Frontend**: ✅ **100% Listo y funcional**
- Los componentes están preparados para recibir los datos
- Los badges se mostrarán automáticamente cuando `gradoconsulta` exista
- El departamento se pre-seleccionará cuando `depto` exista

**Backend**: ❌ **Requiere modificación**
- Endpoint GET `/usuarios/sige` debe incluir campos `depto` y `gradoconsulta`

---

## 📞 Próximos Pasos

1. **Modificar el backend** para incluir los campos faltantes
2. **Reiniciar el servidor backend**
3. **Recargar el frontend** (Ctrl+R o Cmd+R)
4. **Verificar que aparezcan los badges y la pre-selección**

---

**Fecha**: Octubre 27, 2025  
**Prioridad**: 🔴 Alta  
**Componentes afectados**: UserCard, UserTable, UserModalEdit
