import styled from "styled-components";

export const SwitchContainer = styled.div`
  background-color: ${({theme}) => theme.secundary};
  transition:  all ease-in; 
  margin-right: 5px;
  cursor: pointer;
`;

export const SwitchWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction:  row-reverse;
`

export const SwitchBGC = styled.div`
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.bgcolor};
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${({position}) => position ? '55px' : '5px'};
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  background-color: ${({theme}) => theme.switch};
  transition: 0.5s all ease-in;
`