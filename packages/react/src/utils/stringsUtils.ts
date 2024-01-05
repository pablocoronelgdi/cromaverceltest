export const removeAccents = (string: string) => string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
export const removeNumbers = (string: string) => string.replace(/\d/g, '');
export const monogramRegex = (string: string) => {
  const withoutAccents = removeAccents(string);
  const withoutNumbers = removeNumbers(withoutAccents);
  return withoutNumbers.toUpperCase();
};

