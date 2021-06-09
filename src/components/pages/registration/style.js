import styled from "styled-components";

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  background-color: #121212;
  position: relative;
  z-index: 50;
  .left {
    flex: 1;
    max-width: 460px;
    position: relative;
    z-index: 55;
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
    
  }
  
  .right {
    flex: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 20px;
    @media(max-width: 600px) {
      padding: 80px 20px 20px;
    }
  }
  
  @media(max-width: 600px) {
    max-height: none;
  }
  
`

const Caption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 32px 32px 0;
  position: absolute;
  left: 0;
  top: 0;
  
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 32px;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
  
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
  
  h3 {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
  
  .double {
    display: flex;
    align-items: center;
    width: 100%;
    
    & div:first-child {
      margin-right: 24px;
    }
    
    @media(max-width: 600px) {
      flex-direction: column;
      div {
        margin-bottom: 24px;
      }
      & div:first-child {
        margin-right: 0;
      }
    }
    
  }
  
  .btn_section {
    display: flex;
    align-items: center;
    margin-top: 48px;
    button {
      margin-right: 24px;
    }
    
    p {
      font-size: 15px;
      line-height: 22px;
      color: #9E9E9E;
    }
    @media(max-width: 600px) {
      margin-top: 0px;
      flex-direction: column;
      p {
        text-align: center;
        font-size: 12px;
        line-height: 18px;
      }
      button {
        width: 100%;
        margin-bottom: 24px;
        margin-top: 32px;
        margin-right: 0;
      }
    }
  }
  
`

const LogoMobile = styled.img`
  width: 109.73px;
  height: 24px;
  position: absolute;
  left: 24px;
  top: 24px;
  display: none;
  cursor: pointer;
  img {
    object-fit: contain;
    width: 109.73px;
    height: 24px;
  }
  @media (max-width: 600px) {
    display: block;
  }
`

const MobileBtn = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    text-decoration: none;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`

export {
  LoginWrap,
  Caption,
  LoginForm,
  LogoMobile,
  MobileBtn
}