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
  return (
    <FormBox direction="row">
      <InputFieldLabel id={id[0]}>{children}</InputFieldLabel>
      <InnerFormBox>
        <DateInput
          type="text"
          id={id[0]}
          placeholder="DD"
          onChange={onChange}
          textAlign={textAlign}
        ></DateInput>
        {touch && error && <FormError>{error as string}</FormError>}

        <Slash> / </Slash>

        <DateInput
          type="text"
          id={id[1]}
          placeholder="MM"
          onChange={onChange}
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
