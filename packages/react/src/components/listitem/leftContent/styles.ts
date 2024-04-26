import styled, { css } from 'styled-components'
import { RightContentListItemPropTypes } from '../rightContent/types'

export const SyledContainerDisabled = styled.div<RightContentListItemPropTypes>`
  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 40%;
      filter: grayscale(100%);
    `}
`
