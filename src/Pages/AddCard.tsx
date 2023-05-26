import styled from '@emotion/styled';

import Box from '../Components/Box';
import Page from '../Components/Page';
import { AddCardSection } from '../Sections/AddCardSection';
import { HeaderSection } from '../Sections/HeaderSection';
import { RenderCardDetailsSection } from '../Sections/RenderCardDetailsSection';

const AddCard: React.FC = () => {
  return (
    <Page title="Add Card | Payments">
      <ContentContainer>
        <HeaderSection />
        <AddCardSection />
        <RenderCardDetailsBackGround />
        <RenderCardDetailsSection />
      </ContentContainer>
    </Page>
  );
};

export default AddCard;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr 1fr 1fr;
  column-gap: 3rem;
  width: 62vw;
  margin: auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.palette.primaryBgColor};

  & > .header-section,
  & > .add-card-section {
    grid-column: 1/2;
  }

  & > .add-card-section {
    grid-row: 2/5;
  }

  & > .render-card-section {
    grid-column: 2/3;
    grid-row: 1/5;
  }

  @media screen and (max-width: 1200px) {
    width: 80vw;
  }

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const RenderCardDetailsBackGround = styled(Box)`
  border-radius: 0.8rem;
  background-color: #e7eaee;
  grid-column: 2/3;
  grid-row: 2/5;
`;
