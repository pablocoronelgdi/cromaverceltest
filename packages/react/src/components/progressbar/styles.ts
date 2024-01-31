import styled from 'styled-components'
import { color, shapes, spacings } from '@cromaui/foundations'
import type { ProgressBarPropsTypes } from './types'
import { FONT_CAPTION, FONT_TYPE_REGULAR } from '../../globals/globals'

export const Container = styled.div`
  width: 100%;

  & p {
    margin: 0;
    ${FONT_CAPTION}
    ${FONT_TYPE_REGULAR}
  }
`

export const ContainerProgress = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${color.blue.extraSoft};
  border-radius: ${shapes.md};
  margin-top: ${spacings.space4};
  margin-bottom: ${spacings.space4};
  overflow: hidden;
`

export const ProgressFill = styled.div<ProgressBarPropsTypes>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${color.blue.main};
  transition: width 0.3s ease-in-out;
`
export default ProgressFill
