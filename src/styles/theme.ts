/* Defining the color palette. */
const color = {
  background: '#17141B',

  primary: '#d74e5c',
  secondary: '#ffee00',

  text: {
    light: '#FFFFFF',
    dark: '#bebebe',
    deepDark: '#00000099',
  },
};

/* Defining the font family. */
const fontFamily = {
  normal: 'Noto Sans KR',
  special: 'Silkscreen',
};

/**
 * It returns a media query string based on the minWidth and maxWidth parameters
 * @param {number} minWidth - The minimum width of the screen in pixels.
 * @param {number} [maxWidth] - number - The maximum width of the screen.
 * @returns A string that is a media query.
 */
const getMediaQuery = (minWidth: number, maxWidth?: number): string => {
  return `@media (min-width: ${minWidth}rem)${maxWidth ? ` and (max-width: ${maxWidth}rem)` : ''}`;
};

/* Defining the breakpoints(rem) for the media queries. */
const breakPoint = {
  mobile: 51, // max
  tablet: 76.7, // max

  'min-width': 32,
  'max-width': 95,
};

const mediaQuery = Object.freeze({
  mobile: getMediaQuery(0, breakPoint.mobile),
  tablet: getMediaQuery(breakPoint.mobile, breakPoint.tablet),
  PC: getMediaQuery(breakPoint.tablet),

  mobileAndTablet: getMediaQuery(0, breakPoint.tablet),
  tabletAndPC: getMediaQuery(breakPoint.mobile),
});

/* Defining the font size.(rem) */
const fontSize = {
  h1: '3.8rem',
  h2: '2.8rem',
  h3: '2.3rem',
  h4: '1.8rem',

  title: '1.7rem',
  content: '1.4rem',
  sub: '1.2rem',
};

export interface Theme {
  color: typeof color;
  fontFamily: typeof fontFamily;
  mediaQuery: typeof mediaQuery;
  fontSize: typeof fontSize;
}

const theme = {
  color,
  fontFamily,
  mediaQuery,
  fontSize,
};

export default theme;
