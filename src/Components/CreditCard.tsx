import styled from '@emotion/styled';

import Box from './Box';
import { Dots } from './Dots';
import { TextBox } from './TextBox';

export function CreditCard() {
  return (
    <CreditCardWrapper direction="column" justify="space-between">
      <Box justify="space-between" align="center">
        <SimCardIcon alt="sim" src="/static/img/chip.png" />
        <WifiCardIcon alt="wifi" src="/static/img/wifi.png" />
      </Box>
      <Box direction="column" gap="2rem">
        <Box direction="column" gap="0.5rem">
          <CardName>Abimbola Olayemi</CardName>
          <Box gap="1rem">
            <Dots size={4} />
            <CardLastFourCharacters as="span">3456</CardLastFourCharacters>{' '}
          </Box>
        </Box>
        <Box direction="row" justify="space-between">
          <TextBox>09/22</TextBox>
          <MasterCardIcon alt="master card" src="/static/svg/mastercard.svg" />
        </Box>
      </Box>
    </CreditCardWrapper>
  );
}

const CardLastFourCharacters = styled(TextBox)`
  /* font-size: 0.8rem; */
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

const CreditCardWrapper = styled(Box)`
  grid-row: 1/3;
  border-radius: 1.2rem;
  padding: 1.4rem;
  margin-top: 0.2rem;
  box-shadow: 0 0.3rem 0.8rem -0.2rem #a9b0b1;

  /* Glass Effect */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.4)
  );
  backdrop-filter: blur(10px);
`;

const CardName = styled(TextBox)`
  font-size: 0.8rem;
  font-weight: bold;
`;

const SimCardIcon = styled.img`
  height: 2.5rem;
  display: grid;
`;

const WifiCardIcon = styled.img`
  height: 1.6rem;
  display: grid;
`;

const MasterCardIcon = styled.img`
  height: 1.5rem;
  display: grid;
`;
