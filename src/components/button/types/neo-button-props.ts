import type { NeoBgColor } from "../../../types/bg-color";
import type { NeoShape } from "../../../types/shape";

export interface NeoButtonProps {
  component?: string
  variant?: "primary" | "reverse" | "neutral" | "reverse-neutral" | "text"
  shape?: NeoShape
  size?: "small" | "medium" | "large"
  isDisabled?: boolean
  isIcon?: boolean
  bgColor?: NeoBgColor
}
