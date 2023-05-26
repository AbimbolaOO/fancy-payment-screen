import React from 'react';

import styled from '@emotion/styled';

import { IOrderData } from '../__mock__/OrderData';
import Box from './Box';
import { TextBox } from './TextBox';

export const OrderSummary: React.FC<IOrderSummary> = ({ orderData }) => {
  return (
    <OrderSumaryWrapper direction="column" justify="flex-end" gap="0.5rem">
      {orderData.map((data: any) => (
        <LabelValueRow key={data.label}>
          <Label> {data.label}</Label>
          <Value> {data.value}</Value>
        </LabelValueRow>
      ))}
    </OrderSumaryWrapper>
  );
};

const OrderSumaryWrapper = styled(Box)`
  border-bottom: 2px dashed #d7d5d5;
  padding: 2.5rem 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    background-color: #ffffff;
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    bottom: -1rem;
  }

  &::after {
    right: -2.4rem;
  }

  &::before {
    left: -2.4rem;
  }
`;

const LabelValueRow = styled(Box)`
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const Label = styled(TextBox)`
  font-weight: bold;
`;

const Value = styled(TextBox)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

// Interface
interface IOrderSummary {
  orderData: IOrderData[];
}
