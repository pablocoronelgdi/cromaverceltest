import { Neutral } from "./colors";
import { Opacities } from "./opacities";

export const Elevations = {
  level1: `0px 1px 2px 0px ${Neutral[400]}${Opacities.opacity30}`,
  level2: `0px 2px 2px 0px ${Neutral[400]}${Opacities.opacity30}`,
  level3: `0px 3px 4px 2px ${Neutral[500]}${Opacities.opacity15}`,
  level4: `0px 6px 10px 4px ${Neutral[500]}${Opacities.opacity15}`,
  level5: `0px 8px 12px 6px ${Neutral[600]}${Opacities.opacity15}`,
  none: "none",
};
