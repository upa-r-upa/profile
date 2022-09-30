import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonColor?: 'dark' | 'light';
}

const ButtonBase = styled.button<ButtonProps>`
  font-weight: bold;
  padding: 1rem 1rem;
  border-radius: 3rem;
  transition: 0.2s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 0px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${({ buttonColor }) =>
    buttonColor === 'light'
      ? css`
          color: white;
        `
      : css`
          color: ${(props) => props.theme.color.text.dark};
        `};
`;

export const FillButton = styled(ButtonBase)<ButtonProps>``;
