export const removeAccents = (string: string): string =>
  string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const removeNumbers = (string: string): string =>
  string.replace(/\d/g, '')

export const monogramRegex = (string: string): string => {
  const withoutAccents = removeAccents(string)
  const withoutNumbers = removeNumbers(withoutAccents)
  return withoutNumbers.toUpperCase()
}

export const badgeRegex = (string: string | undefined): string | null => {
  if (!string) return null

  const words = string.trim().split(/\s+/).slice(0, 4)
  const formattedText = words
    .join(' ')
    .replace(/^(.)/, (match) => match.toUpperCase())

  return formattedText.replace(/\.*$/, '')
}
