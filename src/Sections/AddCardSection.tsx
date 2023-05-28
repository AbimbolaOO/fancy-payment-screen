import * as Yup from 'yup';

import styled from '@emotion/styled';

import Box from '../Components/Box';
import { Button } from '../Components/Button';
import {
    DateInputField, FormComponent, InputField, InputFieldDescription, InputFieldLabel,
    InputFieldTitle
} from '../Components/FormComponent';

export const AddCardSection = () => {
  const schema = Yup.object().shape({
    cardNo: Yup.string()
      .min(37)
      .max(37)
      .required('Please provide your 16 digit card number'),
    cvv: Yup.string().min(3).max(3).required('Please provide your cvv'),
    month: Yup.number().min(1).max(12).required('Please provide your month'),
    year: Yup.number().min(0).max(99).required('Please provide your year'),
    password: Yup.string().min(8).required('Please provide a your password'),
  });

  type LoginType = Yup.InferType<typeof schema>;

  type InitialValues = {
    cardNo: String;
    cvv: String;
    month: String;
    year: String;
    password: String;
  };

  const initialValues: InitialValues = {
    cardNo: '',
    cvv: '',
    month: '',
    year: '',
    password: '',
  };

  const onSubmit = (values: LoginType) => {
    console.log(JSON.stringify(values));
    alert('😎 Hurraaaaaaay!!');
  };

  return (
    <Box className="add-card-section" direction="column" position="relative">
      <EditButton>Edit</EditButton>
      <FormComponent
        initialValues={initialValues}
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField
          lpi="/static/svg/mastercard.svg"
          rpi="/static/svg/verified-badge.svg"
          type="text"
          id="cardNo"
          label={true}
          placeholder={'2412   -   7512   -   3412   -   3456'}
          direction="column"
        >
          <InputFieldTitle as="h1">Card Number</InputFieldTitle>
          <InputFieldDescription>
            Enter the 16 digit number on the card
          </InputFieldDescription>
        </InputField>

        <InputField
          rpi="/static/svg/dots.svg"
          type="text"
          id="cvv"
          label={true}
          placeholder="CVV"
          textAlign="center"
        >
          <InputFieldLabel>
            <InputFieldTitle as="h1">CVV Number</InputFieldTitle>
            <InputFieldDescription>
              Enter the 3 or 4 digit number on the card
            </InputFieldDescription>
          </InputFieldLabel>
        </InputField>

        <DateInputField id={['month', 'year']} textAlign="center">
          <InputFieldTitle as="h1">expiry date</InputFieldTitle>
          <InputFieldDescription>
            Enter expiry date of the card
          </InputFieldDescription>
        </DateInputField>

        <InputField
          rpi="/static/svg/dots.svg"
          type="password"
          id="password"
          label={true}
          placeholder="Password"
        >
          <InputFieldTitle as="h1">password</InputFieldTitle>
          <InputFieldDescription>Enter dynamic password</InputFieldDescription>
        </InputField>

        <Button type="submit">Pay Now</Button>
      </FormComponent>
    </Box>
  );
};

const EditButton = styled.div`
  height: 1.6rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0rem;
  right: 0rem;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.primaryBtnBgColor};
  cursor: pointer;

  &::before {
    content: url('/static/svg/edit-pencil.svg');
    width: 1rem;
    margin-right: 0.5rem;
  }
`;
