import type { NeoBgColor } from "../../../types/bg-color";
import type { NeoShape } from "../../../types/shape";

export interface NeoCardProps {
  shape?: NeoShape
  bgColor?: NeoBgColor
  interactive?: boolean
  component?: string
  isDisabled?: boolean
}
