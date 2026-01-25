# Tienda Online - Vue 3 + TypeScript + Pinia

Tienda online desarrollada con Vue 3, TypeScript, Pinia, PrimeVue y PrimeFlex.

## Puesta en Marcha

### 1. Instalar dependencias

```sh
npm install
```

### 2. Ejecutar en desarrollo

```sh
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 3. Build para producción

```sh
npm run build
```

### 4. Preview del build

```sh
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
│   ├── NavbarComponent.vue
│   ├── ProductCardComponent.vue
│   └── FooterComponent.vue
├── views/           # Vistas de la aplicación
│   ├── HomeView.vue
│   ├── ShopView.vue
│   ├── CartView.vue
│   ├── LoginView.vue
│   ├── RegisterView.vue
│   └── PurchasedView.vue
├── stores/          # Pinia stores
│   └── cartStore.ts
├── composables/     # Composables reutilizables
│   └── authComposable.ts
├── router/          # Configuración del router
│   └── mainRouter.ts
└── App.vue          # Componente principal
```

## Sistema de Storage

La aplicación utiliza `sessionStorage` para persistir datos:

### 1. DataUsers (`/public/DataUsers.json`)
- **Descripción**: Base de datos de usuarios registrados
- **Formato**: JSON con array de usuarios
- **Campos**: `correoElectronico`, `passwordHash`, `nombre`

### 2. ShopSession (`ShopSession`)
- **Descripción**: Sesión del usuario logueado
- **Storage**: sessionStorage con clave `ShopSession`
- **Contenido**: Objeto `User` con `{ correoElectronico, passwordHash, nombre }`
- **Uso**: Mantiene la sesión activa mientras el navegador está abierto

### 3. GuestCartStore (`GuestCartStore`)
- **Descripción**: Carrito de compras para usuarios invitados
- **Storage**: sessionStorage con clave `GuestCartStore`
- **Contenido**: Array de `{ productId, cantidad }`
- **Persistencia**: Se guarda automáticamente al añadir productos

### 4. CartStore (`cartStore.ts`)
- **Descripción**: Store de Pinia para gestionar el carrito
- **Características**:
  - Carga productos desde `dataProductsShop.json`
  - Calcula totales: base imponible, IGIC (7%), total final
  - Gestiona añadir/eliminar productos
  - Persiste en `GuestCartStore`

### 5. HistoryPurchased (`<correoElectronico>HistoryPurchased`)
- **Descripción**: Historial de compras de usuarios autenticados
- **Storage**: sessionStorage con clave dinámica según el email del usuario
- **Contenido**: Array de compras con:
  - `fechaCompra`: ISO string de la fecha
  - `items`: Array de productos comprados
  - `totalBase`: Base imponible
  - `igic`: IGIC (7%)
  - `totalFinal`: Total con IGIC

## Rutas de la Aplicación

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/` | Home | Público |
| `/shop` | Tienda con productos | Público |
| `/cart` | Carrito de compras | Público |
| `/login` | Inicio de sesión | Público |
| `/register` | Registro de usuario | Público |
| `/purchased` | Historial de compras | Solo autenticados |

## Checklist Final

- [x] Rutas correctas configuradas en `mainRouter.ts`
- [x] Persistencia para usuarios guest (`GuestCartStore`)
- [x] Persistencia para usuarios autenticados (`ShopSession`)
- [x] Botón "Añadir X" funcional en `ShopView`
- [x] Carrito con drawer o layout completo en `CartView`
- [x] Toast notifications para acciones
- [x] Imágenes desde `/public/assets/images`
- [x] Cálculo correcto de IGIC (7%)
- [x] Historial de compras solo para logueados
- [x] Documentación README.md actualizada

## Tecnologías Utilizadas

- **Vue 3** - Framework progresivo
- **TypeScript** - Tipado estático
- **Pinia** - Gestión de estado
- **Vue Router** - Enrutamiento
- **PrimeVue** - Componentes UI
- **PrimeFlex** - Utilidades CSS
- **PrimeIcons** - Iconos
- **Vite** - Build tool
- **Vitest** - Tests unitarios
- **Cypress** - Tests E2E

