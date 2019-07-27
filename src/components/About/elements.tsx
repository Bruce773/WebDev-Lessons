import styled from 'styled-components';

export const AboutBioContainer = styled.div`
  padding-right: 0px;
  padding-left: 0px;
`;

export const InnerBioContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 5px;
  padding: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  background-color: rgba(228, 224, 224, 0.212);
  box-shadow: 0px 3px 3px 2px #e2e0e0;
`;

export const HeadshotContainer = styled.div`
  display: block;
  margin: auto;
  max-width: 10em;
  height: auto;

  img {
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }
`;

export const BioContainer = styled.p`
  font-size: 120%;
  display: block;
  font-weight: 100;
  text-align: left;
  padding-left: 10px;

  @media only screen and (max-width: 840px) {
    text-align: center;
    padding-left: 0px;
    padding-top: 10px;
    font-size: 15px;
  }
`;

export const GreenAccent = styled.div`
  color: rgb(76, 141, 86);
  margin: 20px 5px 20px 0px;
  font-weight: 600;
  display: inline;
`;
