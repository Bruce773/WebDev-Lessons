import styled from 'styled-components';

// All h1s, h2s, and h3s need:
// font-weight: 200;
// font-family: 'Source Sans Pro', sans-serif;

const Header = styled.h1`
  font-weight: 200;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const MainHeader = styled(Header)`
  padding-top: 45px;
  margin-top: 20px;
  font-size: 40px;
  margin-bottom: 0px;
`;

export const MainSubHeader = styled(Header)`
  margin-top: 0px;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const WelcomeHeader = styled(Header)`
  font-weight: 200;
  font-size: 1.5rem;
  @media only screen and (max-width: 540px) {
    font-size: 25px !important;
  }
`;

export const WelcomeHeaderSmSize = styled(Header)`
  font-size: 1.5rem;
  @media only screen and (max-width: 540px) {
    font-size: 20px !important;
  }
`;

export const HeadersContainer = styled.div`
  display: block;
  background-color: rgb(130, 180, 143);
  color: rgb(255, 249, 249);
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 7px 7px lightgrey;
  text-align: center;
  width: fit-content;

  @media only screen and (max-width: 540px) {
    width: 70%;
  }
`;

export const StyledHeadingThree = styled.h3`
  font-size: 26px;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  font-weight: 400;
  @media only screen and (max-width: 540px) {
    width: 90%;
    font-size: 22px;
    margin-bottom: 8px;
  }
`;
