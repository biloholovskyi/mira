import styled from 'styled-components';

const ModalWrapper = styled.div`
  background: #212121;
  box-shadow: 0px 100px 179px rgba(0, 0, 0, 0.16), 0px 22.3363px 39.982px rgba(0, 0, 0, 0.0953772), 0px 6.6501px 11.9037px rgba(0, 0, 0, 0.0646228);
  border-radius: 12px;
  max-width: 640px;
  width: 100%;
  padding: 32px;
  position: relative;

  .close {
    position: absolute;
    border: none;
    background-color: transparent;
    right: 32px;
    top: 32px;
    width: 24px;
    height: 24px;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    @media(max-width: 575px) {
      top: 16px;
      right: 16px;
    }
  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;
    font-family: 'TTInterfaces-Bold', sans-serif;
    display: flex;
    align-items: center;
  }

  .small_info {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-Medium', sans-serif;
    transform: translateY(-25px);
  }

  .back {
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
   cursor: pointer;
    
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  .info {
    font-family: 'TTInterfaces-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #9E9E9E;
    margin-bottom: 32px;
    max-width: 500px;
  }

  .send_again {
    display: flex;
    align-items: center;
    margin-top: 24px;
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
  
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image {
      background-color: #36B37E;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 32px;
        height: 32px;
        object-fit: contain;
      }
    }
    
    .text {
      font-family: 'TTInterfaces-Bold', sans-serif;
      margin-bottom: 24px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
    }
    
    .info_block {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        border-bottom: 1px solid #424242;
        .left {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #CACACA;
        }
        .right {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #FFFFFF;
        }
      }
    }
  }
  
  .information {
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      padding-bottom: 24px;
      border-bottom: 1px solid #424242;
      margin-bottom: 24px;
      .item {
        flex: 50%;
        align-items: flex-start;
        .small_title {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #FFFFFF;
        }
        .text {
          font-family: 'TTInterfaces-Bold', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #FFFFFF;
        }
      }
    }
    
    .bottom {
      display: flex;
      flex-direction: column;
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: none;
      .small_title {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
      }
      .block {
        display: flex;
        justify-content: space-between;
        .wallet_value {
          font-family: 'TTInterfaces-Bold', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #FFFFFF;
          align-self: center;
          margin-right: 10px;
        }
        button {
          white-space: nowrap;
        }
      }
    }
  }
  
  @media(max-width: 575px) {
    padding: 16px;
  }
  
`
const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 18, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 55;
`

export {
  ModalWrapper,
  ModalOverlay
}