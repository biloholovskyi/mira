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
  .preloader {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 120px;
    height: 96px;
    .images { 
      width: 100%;
      max-width: 120px; 
      height: 96px;
      object-fit: cover;
      object-position: center;
    }
    .top {
      position: absolute;
      z-index: 5;
      animation-name: top;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
    .bottom {
      position: absolute;
    
      animation-name: bottom;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
  }
  
  @keyframes bottom {
    0% {
      bottom : -70px
    }
    20% {
      bottom: 0
    }
    50% {
      bottom: 0px;
    }
  }

  @keyframes top {
    0% {
      top : -70px
    }
    30% {
      top : -70px
    }
    50% {
      top : 0px
    }
    100% {
      top : 0px
    }
  }
  
`

export {
  PreloaderWrap
}