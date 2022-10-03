import styled from "styled-components";

export const DropDown = styled.div`
  width: 200px;
  background-color: ${({theme}) => theme.secundary};
  display: flex;
  flex-direction: column;
  box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  position: absolute;
  top: 45px;
  left: 0;
  button{
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.text};
    text-align: start;
    padding-left: 10px;
  }
  .active{
    background-color: ${({theme}) => theme.bgcolor};
  }
  button:hover{
    background-color: ${({theme}) => theme.bgcolor};
  }
`