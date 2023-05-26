import styled from '@emotion/styled';

import { OrderData } from '../__mock__/OrderData';
import Box from '../Components/Box';
import { CreditCard } from '../Components/CreditCard';
import { OrderSummary } from '../Components/OrderSummary';
import { OrderTotalRegion } from '../Components/OrderTotalRegion';

export const RenderCardDetailsSection = () => {
  return (
    <GridBox className="render-card-section">
      <BlueLineBehindCreditCard />
      <CreditCard />
      <Box direction="column">
        <OrderSummary orderData={OrderData} />
        <OrderTotalRegion />
      </Box>
    </GridBox>
  );
};

const BlueLineBehindCreditCard = styled.div`
  display: flex;
  height: 0.4rem;
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primaryBtnBgColor};
  border-radius: 0.2rem;
  width: 4rem;
  left: calc(50% - 2rem);
  top: 0rem;
  z-index: -1;
`;

const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row: 1/5;
  grid-column: 1/2;
  z-index: 1;
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  position: relative;
`;
