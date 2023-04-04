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
  normal: 'NotoSans',
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

interface FontSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;

  title: string;
  content: string;
  sub: string;
}

/* Defining the font size for Mobile.(rem) */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mobileFontSize: FontSize = {
  h1: '2rem',
  h2: '1.6rem',
  h3: '1.3rem',
  h4: '1rem',

  title: '1.7rem',
  content: '1.4rem',
  sub: '1.2rem',
};

/* Defining the font size for PC.(rem) */
const PCFontSize: FontSize = {
  h1: '3.8rem',
  h2: '2.8rem',
  h3: '2.3rem',
  h4: '1.8rem',

  title: '1.7rem',
  content: '1.4rem',
  sub: '1.2rem',
};

/**
 * It returns a FontSize object based on the window's innerWidth
 * @returns an Font size object.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFontSizeSet = (clientWidth: number): FontSize => {
  const remWidth = clientWidth / 10;

  if (remWidth > breakPoint.mobile) {
    return PCFontSize;
  } else {
    return mobileFontSize;
  }
};

export interface Theme {
  color: typeof color;
  fontFamily: typeof fontFamily;
  mediaQuery: typeof mediaQuery;
  fontSize: FontSize;
}

/**
 * It returns an object with the theme
 * @param {number} clientWidth - number
 * @returns Returns the appropriate theme object according to the size of the user's screen
 */
const getTheme = (clientWidth: number): Theme => {
  return {
    color,
    fontFamily,
    mediaQuery,
    fontSize: getFontSizeSet(clientWidth),
  };
};

export default getTheme;
