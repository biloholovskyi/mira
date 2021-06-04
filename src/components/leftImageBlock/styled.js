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

  a {
    display: block;
    position: absolute;
    top: 32px;
    left: 39px;
    max-width: 146px;
    height: 32px;

    .logo {
      object-position: center;
      object-fit: contain;
    }
  }
`

export {
  Left
}