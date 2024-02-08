export type PinInputPropsTypes = {
  length: number
  disabled?: boolean
  title?: string
  label?: string
  type?: string
  errorMessage?: string
  error?: boolean
  onComplete: (pin: string) => void
}
