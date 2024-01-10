
export type LinkSizeType = "small" | "medium" | "large";

export type StyledLinkProps = {
    content: string,
    link: string,
    alt: string,
    iconRight?: boolean,
    iconLeft?: boolean,
    iconName: string,
    className?: string,
    target?: Object,
    disabled?: boolean,
    size?: LinkSizeType,
}
