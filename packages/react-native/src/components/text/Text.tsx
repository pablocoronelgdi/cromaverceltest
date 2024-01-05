import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { macro } from '../../theme/theme';
import { TextComponent, TextVariant, TextProps } from './types';
import useCustomFont from '../../hooks/useCustomFont';


const getFontFamily = ($component: TextComponent, $variant?: TextVariant): string => {
  
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  let fontFamily = headings.includes($component) ? 'Titillium' : "OpenSans"
  if ($variant && ["bold","semibold","regular"].includes($variant)) {
    if (headings.slice(2).includes($variant)) {
      if ($variant === 'bold') {
        return `${fontFamily}-${$variant}`
      }
      else{
        return `${fontFamily}-semibold`
      }
    }
    else{
      return `${fontFamily}-${$variant}`
    }
  }
  return `${fontFamily}-regular`

}

const StyledText = styled.Text<TextProps>`
  font-family: ${({ $component, $variant }) => ($component ? getFontFamily($component,$variant) : "OpenSans-regular")};
  font-size: ${({ $component, theme }) => (($component ? theme.typography[$component].fontSize : theme.typography.bodyLg))};
  line-height: ${({ $component, theme }) => $component ? theme.typography[$component].lineHeight : theme.typography.bodyLg};
  color: ${({ $color, theme }) => $color ? theme.color.text.light : theme.color.text.dark}
`;

const CromaText: React.FC<TextProps> = ({ $component = 'bodyMd', children, $variant = "regular", $color }: TextProps) => {
  const fontLoaded = useCustomFont();
  return fontLoaded && <ThemeProvider theme={macro}>
    <StyledText $component={$component} $variant={$variant} $color={$color}>
      {children}
    </StyledText>
  </ThemeProvider>

};

export default CromaText;