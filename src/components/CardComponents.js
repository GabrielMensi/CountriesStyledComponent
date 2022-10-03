import styled from "styled-components";

export const CardTitle = styled.h3`
  font-size: 18px;
  color: ${({theme}) => theme.text};
  font-weight: 600;
  margin: 10px 20px;
  letter-spacing: 0.5px;
`

export const CardInfo = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  margin: 8px 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
`