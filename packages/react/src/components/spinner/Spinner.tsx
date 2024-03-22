import React, { useId } from 'react'
import { SpinnerContainerStyled } from './styles'
import type { SpinnerPropTypes } from './types'

const Spinner: React.FC<SpinnerPropTypes> = ({ $withLogo, $label, id }) => {
  const defaultId = useId()
  return (
    <SpinnerContainerStyled $withLogo={$withLogo} id={ id || defaultId }>
      <div>
        {$withLogo && (
          <div>
            <div />
          </div>
        )}
      </div>
      {$label && <span>{$label}</span>}
    </SpinnerContainerStyled>
  )
}

export default Spinner
