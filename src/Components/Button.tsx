import styled from '@emotion/styled';

export const Button = styled.button<IButton>`
  width: ${({ width }) => (width ? width : '100%')};
  line-height: 2rem;
  font-weight: bold;
  padding: ${({ padding }) => (padding ? padding : '10px 40px')};
  text-transform: capitalize;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.palette.primaryBtnBgColor};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.palette.btnTextColor};
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1px solid black')};

  & > * {
    color: ${({ textColor, theme }) =>
      textColor ? textColor : theme.palette.btnTextColor};
  }

  &:hover {
    color: ${({ textColor, theme }) =>
      textColor ? textColor : theme.palette.btnTextColor};
    background-color: ${({ bgHoverColor, theme }) =>
      bgHoverColor ? bgHoverColor : theme.palette.primaryBtnBgColor};
  }

  &:hover > * {
    color: ${({ textHoverColor, theme }) =>
      textHoverColor ? textHoverColor : theme.palette.secondaryBtnBgColor};
  }
`;

interface IButton {
  width?: string;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  border?: string;
  cursor?: string;
  padding?: string;
  fontSize?: string;
}
