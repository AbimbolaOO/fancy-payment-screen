import styled from '@emotion/styled';

import Box from './Box';

export const Dots: React.FC<IDots> = ({ size }) => {
  return (
    <Box align="center" gap="0.2rem">
      {Array.from({ length: size }, (_, index) => (
        <Dot key={index} />
      ))}
    </Box>
  );
};

const Dot = styled(Box)`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.secondaryTextColor};
`;

interface IDots {
  size: number;
}
