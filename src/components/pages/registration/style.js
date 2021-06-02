import styled from "styled-components";

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  background-color: #121212;
  
  .left {
    flex: 1;
    max-width: 460px;
    position: relative;
    
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
  
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
  
  h3 {
    font-family: 'Bold';
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
    
  }
  
  .btn_section {
    display: flex;
    align-items: center;
    button {
      margin-right: 24px;
    }
    
    p {
      font-size: 15px;
      line-height: 22px;
      color: #9E9E9E;
    }
  }
  
`


export {
  LoginWrap,
  Caption,
  LoginForm
}