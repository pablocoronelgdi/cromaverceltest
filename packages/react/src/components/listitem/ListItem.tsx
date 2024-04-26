import React, { useId } from 'react'
import { StyledListItem, StyledListItemLink, StyledListItemTextContent } from './styles'
import type { ListItemPropTypes } from './types'
import LeftContentListItem from './leftContent/LeftContent'
import RightContentListItem from './rightContent/RightContent'

const ListItem: React.FC<ListItemPropTypes> = ({
  title = 'Título',
  $description,
  $as = 'item',
  $leftComponentRender,
  $leftContentChildren,
  $rightComponentRender,
  $rightContentChildren,
  $onSelect,
  $selected,
  $labelLinkRight,
  $iconNameRight,
  $nameInput,
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
        href={props.href}
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
          $nameInput={$nameInput}
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
          $href={props.href}
          $labelLink={$labelLinkRight}
          $iconName={$iconNameRight}
        >
          {$rightContentChildren}
        </RightContentListItem>
      )}
    </StyledListItem>
  )
}

export default ListItem
