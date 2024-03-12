import type { LogoCatalog } from '@cromaui/assets'
import type { LogoSizes } from './types'

export const getLogoSize = (name: LogoCatalog, size: LogoSizes): string => {
  const sizeMapping: Record<NonNullable<LogoCatalog>, Record<LogoSizes, string>> = {
    BankLimited: { small: '24px', medium: '32px', large: '40px' },
    Agro: { small: '24px', medium: '32px', large: '40px' },
    MacroHorizontal: { small: '24px', medium: '32px', large: '40px' },
    Iso: { small: '24px', medium: '32px', large: '40px' },
    Selecta: { small: '32px', medium: '40px', large: '48px' },
    Securities: { small: '32px', medium: '40px', large: '48px' },
    ClickDePago: { small: '32px', medium: '40px', large: '48px' },
    Fiducia: { small: '32px', medium: '40px', large: '48px' },
    Fondos: { small: '32px', medium: '40px', large: '48px' },
    SelectaPrivado: { small: '40px', medium: '48px', large: '56px' },
    MacroTagLine: { small: '40px', medium: '48px', large: '56px' },
    Premia: { small: '48px', medium: '64px', large: '80px' },
    BankLimitedVertical: { small: '48px', medium: '64px', large: '80px' },
    Wink: { small: '48px', medium: '64px', large: '80px' },
    MacroVertical: { small: '48px', medium: '64px', large: '80px' }
  }

  const defaultSize = '32px'

  return name && size ? sizeMapping[name][size] : defaultSize
}
