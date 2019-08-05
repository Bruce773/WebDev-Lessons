import styled from 'styled-components';

export const ContinueWatching = styled.p`
  color: grey;
  text-decoration: underline;
  text-align: left;
  margin: 20px;
  font-size: 20px;
`;

export const CardWrapper = styled.div`
  background-color: rgba(228, 224, 224, 0.212);
  box-shadow: 0px 3px 3px 2px #e2e0e0;
  padding: 15px;
  margin: 20px;
  border-radius: 8px;
  min-height: 300px;
`;

export const CardTitle = styled.h3`
  color: rgb(76, 141, 86);
  font-size: 2rem;
  display: inline-block;
  font-weight: 500;
  padding: 6px;
  margin: auto;
  margin-bottom: 5px;

  @media only screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.3rem;
  display: inline-block;
  padding-top: 6px;
  padding-bottom: 10px;
  margin: auto;
  font-weight: 100;

  @media only screen and (max-width: 540px) {
    font-size: 1.1rem;
  }
`;

export const CardCourse = styled.div`
  font-size: 25px;
  color: grey;
  color: rgb(76, 141, 86);
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;

  @media only screen and (max-width: 540px) {
    padding-left: 5px;
  }
`;

export const CardDuration = styled.div`
  font-size: 25px;
  color: grey;
  text-align: right;
  padding-right: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;

  @media only screen and (max-width: 540px) {
    padding-right: 5px;
  }
`;
