import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(76, 141, 86);
  border-radius: 6px;
  padding: 10px;
  margin-right: 5px;
  margin-left: 5px;
  color: white;
  line-height: initial;
  transition: background-color 0.4s ease; 
  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: rgb(76, 141, 86) solid;
    color: rgb(76, 141, 86);
  }
`;

const StyledLgButton = styled(StyledButton)`
  height: 50px;
  width: 100px;
  font-size: 20px;

  @media only screen and (max-width: 540px) {
    padding: 0px;
    height: 40px;
    width: 80px;
    font-size: 16px;
  }
`;

interface PropTypes {
  children: string;
  lg?: boolean;
}

export const Button = ({ children, lg }: PropTypes) =>
  lg ? <StyledLgButton>{children}</StyledLgButton> : null;
