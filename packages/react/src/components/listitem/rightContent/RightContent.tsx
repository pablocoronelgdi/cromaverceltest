import React, { useEffect, useState } from 'react'
import { Icon } from '../../icon'
import { Checkbox } from '../../checkbox'
import { RadioButton } from '../../radiobutton'
import { Switch } from '../../switch'
import { RightContentListItemPropTypes } from "./types";
import { color } from '@cromaui/foundations'
import { Link } from '../../link'

const RightContentListItem: React.FC<RightContentListItemPropTypes> = ({
  as = 'icon',
  children,
  $onSelect,
  $selected,
  $disabled,
  $iconName = 'chevron_right',
  $href
}) => {
  const [value, setValue] = useState<boolean>(false)
  if (as === 'checkbox' || as === 'radioButton' || as === 'switch') {
    useEffect(() => {
      if ($selected !== undefined) {
        setValue($selected)
      }
    }, [$selected])
  }
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation()
    $onSelect && $onSelect(e)
    setValue(!value)
  }

  if (as === 'icon') {
    return (
        <Icon
          color={$disabled ? color.neutral[400] : color.blue.main}
          $size="medium"
          $name={$iconName}
        />
    )
  }

  if (as === 'checkbox') {
    return (
      <Checkbox
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleCheck(e)
        }}
        disabled={$disabled}
      />
    )
  }

  if (as === 'radioButton') {
    return (
      <RadioButton
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleCheck(e)
        }}
        disabled={$disabled}
      />
    )
  }

  if (as === 'switch') {
    return (
      <Switch
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleCheck(e)
        }}
        disabled={$disabled}
      />
    )
  }

  if (as === 'link' && $href) {
    return (
        <Link
          $size="small"
          href={$href}
        />
    )
  }

  return <div>{children}</div>
}

export default RightContentListItem
