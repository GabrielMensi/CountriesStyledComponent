import styled from "styled-components";

export const DetailContainer = styled.div`
  background-color: ${({theme}) => theme.bgcolor};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const BackButton = styled.div`
  background-color: ${({theme}) => theme.secundary};
  width: 100px;
  height: 30px;
  margin-top: 100px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
`
export const BackButtonText = styled.p`
  color: ${({theme}) => theme.text};
  font-size: 14px;
`

export const InfoContainer = styled.div`
  width: 90vw;
  display: flex;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.bgcolor};
  @media only screen and (min-width: 1024px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .border-countries{
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
  }
  
  .seccion{
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`


export const CountryFlag = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  img{
    min-width: 250px;
    object-fit: contain;
    @media only screen and (min-width: 1024px) {
      margin-right: 50px;
      width: 30vw;
    }
  }
`

export const BorderCountries = styled.div`
  background-color: ${({theme}) => theme.secundary};
  color: ${({theme}) => theme.text};
  font-size: 12px;
  width: 80px;
  height: 30px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -webkit-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  -moz-box-shadow: 4px 10px 21px -1px rgba(0,0,0,0.2);
  `