import styled from 'styled-components';

export const GlobalStyles = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
  padding: 10px;
  width: 70%;
  margin: auto;
  border-radius: 10px;

  @media only screen and (max-width: 540px) {
    width: 100% !important;
  }
`;
