import styled from 'styled-components';

const SuccessWrap = styled.div`
  position: fixed;
  bottom: 32px;
  left: 32px;
  background: #212121;
  box-shadow: 0px 36px 147px rgba(0, 0, 0, 0.39), 0px 8.04107px 32.8344px rgba(0, 0, 0, 0.232482), 0px 2.39404px 9.77565px rgba(0, 0, 0, 0.157518);
  border-radius: 12px;
  display: flex;
  align-self: center;
  padding: 16px;
  z-index: 500;
  
  @media(max-width: 500px) {
    bottom: unset;
    left: 10px;
    top: 10px;
  }
  
  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FF3F35;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  
  p {
    font-family: 'TTInterfaces-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    align-self: center;
  }
`

export {
  SuccessWrap
}