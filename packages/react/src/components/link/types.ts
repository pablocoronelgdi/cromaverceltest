export type LinkSizeType = 'small' | 'medium' | 'large'

export type LinkPropsTypes = {
  content: string
  link: string
  alt: string
  title: string
  iconRight?: boolean
  iconLeft?: boolean
  iconName: string
  className?: string
  target?: unknown
  disabled?: boolean
  size?: LinkSizeType
}
