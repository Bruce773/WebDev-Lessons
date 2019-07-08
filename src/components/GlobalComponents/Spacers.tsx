import styled from 'styled-components';

export const XsSpacer = styled.div<{ spacing?: string }>`
  padding-top: ${({ spacing }) => (!spacing ? '25px' : `${spacing}`)};
`;

export const SmSpacer = styled.div`
  padding-top: 70px;
`;
