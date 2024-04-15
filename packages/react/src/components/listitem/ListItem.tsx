import React, { useState, useId } from 'react'
import { StyledListItem, TextContent, RightContent, LeftContent } from './styles'
import type { ListItemPropsTypes } from './types'

const ListItem: React.FC<ListItemPropsTypes> = ({
  title,
  $description,
  $contentLeft,
  $contentRight,
  $disabled = false,
  ...props
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const defaultId = useId()

  const handlePress = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (!$disabled) {
      setPressed(!pressed)
    }
  }

  return (
    <StyledListItem
      id={props.id || defaultId}
      $disabled={$disabled}
      className={`${pressed ? 'pressed' : ''}`}
      onMouseDown={(e) => {
        handlePress(e)
      }}
      onMouseUp={(e) => {
        handlePress(e)
      }}
      {...props}
    >
      {$contentLeft && <LeftContent title={title}>{$contentLeft}</LeftContent>}
      {title && (
        <TextContent $disabled={$disabled}>
          <span>{title}</span>
          {$description && <p>{$description}</p>}
        </TextContent>
      )}
      {$contentRight && <RightContent title={title}>{$contentRight}</RightContent>}
    </StyledListItem>
  )
}

export default ListItem
