import styled from '@emotion/styled';

import Box from './Box';
import { TextBox } from './TextBox';

export const OrderTotalRegion = () => {
  return (
    <OrderTotalRegionWrapper
      justify="space-between"
      align="center"
      margin="auto 0"
    >
      <Box direction="column">
        <Label>You have to Pay</Label>
        <PriceTag
          align="baseline"
          //  border="2px solid red"
        >
          <PriceTagWholeNumber as="span">549</PriceTagWholeNumber>
          <PriceTagDecimalNumber as="span">.99</PriceTagDecimalNumber>{' '}
          <PriceTagCurrency as="span">USD</PriceTagCurrency>
        </PriceTag>
      </Box>
      <PaymentIcon alt="Pay now" src="/static/img/docket.png" />
    </OrderTotalRegionWrapper>
  );
};

const OrderTotalRegionWrapper = styled(Box)``;

const PriceTagWholeNumber = styled(TextBox)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

const PriceTagDecimalNumber = styled(TextBox)`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

const PriceTagCurrency = styled(TextBox)`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const PriceTag = styled(Box)``;

const Label = styled(TextBox)`
  font-size: 0.8rem;
  font-weight: bold;
`;

const PaymentIcon = styled.img`
  height: 1.5rem;
  display: grid;
`;
