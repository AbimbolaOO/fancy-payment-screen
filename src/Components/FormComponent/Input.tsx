import React from 'react';

import styled from '@emotion/styled';

import { TextBox } from '../TextBox';

export const Input = styled.input<IInput>`
  border: 2px solid ${({ theme }) => theme.palette.primaryBorderColor};
  border-radius: 8px;
  padding: ${({ lpi }) => (lpi ? '0.8rem 3.5rem' : '0.8rem 1.5rem')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.secondaryBgColor};
    background-color: ${({ theme }) => theme.palette.inputFieldFocusColor};
  }
  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: #dad8d8;
    opacity: 1;
  }
`;

export const InputFieldLabel: React.FC<IInputFieldLabel> = ({
  id,
  children,
}) => {
  const allowedTypes = [InputFieldTitle, InputFieldDescription];
  return (
    <label htmlFor={id}>
      {React.Children.map(children, (child) => {
        if (allowedTypes.includes(child.type)) {
          const newChild = React.cloneElement(child, { ...child.props });
          return newChild;
        }
        return child;
      })}
    </label>
  );
};

export const InputFieldTitle = styled(TextBox)`
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
  font-weight: bold;
  font-size: 0.8rem;
`;
export const InputFieldDescription = styled(TextBox)`
  font-size: 0.7rem;
  font-weight: bold;
  line-height: 1.5rem;
`;

export const DateInput = styled(Input)`
  padding: 0.8rem 1rem;
  width: 7rem;
`;

export const FormError = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.palette.errorTextColor};
`;

export const LeftPlaceHolderCardIcon = styled.img`
  height: 1.5rem;
  display: grid;
  margin-left: 0.8rem;
  margin-top: 0.8rem;
`;

export const RightPlaceHolderCardIcon = styled.img`
  height: 1.5rem;
  display: grid;
  margin-right: 1rem;
  margin-left: auto;
  margin-top: 0.8rem;
`;

export const FormBox = styled.div<IFormBox>`
  display: grid;
  grid-template-columns: ${({ direction }) =>
    direction === 'column' ? '1fr' : '1fr 1fr'};
`;

// Interface
interface IInput {
  textAlign?: string;
  lpi?: string;
}

interface IInputFieldLabel {
  // children: React.ReactElement[];
  children: any;
  id?: string;
}

interface IFormBox {
  direction?: string;
}
