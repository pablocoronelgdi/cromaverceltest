import React, { useEffect, useState } from 'react'
import { color, spacings } from '@cromaui/foundations'
import { Icon } from '../../icon'
import { Checkbox } from '../../checkbox'
import { RadioButton } from '../../radiobutton'
import { Switch } from '../../switch'
import { LeftContentListItemPropTypes } from './types'

const LeftContentListItem: React.FC<LeftContentListItemPropTypes> = ({
  as = 'iconItem',
  children,
  $onSelect,
  $selected,
  $disabled
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

  if (as === 'iconItem') {
    // @TODO: Cambiar por componente IconItem cuando este desarrollado
    return (
      <div
        style={{
          background: $disabled ? color.neutral[300] : color.navy.extraSoft,
          padding: spacings.space6,
          display: 'flex',
          alignItems: 'center',
          width: 'min-content',
          borderRadius: spacings.space8
        }}
      >
        <Icon
          color={$disabled ? color.neutral[500] : color.blue.main}
          $size="medium"
          $name="check"
        />
      </div>
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

  return <div>{children}</div>
}

export default LeftContentListItem
