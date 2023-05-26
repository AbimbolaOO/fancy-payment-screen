import styled from '@emotion/styled';

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default AppLayout;

interface IAppLayout {
  children: React.ReactNode;
}

const BackgroundContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-image: url('/static/img/bg.jpg');
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.palette.tertiaryBgColor};
  background-size: 150%;
  background-position: right 98% top 53%;

  @media screen and (max-width: 1000px) {
    background-repeat: contain;
  }

  @media screen and (max-width: 900px) {
    background-size: 200%;
    background-position: right 98% top 40%;
  }
`;
