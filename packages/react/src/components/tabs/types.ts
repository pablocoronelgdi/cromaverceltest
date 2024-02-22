export type TabsItemProps = {
  label?: string
  iconLeftName?: string
  iconRightName?: string
  content?: React.ReactNode | undefined
  active?: boolean
  focused?: boolean
}

export type TabsProps = {
  tabs: TabsItemProps[]
  iconLeft?: boolean
  iconRight?: boolean
  disabled?: boolean
  vertical?: boolean
  className?: string
  slidesToShow?: number
  label?: boolean
}
