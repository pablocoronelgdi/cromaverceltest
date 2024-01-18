import React from 'react'
import { SpinnerContainerStyled } from './styles'
import type { SpinnerPropTypes } from './types'

const Spinner: React.FC<SpinnerPropTypes> = ({ withLogo, label }) => {
  return (
    <SpinnerContainerStyled withLogo={withLogo}>
      <div>
        {withLogo && (
          <div>
            <div />
          </div>
        )}
      </div>
      {label && <span>{label}</span>}
    </SpinnerContainerStyled>
  )
}

export default Spinner
