import { FormikErrors } from 'formik';
import React from 'react';

import styled from '@emotion/styled';

import {
  FormBox,
  FormError,
  Input,
  InputFieldLabel,
  LeftPlaceHolderCardIcon,
  RightPlaceHolderCardIcon,
} from './Input';

export const InputField: React.FC<IInputField> = ({
  type,
  id,
  placeholder,
  onChange,
  error,
  touch,
  children,
  rpi, //right placeholder image
  lpi, //left placeholder image
  direction,
  textAlign,
}) => {
  return (
    <FormBox direction={direction}>
      <InputFieldLabel id={id}>{children}</InputFieldLabel>

      <InputContainer>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          textAlign={textAlign}
          lpi={lpi}
        ></Input>
        {lpi ? <LeftPlaceHolderCardIcon alt="master card" src={lpi} /> : ''}
        {rpi ? <RightPlaceHolderCardIcon alt="verify card" src={rpi} /> : ''}
      </InputContainer>
      {touch && error && <FormError>{error as string}</FormError>}
    </FormBox>
  );
};

const InputContainer = styled.div`
  display: grid;
  height: fit-content;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
  &:hover {
    cursor: pointer;
  }
`;

// === interfaces
interface IInputField {
  type: string;
  id: string;
  label?: boolean;
  placeholder?: string;
  touch?: boolean;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  // children: React.ReactElement;
  children: any;
  rpi?: string;
  lpi?: string;
  direction?: string;
  textAlign?: string;
}
