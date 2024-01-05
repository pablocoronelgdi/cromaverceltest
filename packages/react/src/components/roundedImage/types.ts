import { IconPropTypes } from "../icon/types";
import { StyledImageProps } from "../image/types";

export type RoundedImageSizeType = "extra-small" | "small" | "medium" | "large" | "extra-large";

export type RoundedImageProps = {
  monogram?: string;
  iconName?: IconPropTypes['name'];
  photo?: StyledImageProps;
  disabled?: boolean;
  size: RoundedImageSizeType;
};
