import React, { useId } from 'react'
import { StyledListItem, StyledListItemLink, StyledListItemTextContent } from './styles'
import type { ListItemPropTypes } from './types'
import LeftContentListItem from './leftContent/LeftContent'
import RightContentListItem from './rightContent/RightContent'

const ListItem: React.FC<ListItemPropTypes> = ({
  title = 'Título',
  $description,
  $leftContentChildren,
  $leftComponentRender,
  $rightComponentRender,
  $rightContentChildren,
  $as = 'item',
  $onSelect,
  $selected,
  ...props
}) => {
  const defaultId = useId()

  const handleOnSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation()
    $onSelect && $onSelect(e)
  }

  if ($as === 'link') {
    return (
      <StyledListItemLink
        id={props.id || defaultId}
        disabled={props.disabled}
        onClick={props.disabled ? (e) => e.preventDefault() : undefined}
        {...props}
      >
        {($leftContentChildren || $leftComponentRender) && (
          <LeftContentListItem
            $onSelect={handleOnSelect}
            as={$leftComponentRender}
            $selected={$selected}
            $disabled={props.disabled}
          >
            {$leftContentChildren}
          </LeftContentListItem>
        )}
        {title && (
          <StyledListItemTextContent disabled={props.disabled}>
            <span>{title}</span>
            {$description && <p>{$description}</p>}
          </StyledListItemTextContent>
        )}
        {($rightContentChildren || $rightComponentRender) && (
          <RightContentListItem
            $onSelect={handleOnSelect}
            as={$rightComponentRender}
            $selected={$selected}
            $disabled={props.disabled}
          >
            {$rightContentChildren}
          </RightContentListItem>
        )}
      </StyledListItemLink>
    )
  }
  return (
    <StyledListItem id={props.id || defaultId} disabled={props.disabled} type="button" {...props}>
      {($leftContentChildren || $leftComponentRender) && (
        <LeftContentListItem
          $onSelect={handleOnSelect}
          as={$leftComponentRender}
          $selected={$selected}
          $disabled={props.disabled}
        >
          {$leftContentChildren}
        </LeftContentListItem>
      )}
      {title && (
        <StyledListItemTextContent disabled={props.disabled}>
          <span>{title}</span>
          {$description && <p>{$description}</p>}
        </StyledListItemTextContent>
      )}
      {($rightContentChildren || $rightComponentRender) && (
        <RightContentListItem
          $onSelect={handleOnSelect}
          as={$rightComponentRender}
          $selected={$selected}
          $disabled={props.disabled}
        >
          {$rightContentChildren}
        </RightContentListItem>
      )}
    </StyledListItem>
  )
}

export default ListItem
