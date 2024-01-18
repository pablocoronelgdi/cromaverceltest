import { neutral } from './colors'
import { opacities } from './opacities'

export const elevations = {
  level1: `0px 1px 2px 0px ${neutral[400]}${opacities.opacity30}`,
  level2: `0px 2px 2px 0px ${neutral[400]}${opacities.opacity30}`,
  level3: `0px 3px 4px 2px ${neutral[500]}${opacities.opacity15}`,
  level4: `0px 6px 10px 4px ${neutral[500]}${opacities.opacity15}`,
  level5: `0px 8px 12px 6px ${neutral[600]}${opacities.opacity15}`,
  none: 'none'
}
