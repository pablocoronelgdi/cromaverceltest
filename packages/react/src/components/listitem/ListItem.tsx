import React, { useState, useId } from 'react'
import { StyledListItem, TextContent, RightContent, LeftContent } from './styles'
import type { ListItemPropsTypes } from './types'

const ListItem: React.FC<ListItemPropsTypes> = ({
  $title,
  $description,
  $contentLeft,
  $contentRight,
  $disabled = false
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const defaultId = useId()

  const handlePress = (): void => {
    setPressed(true)
    setTimeout(() => {
      setPressed(false)
    }, 1000)
  }

  return (
    <StyledListItem
      id={defaultId}
      $title={$title}
      $disabled={$disabled}
      className={`${pressed ? 'pressed' : ''} ${$disabled ? 'disabled' : ''}`}
      onClick={handlePress}
    >
      { $contentLeft &&
        <LeftContent title={$title}>
        { $contentLeft }
        </LeftContent>
      }
      <TextContent title={$title}>
        <p>{$title}</p>
        <span>{$description}</span>
      </TextContent>
      { $contentRight &&
        <RightContent title={$title}>
        { $contentRight }
        </RightContent>
      }
    </StyledListItem>
  )
}

export default ListItem
