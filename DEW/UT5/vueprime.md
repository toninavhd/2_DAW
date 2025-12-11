
# instalar primevue vite
guia rapida para clase

## Using npm
```npm install primevue @primeuix/themes```

## Using yarn
```yarn add primevue @primeuix/themes```

## Using pnpm
```pnpm add primevue @primeuix/themes```

## Theme
Configure PrimeVue to use a theme like Aura.

``` 
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

```

## Verificar

``` 
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button);

```