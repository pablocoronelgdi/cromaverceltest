import React, { useId } from 'react'
import { StyledSpinnerContainer, StyledSpinnerLabel } from './styles'
import type { SpinnerPropTypes } from './types'

const Spinner: React.FC<SpinnerPropTypes> = ({
  $withLogo = false,
  $label,
  id,
  $size = 'extra-small',
  $variantColor = 'dark'
}) => {
  const defaultId = useId()
  return (
    <StyledSpinnerContainer
      $withLogo={$withLogo}
      id={id || defaultId}
      $size={$size}
      $variantColor={$variantColor}
    >
      <div>
        {$withLogo && (
          <div>
            <div />
          </div>
        )}
      </div>
      {$label && $size == 'large' && (
        <StyledSpinnerLabel $variantColor={$variantColor} $withLogo={$withLogo}>
          {$label}
        </StyledSpinnerLabel>
      )}
    </StyledSpinnerContainer>
  )
}

export default Spinner
