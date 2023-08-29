interface Sizes {
  [key: string]: number;
}

const sizes: Sizes = {
  mobile: 414,
  tablet: 767,
  desktop: 1023,
};

const getMedia = (
  s: string,
  condition: string,
  r = 0
): string => {
  const breakpointsArray: [string, number][] = Object.entries(sizes);
  const [result] = breakpointsArray.reduce(
    (acc: string[], [name, size]) => {
      if (s === name) return [...acc, `@media (${condition}: ${size + r}px)`];
      return acc;
    },
    []
  );

  return result || `@media(${condition}: ${Number(s) + r}px)`;
};

const lowerThan = (
  s: string,
  condition = 'max-width'
): string => {
  return getMedia(s, condition, 0);
};

const higherThan = (
  s: string,
  condition = 'min-width'
): string => {
  return getMedia(s, condition, 1);
};

const between = (
  size1: number,
  size2: number,
  condition = 'min-width',
  condition2 = 'max-width'
): string => {
  return `@media (${condition}:${size1}px) and (${condition2}:${size2}px)`;
};

const breakpoints = {
  lowerThan,
  higherThan,
  between,
};

export default breakpoints;
