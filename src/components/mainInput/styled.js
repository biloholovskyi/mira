import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 32px;
  width: 100%;
  position: relative;
  
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
  
  .input {
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
    padding-left: ${props => props.icon ? '50px' : props.iconText ? '60px' : null};
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    
    &::placeholder {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #9E9E9E;

    }
  }
  
  .icon {
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
  }

  .iconText {
    position: absolute;
    left: 15px;
    bottom: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.72);
    font-family: 'TTInterfaces-Regular', sans-serif;
  }
  
`

export { Wrapper }