import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  hover?: React.CSSProperties;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: rgb(76, 141, 86);
  border-radius: 6px;
  padding: 10px;
  margin-right: 5px;
  margin-left: 5px;
  color: white;
  line-height: initial;
  transition: background-color 0.4s ease;
  border: rgb(76, 141, 86) solid;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background-color: transparent;
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
    ${({ hover }) => `${hover}`}
  }
`;

interface PropTypes {
  children: string;
  lg?: boolean;
  style?: React.CSSProperties;
  hover?: React.CSSProperties;
}

export const Button = ({ children, lg, style, hover }: PropTypes) =>
  lg ? (
    // tslint:disable-next-line: no-unsafe-any
    <StyledLgButton hover={hover} style={style}>
      {children}
    </StyledLgButton>
  ) : (
    <StyledButton hover={hover} style={style}>
      {children}
    </StyledButton>
  );
