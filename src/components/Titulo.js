import styled from "styled-components";

export const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  margin: 0 8px;
  font-size: ${({theme}) => theme.titulo};
  font-weight: 400;
  cursor: pointer;
`