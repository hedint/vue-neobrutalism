export interface NeoButtonProps {
  variant?: "primary" | "reverse" | "neutral" | "reverse-neutral" | "text"
  size?: "small" | "medium" | "large"
  disabled?: boolean
  loading?: boolean
  target?: "_blank" | "_self" | "_parent" | "_top"
  href?: string
}
