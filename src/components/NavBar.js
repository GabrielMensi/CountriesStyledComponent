import styled from "styled-components";

export const NavBar = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 60px;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.1);
  -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.1);
  -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.1);
  z-index: 200;

  .switch-container{
    display: flex;
    align-items: center;
  }
  img{
    width: 30px;
    margin-top: 5px;
    margin-right: 5px;
  }
  .invert{
    filter: invert();
    width: 25px;
  }
`;
