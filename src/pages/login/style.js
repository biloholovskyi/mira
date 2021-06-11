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
  .right {
    flex: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 20px;
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
  @media (max-width: 500px) {
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

  .send_again {
    display: flex;
    align-items: center;
    font-family: 'TTInterfaces-Regular';
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    width: 100%;
    justify-content: flex-end;
    transform: translateY(22px);
    cursor: pointer;
    text-decoration: underline;
  }

  & div:nth-child(2){
    margin-bottom: 10px;
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
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
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