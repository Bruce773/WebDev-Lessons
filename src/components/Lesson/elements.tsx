import styled from 'styled-components';

export const LessonWrapper = styled.div`
  background-color: rgba(228, 224, 224, 0.212);
  box-shadow: 0px 3px 3px 2px #e2e0e0;
  padding: 15px;
  margin: 20px;
  border-radius: 8px;
  min-height: 300px;
`;

export const LessonTitle = styled.div`
  color: rgb(76, 141, 86);
  font-size: 20px;
  display: inline-block;
  text-align: right;
  font-weight: bolder;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    padding: 6px;
    margin: auto;
    margin-bottom: 5px;
    text-align: center;

    @media only screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
`;
