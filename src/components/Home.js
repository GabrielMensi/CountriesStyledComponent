import styled from "styled-components";


export const Home = styled.div`
  background-color: ${({theme}) => theme.bgcolor};
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .inputs-container{
    width: 90vw;
    min-width: 300px;
    margin-top: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .search-input{
      background-color: ${({theme}) => theme.secundary};
      border: none;
      min-width: 250px;
      height: 40px;
      color: ${({theme}) => theme.text};
      padding: 0;
      padding-left: 10px;
      margin-top: 10px;
      box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
      -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
      -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
    }
    .search-input::placeholder{
      color: ${({theme}) => theme.text};
    }
    .filter-input{
      background-color: ${({theme}) => theme.secundary};
      border: none;
      min-width: 200px;
      height: 40px;
      color: ${({theme}) => theme.text};
      margin-top: 10px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
      box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
      -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
      -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
      position: relative;
      box-sizing: border-box;
      user-select: none;
    }
  }
  @media screen and (max-width:522px){
    .inputs-container{
      justify-content: center;
      .filter-input{
        margin-right: 50px;
      }
    }
  }
  .pagination{
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      color: ${({theme}) => theme.text};
      user-select: none;
      margin-left: 5px;
      margin-right: 5px;
    }
    button {
      border: none;
      background-color: transparent;
      color: ${({theme}) => theme.text};
      cursor: pointer;
    }
  }
`;