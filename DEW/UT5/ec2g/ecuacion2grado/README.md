# Vue 3 + TypeScript + Composition API Project

Este es un proyecto de ejemplo que demuestra las mejores prácticas para desarrollar aplicaciones Vue.js con TypeScript y Composition API.

## Características

- **Vue 3** con Composition API
- **TypeScript** para tipado estático
- **Single File Components (SFC)**
- **Vite** como bundler y servidor de desarrollo
- **Hot Module Replacement (HMR)**
- **CSS Grid** responsive

## Estructura del Proyecto

```
vue-nuevo-proyecto/
├── src/
│   ├── components/
│   │   └── TodoApp.vue          # Componente de lista de tareas
│   ├── App.vue                  # Componente principal
│   ├── main.ts                  # Punto de entrada de la aplicación
│   ├── style.css                # Estilos globales
│   └── env.d.ts                 # Declaraciones de tipos de Vite
├── index.html                   # Archivo HTML principal
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # Configuración de TypeScript
├── tsconfig.app.json            # Configuración de TypeScript para la app
├── tsconfig.node.json           # Configuración de TypeScript para Node
└── vite.config.ts               # Configuración de Vite
```

## Tecnologías Utilizadas

- **Vue 3.4.0**: Framework progresivo de JavaScript
- **TypeScript 5.3.0**: Superset tipado de JavaScript
- **Vite 5.0.0**: Herramienta de construcción ultrarrápida
- **@vitejs/plugin-vue**: Plugin oficial de Vue para Vite

## Componentes

### App.vue
Componente principal que incluye:
- Header con información del proyecto
- Grid responsive con dos secciones
- Contador interactivo con estado reactivo
- Integración del componente TodoApp

### TodoApp.vue
Componente de lista de tareas que demuestra:
- **Props tipadas** con valores por defecto
- **Interfaces TypeScript** para tipado de datos
- **Estado reactivo** con `ref()` y `computed()`
- **Eventos** y manejo de formularios
- **Computed properties** para estadísticas

## Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## Tipos TypeScript Implementados

- **Interfaces**: Para tipado de props y datos
- **Props con defaults**: Usando `withDefaults()`
- **Tipos de return**: Métodos tipados explícitamente
- **Generic types**: Para componentes reutilizables

## Mejores Prácticas

1. **Composition API**: Uso de `setup()` para lógica de componentes
2. **TypeScript**: Tipado estricto para mejor desarrollo
3. **Props tipadas**: Interfaces claras para comunicación entre componentes
4. **Scoped CSS**: Estilos encapsulados por componente
5. **Responsive Design**: CSS Grid con media queries

## Instalación y Uso

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar en desarrollo: `npm run dev`
4. Abrir navegador en `http://localhost:5173`

## Próximos Pasos

- [ ] Agregar Pinia para gestión de estado
- [ ] Implementar Vue Router para navegación
- [ ] Añadir tests con Vitest
- [ ] Configurar ESLint y Prettier
- [ ] Implementar componentes adicionales
