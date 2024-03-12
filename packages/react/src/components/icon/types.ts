export type IconSizeType = 'small' | 'medium' | 'large' | 'extra-large'
export type IconPropTypes = {
  $name?: string
  $size?: IconSizeType
  $color?: string
} & React.HTMLAttributes<HTMLSpanElement>
