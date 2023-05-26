import { Interpolation } from '@emotion/react';
import styled from '@emotion/styled';

const _TextBox: React.FC<ITextBox> = ({
  as: Element = 'p',
  children,
  ...props
}) => {
  return <Element {...props}>{children}</Element>;
};

export const TextBox = styled(_TextBox)`
  display: flex;
  color: ${({ theme }) => theme.palette.primaryTextColor};
  font-weight: 500;
`;

// export default TextBox;

interface ITextBox {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  css?: Interpolation<any>;
}
