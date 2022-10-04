import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 350px;
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
  @keyframes placeHolderShimmer {
    0% {
      background-position: -800px 0
    }
    100% {
      background-position: 800px 0
    }
  }
  .loadImg{
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 160px;
    position: relative;
  }
  
  .loadTitle{
    width: 200px;
    height: 25px;
    background-color: #dbdbdb;
    margin: 20px;
    border-radius: 15px;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }
  .loadInfo {
    width: 180px;
    height: 15px;
    background-color: #dbdbdb;
    margin-left: 20px;
    margin-bottom: 15px;
    border-radius: 15px;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }
`