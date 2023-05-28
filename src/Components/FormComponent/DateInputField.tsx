import { FormikErrors } from 'formik';

import styled from '@emotion/styled';

import Box from '../Box';
import { InputFieldLabel } from './';
import { DateInput, FormBox, FormError } from './Input';

export const DateInputField: React.FC<IDateInputField> = ({
  id,
  onChange,
  error,
  touch,
  children,
  textAlign,
}) => {
  const inputFieldOnchangeValidator = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= 2) {
      onChange!(e);
    } else {
      e.target.value = value.slice(0, -1);
    }
  };

  return (
    <FormBox direction="row">
      <InputFieldLabel id={id[0]}>{children}</InputFieldLabel>
      <InnerFormBox>
        <DateInput
          maxLength={2}
          type="text"
          id={id[0]}
          placeholder="mm"
          onChange={inputFieldOnchangeValidator}
          textAlign={textAlign}
        ></DateInput>
        {touch && error && <FormError>{error as string}</FormError>}

        <Slash> / </Slash>

        <DateInput
          maxLength={2}
          type="text"
          id={id[1]}
          placeholder="yy"
          onChange={inputFieldOnchangeValidator}
          textAlign={textAlign}
        ></DateInput>
        {touch && error && <FormError>{error as string}</FormError>}
      </InnerFormBox>
    </FormBox>
  );
};

export const InnerFormBox = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr auto 1fr;
`;

const Slash = styled(Box)`
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

// Interface
interface IDateInputField {
  id: string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touch?: boolean;
  textAlign?: string;
  children: any;
}
