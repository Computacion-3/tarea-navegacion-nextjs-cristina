# GymRoutines

Tarea Navegación NextJS

Estudiante: Cristina Angulo

Código: A00404027

Pantallas de inicio de sesión y registro, header y barra de navegación.

## Cómo correrlo

```bash
npm install
npm run dev
```

La aplicación queda en [http://localhost:3001](http://localhost:3001).

Otros comandos:

```bash
npm run lint
npm run build
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Redirige a `/login` |
| `/login` | Inicio de sesión. Si los campos no están vacíos, lleva a `/routines` |
| `/register` | Registro con confirmación de contraseña |
| `/routines` | Rutinas (con header y navbar) |
| `/exercises` | Ejercicios (con header y navbar) |
| `/progress` | Progreso (con header y navbar) |

## Estructura

```
app/
  login/              Página de login
  register/           Página de registro
  (main)/             Grupo de rutas con header y navbar
    routines/
    exercises/
    progress/
src/
  features/
    auth/presentation/    Formularios y hooks de login y registro
    routines/presentation/ Tarjetas y datos de ejemplo de rutinas
  shared/
    components/layout/    Header y navbar
    navigation/           Lista de enlaces de la navbar
```