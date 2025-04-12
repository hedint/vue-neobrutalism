import type { NeoShape } from "@/types/shape";

export type InputType =
  | "text" | "number" | "email" | "password"
  | "checkbox" | "radio" | "file" | "submit"
  | "reset" | "button" | "color" | "date"
  | "datetime-local" | "month" | "range"
  | "search" | "tel" | "time" | "url" | "week" | string;
export interface NeoInputProps {
  type?: InputType
  placeholder?: string
  isDisabled?: boolean
  isError?: boolean
  isSuccess?: boolean
  shape: NeoShape
}
