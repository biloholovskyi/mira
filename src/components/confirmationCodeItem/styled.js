import styled from 'styled-components';

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
  
  &.valid {
    background: linear-gradient(0deg, #291615, #291615), #121212!important;
    border: 1px solid #FF3F35!important;
  }
  
`

const Border = styled.div`
    background: #FFFFFF;
    border-radius: 1000px;
    width: 24px;
    height: 1px;
    margin: 0 16px 0 4px;
`

const CodeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  & div:nth-child(4){
    margin-left: 30px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: -29px;
      width: 20px;
      height: 3px;
      background-color: #424242;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export {
  Border,
  CodeItem,
  CodeBlock
}