import React, { useEffect, useState } from 'react'
import { color, spacings } from '@cromaui/foundations'
import { Icon } from '../../icon'
import { Checkbox } from '../../checkbox'
import { RadioButton } from '../../radiobutton'
import { Switch } from '../../switch'
import type { LeftContentListItemPropTypes } from './types'
import { SyledContainerDisabled } from './styles'

const LeftContentListItem: React.FC<LeftContentListItemPropTypes> = ({
  as,
  children,
  $onSelect,
  $selected,
  $disabled,
  $nameInput
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
        name={$nameInput}
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

  return <SyledContainerDisabled $disabled={$disabled}>{children}</SyledContainerDisabled>
}

export default LeftContentListItem
