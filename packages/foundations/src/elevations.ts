import { neutral } from './colors'
import { opacities } from './opacities'

export const elevations = {
  level1: `
    0px 1px 3px 1px ${neutral[800]}${opacities.opacity15}, 
    0px 1px 2px 0px ${neutral[800]}${opacities.opacity30}
  `,
  level2: `
    0px 2px 6px 2px ${neutral[800]}${opacities.opacity15}, 
    0px 1px 2px 0px ${neutral[800]}${opacities.opacity30}
  `,
  level3: `
    0px 1px 3px 0px ${neutral[800]}${opacities.opacity30},
    0px 4px 8px 3px ${neutral[800]}${opacities.opacity15}
  `,
  level4: `
    0px 2px 3px 0px ${neutral[800]}${opacities.opacity30},
    0px 6px 10px 4px ${neutral[800]}${opacities.opacity15}
  `,
  level5: `
    0px 4px 4px 0px ${neutral[800]}${opacities.opacity30},
    0px 8px 12px 6px ${neutral[800]}${opacities.opacity15}
  `,
  none: 'none'
}

export const elevationsNative = {
  level1: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
}
