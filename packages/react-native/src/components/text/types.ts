import { ReactNode } from "react";
type TextVariant = 'bold' | 'semibold' | 'regular';
type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLg' | 'bodyMd' | 'bodySm' | 'caption';
type TextProps = {
    $component?: TextComponent
    $variant?: TextVariant,
    children: ReactNode,
    $color?: string,
}


export { TextComponent, TextProps, TextVariant }