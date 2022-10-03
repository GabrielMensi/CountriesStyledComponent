import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 360px;
  background-color: ${({theme}) => theme.secundary};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.4);
  -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.4);
  -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.4);
  margin-bottom: 20px;

  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`