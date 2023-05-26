import styled from '@emotion/styled';

import Box from '../Components/Box';
import { TextBox } from '../Components/TextBox';

export const CompanyLogo = () => {
  return (
    <Box gap="0.5rem" align="center">
      <Circle>A</Circle>
      <Box>
        <AceCoin as={'span'}>AceCoin</AceCoin>
        <Pay as={'span'}>Pay</Pay>
      </Box>
    </Box>
  );
};

const Circle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: grid;
  place-content: center;
  color: ${({ theme }) => theme.palette.primaryBgColor};
  font-size: 3.2rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.palette.secondaryBgColor};
`;

const AceCoin = styled(TextBox)`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.logoTextColor};
`;
const Pay = styled(TextBox)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.logoTextColor};
`;
