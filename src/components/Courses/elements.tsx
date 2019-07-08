import styled from 'styled-components';

export const CourseWrapper = styled.div`
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  background-color: rgba(228, 224, 224, 0.212);
  box-shadow: 0px 3px 3px 2px #e2e0e0;
`;

export const CourseHeader = styled.h2`
  color: rgb(76, 141, 86);
  font-weight: bold;
  font-size: 2.5rem;
`;

export const CourseDescription = styled.div`
  margin: auto;
  width: 70%;
  font-size: 1.2rem;
  font-weight: 100;
`;

export const CourseBenefits = styled.ul`
  margin: auto;
  padding: 18px;
  text-align: center;
  border-width: 1px;
  border: solid;
  border-radius: 10px;
  border-color: rgb(76, 141, 86);
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 1.2rem;
  width: 70%;

  li {
    font-weight: 100;
    text-align: left;
  }

  @media only screen and (max-width: 540px) {
    padding: 8px;
    padding-left: 15px;
    width: 100%;
    padding-left: inherit;
  }
`;

export const CourseBenefitSub = styled.ul`
  padding-left: 30px;
  font-weight: 400;
  color: rgb(93, 109, 66);
  @media only screen and (max-width: 540px) {
    padding-left: inherit;
  }
`;
