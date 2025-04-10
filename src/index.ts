// src/index.ts
import type { App } from 'vue'; // Import App type for plugin installation

// Import all components you want to export from your library
import NeoButton from './components/button/NeoButton.vue';
// Import other components like NeoCard, NeoInput, etc.
// import NeoCard from './components/NeoCard.vue';

// Import the main CSS file if you want it bundled/extracted automatically
// Or instruct users to import it separately.
import './assets/theme.css';

// Export components individually
export { NeoButton /*, NeoCard */ };

// Optional: Export a plugin install function with type safety
// This allows users to install all components globally via `app.use(MyLibrary)`
export default {
  install: (app: App, options?: any) => { // Add type for app and optional options
    app.component('NeoButton', NeoButton);
    // app.component('NeoCard', NeoCard);

    // You can also provide global configurations via options here
    // Example: app.provide('nb-config', options);
  },
};

// If you don't need a plugin, just export the components:
// export { NeoButton /*, NeoCard */ };
