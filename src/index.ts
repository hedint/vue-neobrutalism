import type { NeoButtonProps } from "./components/button";
import type { NeoCardProps } from "./components/card";
import type { NeoDialogProps } from "./components/dialog";
import type { NeoInputProps } from "./components/input";
import type { NeoTagProps } from "./components/tag";
import { NeoButton } from "./components/button";
import { NeoCard } from "./components/card";
import { NeoDialog } from "./components/dialog";
import { NeoInput } from "./components/input";
import { NeoTabs } from "./components/tabs";
import { NeoTag } from "./components/tag";

import "./assets/styles/theme.css";

export { NeoButton };
export { type NeoButtonProps, NeoCard, NeoCardProps, NeoDialog, NeoDialogProps, NeoInput, NeoInputProps, NeoTag, NeoTagProps };

export default {
  install(app: import("vue").App) {
    app.component("NeoButton", NeoButton);
    app.component("NeoCard", NeoCard);
    app.component("NeoDialog", NeoDialog);
    app.component("NeoInput", NeoInput);
    app.component("NeoTag", NeoTag);
    app.component("NeoTabs", NeoTabs);
  },
};
