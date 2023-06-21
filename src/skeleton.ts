/**
 * Makes the input string written in the CamelCase
 * @param str - input string
 * @returns string wirtten in the CamelCase
 */
function camelCase(str: string): string {
  const words = str.split(" ");
  let camelCased = "";

  for (let word of words) {
    camelCased += word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase();
  }

  return camelCased;
}

export default camelCase;
