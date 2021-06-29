import styled from "styled-components";

const Left = styled.div`

  flex: 1;
  max-width: 460px;
  position: relative;
  z-index: 55;
  background-color: #121212;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  
    .logo {
      object-position: center;
      object-fit: contain;
      display: block;
      position: absolute;
      top: 32px;
      left: 39px;
      max-width: 146px;
      height: 32px;
    }
  
  @media (max-width: 920px) {
    display: none;
  }
`

export {
  Left
}