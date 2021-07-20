import styled from 'styled-components';

const PreloaderWrap = styled.div`
  background: rgba(18, 18, 18, 0.8);
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 120px;
    height: 96px;
    object-fit: cover;
    object-position: center;
  }
`

export {
  PreloaderWrap
}