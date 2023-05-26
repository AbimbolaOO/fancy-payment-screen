import Box from '../Components/Box';
import { CompanyLogo } from '../Components/CompanyLogo';
import { Timer } from '../Components/Timer';

export const HeaderSection = () => {
  return (
    <Box
      className="header-section"
      justify="space-between"
      align="center"
      height="4rem"
      padding="3rem 0"
    >
      <CompanyLogo />
      <Timer />
    </Box>
  );
};
