import React, { useState } from 'react'
import { StyledListItem, TextContent, RightContent, LeftContent } from './styles'
import type { ListItemPropsTypes } from './types'

const ListItem: React.FC<ListItemPropsTypes> = ({ title, subtitle, contentLeft, contentRight, disabled = false }) => {
  const [pressed, setPressed] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePress = () => {
    setPressed(true)
    setTimeout(() => {
      setPressed(false)
    }, 1000)
  }

  return (
    <StyledListItem title={title} className={`${pressed ? 'pressed' : ''} ${disabled ? 'disabled' : ''}`} onClick={handlePress}>
      { contentLeft &&
        <LeftContent title={title}>
        { contentLeft }
        </LeftContent>
      }
      <TextContent title={title}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </TextContent>
      { contentRight &&
        <RightContent title={title}>
        { contentRight }
        </RightContent>
      }
    </StyledListItem>
  )
}

export default ListItem
