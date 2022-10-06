const Color = {
  background: '#17141B',

  primary: '#d74e5c',
  secondary: '#f8a1aa',

  text: {
    light: '#FFFFFF',
    dark: '#00000099',
  },
};

const theme = Object.freeze({
  color: Color,
});

export type Theme = typeof theme;

export default theme;
