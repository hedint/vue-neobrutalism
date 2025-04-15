// src/index.ts
// import type { App } from "vue"; // Import App type for plugin installation

// Import all components you want to export from your library
import type { NeoButtonProps } from "./components/button";
import type { NeoCardProps } from "./components/card";
import type { NeoDialogProps } from "./components/dialog";
import type { NeoInputProps } from "./components/input";
import type { NeoTagProps } from "./components/tag";
import { NeoButton } from "./components/button";
import { NeoCard } from "./components/card";
import { NeoDialog } from "./components/dialog";
import { NeoInput } from "./components/input";
import { NeoTag } from "./components/tag";

// Import the main CSS file if you want it bundled/extracted automatically
// Or instruct users to import it separately.
import "./assets/styles/theme.css";

// Export components individually
export { NeoButton, type NeoButtonProps, NeoCard, NeoCardProps, NeoDialog, NeoDialogProps, NeoInput, NeoInputProps, NeoTag, NeoTagProps };

// Optional: plugin install (if your lib can be used with `app.use(...)`)
export default {
  install(app: import("vue").App) {
    app.component("NeoButton", NeoButton);
    app.component("NeoCard", NeoCard);
    app.component("NeoDialog", NeoDialog);
    app.component("NeoInput", NeoInput);
    app.component("NeoTag", NeoTag);
  },
};
