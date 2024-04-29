import React, { useId } from 'react'
import type { ButtonPropTypes } from './types'
import { Icon } from '../icon'
import { AnchorStyled, ButtonStyled } from './styles'

const Button: React.FC<ButtonPropTypes> = ({
  $as = 'button',
  $backgroundType = 'light',
  disabled = false,
  $fullWidth = false,
  $iconName,
  $iconPosition,
  onClick,
  $size = 'medium',
  $text,
  $variant = 'fill',
  ...props
}) => {
  const defaultId = useId()
  if ($as === 'a') {
    return (
      <AnchorStyled
        $as="a"
        $backgroundType={$backgroundType}
        $disabled={disabled}
        $fullWidth={$fullWidth}
        $iconName={$iconName}
        $iconPosition={$iconPosition}
        id={props.id ?? defaultId}
        onClick={
          disabled
            ? (e) => {
                e.preventDefault()
              }
            : onClick
        }
        $size={$size}
        $variant={$variant}
        title={props.title ?? $text}
        $text={$text}
        href={props.href}
      >
        {$text}
        {$iconName && (
          <Icon
            $name={$iconName}
            $size={
              $size === 'extra-small'
                ? 'small'
                : $size === 'medium' || $size === 'large'
                  ? 'large'
                  : 'medium'
            }
          />
        )}
      </AnchorStyled>
    )
  }
  return (
    <ButtonStyled
      $as="button"
      $backgroundType={$backgroundType}
      disabled={disabled}
      $fullWidth={$fullWidth}
      id={props.id ?? defaultId}
      $iconName={$iconName}
      $iconPosition={$iconPosition}
      onClick={onClick}
      $size={$size}
      type={props.type ?? 'button'}
      $variant={$variant}
      title={props.title ?? $text}
      $text={$text}
    >
      {$text}
      {$iconName && (
        <Icon
          $name={$iconName}
          $size={
            $size === 'extra-small'
              ? 'small'
              : $size === 'medium' || $size === 'large'
                ? 'large'
                : 'medium'
          }
        />
      )}
    </ButtonStyled>
  )
}

export default Button
