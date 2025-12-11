# 🧮 Calculadora de Ecuaciones de Segundo Grado

Una aplicación Vue.js moderna para resolver ecuaciones cuadráticas de la forma ax² + bx + c = 0.

## ✨ Características

- **Resolución completa**: Calcula todas las soluciones reales y complejas
- **Interfaz intuitiva**: Formulario simple para ingresar coeficientes
- **Resultados detallados**: Muestra discriminante, soluciones y proceso paso a paso
- **Diseño responsive**: Funciona perfectamente en móviles y escritorio
- **TypeScript**: Tipado estático para mayor robustez
- **Vue 3 + Composition API**: Código moderno y eficiente

## 🔧 Tecnologías

- **Vue 3.4.0** con Composition API
- **TypeScript 5.3.0** para tipado estático
- **Vite 5.0.0** como bundler y servidor de desarrollo
- **CSS Grid y Flexbox** para diseño responsive
- **Gradientes CSS** para una interfaz atractiva

## 🧮 Matemáticas Implementadas

La aplicación resuelve ecuaciones de segundo grado usando la **fórmula general**:

```
x = (-b ± √(b² - 4ac)) / 2a
```

### Casos de Discriminante (Δ = b² - 4ac):

- **Δ > 0**: Dos soluciones reales distintas
- **Δ = 0**: Una solución real (raíz doble)
- **Δ < 0**: Dos soluciones complejas conjugadas

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd ecuaciones-segundo-grado

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 📱 Ejemplos de Uso

### Ecuación con dos soluciones reales:
- **Entrada**: a=1, b=-5, c=6
- **Resultado**: x₁ = 3, x₂ = 2
- **Ecuación**: x² - 5x + 6 = 0

### Ecuación con una solución:
- **Entrada**: a=1, b=-4, c=4
- **Resultado**: x = 2
- **Ecuación**: x² - 4x + 4 = 0

### Ecuación con soluciones complejas:
- **Entrada**: a=1, b=0, c=1
- **Resultado**: x₁ = i, x₂ = -i
- **Ecuación**: x² + 1 = 0

## 🎯 Funcionalidades

### Entrada de Datos
- Formulario con campos para coeficientes a, b, c
- Validación en tiempo real
- Valores por defecto preestablecidos
- Soporte para números decimales

### Visualización de Resultados
- **Discriminante**: Con código de colores (verde/amarillo/rojo)
- **Soluciones**: Formato claro y preciso
- **Proceso paso a paso**: Muestra la fórmula y sustitución
- **Explicaciones**: Información sobre el tipo de soluciones

### Interfaz de Usuario
- Diseño moderno con gradientes
- Animaciones suaves
- Responsive design
- Botón para limpiar resultados
- Formato matemático con fuente monospace

## 🏗️ Estructura del Código

```
src/
├── App.vue           # Componente principal con lógica completa
├── main.ts           # Punto de entrada de la aplicación
├── style.css         # Estilos globales y responsive
└── env.d.ts          # Declaraciones de tipos TypeScript
```

## 🔍 Características TypeScript

- **Interfaces tipadas**: Para coeficientes y soluciones
- **Props tipadas**: Para componentes reutilizables
- **Métodos tipados**: Return types explícitos
- **Computed properties**: Con tipos apropiados
- **Validación**: Tipado estricto para prevenir errores

## 🎨 Diseño

- **Colores**: Gradientes púrpura/azul con acentos verdes
- **Tipografía**: Inter para texto, Courier New para matemáticas
- **Layout**: Grid responsive con breakpoints
- **Animaciones**: Transiciones suaves y efectos hover
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~400 líneas
- **Componentes**: 1 componente principal
- **Funciones matemáticas**: 8+ funciones
- **Casos de prueba**: 3 tipos de ecuaciones
- **Compatibilidad**: Navegadores modernos

## 🔮 Próximas Mejoras

- [ ] Gráficos de la función cuadrática
- [ ] Historial de ecuaciones resueltas
- [ ] Exportar resultados a PDF
- [ ] Múltiples métodos de resolución
- [ ] Validación de entrada más robusta
- [ ] Tests unitarios
- [ ] Internacionalización

## 📄 Licencia

MIT License - Libre para uso educativo y comercial.

---

**¡Desarrollado con ❤️ usando Vue.js y TypeScript!**
