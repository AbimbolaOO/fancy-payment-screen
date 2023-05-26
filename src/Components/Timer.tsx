import styled from '@emotion/styled';

import Box from '../Components/Box';
import { TextBox } from '../Components/TextBox';

export const Timer = () => {
  return (
    <Box gap="0.2rem">
      <TimeCard>0</TimeCard>
      <TimeCard>1</TimeCard>
      <Colon>:</Colon>
      <TimeCard>1</TimeCard>
      <TimeCard>9</TimeCard>
    </Box>
  );
};

const TimeCard = styled(TextBox)`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.timerTextColor};
  background-color: ${({ theme }) => theme.palette.timerBgColor};
  padding: 0.3rem 0.4rem;
  border-radius: 0.25rem;
`;

const Colon = styled(TimeCard)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.timerBgColor};
  padding: 0.2rem 0rem;
`;
