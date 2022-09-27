const Color = {
  background: '#16213E',

  text: {
    light: '#FFFFFF',
  },
};

const theme = Object.freeze({
  color: Color,
});

export type Theme = typeof theme;

export default theme;
