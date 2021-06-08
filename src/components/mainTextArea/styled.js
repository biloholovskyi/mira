import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 32px;
  width: 100%;
  .labelWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    .label {
      font-family: 'TTInterfaces-Regular';
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
    }
    .forgotPass {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-decoration-line: underline; 
      color: #FFFFFF; 
    }
  }
  
textarea{
    background: #424242;
    border-radius: 12px;
    padding: 12px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    width: 100%;
    border: none;
  resize: none;
  min-height: 96px;
  }
  
`

export { Wrapper }