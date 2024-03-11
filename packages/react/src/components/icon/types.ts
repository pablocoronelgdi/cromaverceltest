export type IconSizeType = 'small' | 'medium' | 'large' | 'extra-large'
export type IconPropTypes = {
  name?: string
  size?: IconSizeType
  color?: string
  style?: object
  theme?: object
  // @TODO: Remover linea 10 cuando se cree la variante extra-small en el size de Button
  onClick?: () => void
} & React.HTMLAttributes<HTMLSpanElement>
