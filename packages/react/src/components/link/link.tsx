import React  from 'react';
import { Color } from '@cromaui/foundations';
import { LinkPropsTypes, LinkSizeType } from './types';
import { StyledLink } from './styles';
import {Icon} from '../icon';

export const getSize = (size?: LinkSizeType) => {
    switch (size) {
      case "large":
        return "20px";
      case "medium":
        return "20px";
      case "small":
        return "16px";
      default:
        return "20px";
    }
  };

const Link: React.FC<LinkPropsTypes> = ({
    link = '',
    content = 'terminos y condiciones',
    alt = 'terminos y condiciones',
    title = 'terminos y condiciones',
    target,
    disabled = false,
    size,
    className = 'no-drop',
    iconLeft = false,
    iconRight = false,
    iconName = 'attachment'
}) => {

    const iconSize: LinkSizeType = (() => {
        switch (size) {
          case "small":
            return "small";
          case "medium":
            return "medium";
          case "large":
            return "large";
          default:
            return "medium";
        }
    })();

  return (
    <StyledLink 
        link={disabled ? '#' : link} 
        href={disabled ? '#' : link} 
        alt={alt} 
        title={title} 
        content={content} 
        target={target} 
        disabled={disabled} 
        className={`${className} size`} 
        iconName={iconName}
        size={size}
    >

        {iconRight && <Icon 
            color={disabled ? Color.Neutral[400] : Color.Blue.main} 
            name={iconName}
            size={iconSize} 
        /> }
        <p>{content}</p>
        {iconLeft && <Icon 
            color={disabled ? Color.Neutral[400] : Color.Blue.main} 
            name={iconName}
            size={iconSize} 
        />}
    </StyledLink>
  )
};

export default Link;
