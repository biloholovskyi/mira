import styled from "styled-components";

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  background-color: #121212;
  
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
  justify-content: flex-start;
  padding: 55px 0 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  max-width: 660px;
  margin-left: -3px;

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 32px;
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
      margin-right: 8px;
    }
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
    margin-bottom: 16px;
  }

  .btn_section {
    display: flex;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      margin-left: 24px;
      font-family: 'TTInterfaces-Regular';
      font-size: 16px;
      line-height: 22px;
      color: #9E9E9E;

      a {
        margin-left: 5px;
        font-family: 'TTInterfaces-Regular';
        font-style: normal;
        font-size: 16px;
        line-height: 22px;
        color: #fff;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

`

const SmallDesc = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #9E9E9E;
  margin-bottom: 32px;
  font-family: 'TTInterfaces-Regular';
`

const CodeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`

const CodeItem = styled.input`
  width: 48px;
  height: 48px;
  background: #424242;
  border-radius: 12px;
  margin-right: 8px;
  font-family: 'TTInterfaces-SemiBold';
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  border: none;
  padding-left: 20px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
`

const Border = styled.div`
    background: #FFFFFF;
    border-radius: 1000px;
    width: 24px;
    height: 1px;
    margin: 0 16px 0 4px;
`

export {
  LoginWrap,
  Caption,
  LoginForm,
  SmallDesc,
  CodeBlock,
  CodeItem,
  Border
}