import styled from 'styled-components'

const NotificationWrap = styled.div`
  .title {
    font-family: 'TTInterfaces-SemiBold', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
`

const EmptyPageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 128px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-family: 'TTInterfaces-SemiBold', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #FFFFFF;
    margin-bottom: 160px;
    width: 100%;
    flex: 1;
  }
  .info {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 180px;
      height: 180px;
      object-position: center;
      object-fit: cover;
      margin-bottom: 39px;
    }
    .small_title {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.72);
    }
  }
`

const NotificationItemWrap = styled.div`
  background: #212121;
  border-radius: 12px;
  padding: 15px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 16px;
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
   svg {
     width: 24px;
     height: 24px;
     margin-right: 16px;
     object-fit: contain;
     min-width: 24px;
   }
    .title {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      margin-bottom: 0;
    }
    .date {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.72);
    }
  }

  @media(max-width: 575px) {
    padding: 16px;
    min-height: 100px;
  }
`

const NotificationPageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SmallModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(18, 18, 18, 0.8);
  z-index: 55;
`

const ModalInfo = styled.div`
  width: 100%;
  max-width: 640px;
  background: #212121;
  box-shadow: 0px 100px 179px rgba(0, 0, 0, 0.16), 0px 22.3363px 39.982px rgba(0, 0, 0, 0.0953772), 0px 6.6501px 11.9037px rgba(0, 0, 0, 0.0646228);
  border-radius: 12px;
  padding-top: 24px;
  position: relative;
  .big_title {
    padding: 0 24px 24px;
    margin-bottom: 24px;
    width: 100%;
    font-family: 'TTInterfaces-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    border-bottom: 1px solid #4D4D4D;
    @media(max-width: 500px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .close {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 24px;
  }
  .text_block {
    padding: 0 24px 24px;
    .small_title {
      font-family: 'TTInterfaces-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
      margin-bottom: 16px;
      @media(max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
    .text {
      font-family: 'TTInterfaces-Medium', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      @media(max-width: 575px) {
        font-size: 14px;
        line-height: 20px;
      }
    }
    @media(max-width: 500px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .btn_section {
    display: flex;
    align-items: center;
    border-top: 1px solid #4D4D4D;
    button  {
      flex: 50%;
      min-height: 73px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'TTInterfaces-Bold';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    button:first-child {
      border-right: 1px solid #4D4D4D;
    }
    button:last-child {
      color: #FF3F35;
    }
    @media(max-width: 575px) {
      flex-direction: column;
      button {
        flex: 100%;
        width: 100%;
        min-height: 48px;
      }
      button:first-child {
        border-bottom: 1px solid #4D4D4D;
        border-right: none;
      }
    }
  }
  .big_modal--content {
    padding: 0 24px;
    @media(max-width: 500px) {
      padding-left: 16px;
      padding-right: 16px;
    }
    .image {
      width: 100%;
      height: 100%;
      max-height: 333px;
      object-fit: cover;
      margin-bottom: 24px;
      border-radius: 4px;
    }
    .mark_list,
    .number_list { 
      .small_title {
        font-family: 'TTInterfaces-Bold', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 16px;
        
      }
      ul,ol {
        margin-bottom: 24px;
        padding: 0 24px;
        li {
          font-family: 'TTInterfaces-Medium', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          color: #FFFFFF;
          margin-bottom: 12px;
          @media(max-width: 575px) {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
      ul {
        position: relative;
        li {
          position: relative;
        }
        li:after {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          position: absolute;
          left: -18px;
          top: 9px;
          background-color: #36B37E;
          @media(max-width: 575px) {
            left: -17px;
            top: 7px;
          }
        }
      }
    }
    .video {
      width: 100%;
      margin-bottom: 24px;
      border-radius: 4px;
    }
  }
  .content {
    max-height: 595px;
    overflow: auto;
    padding-bottom: 24px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
@media(max-width: 720px) {
  margin: 0 16px;
}
`

export {
  NotificationWrap,
  EmptyPageWrap,
  NotificationItemWrap,
  NotificationPageWrap,
  SmallModalWrap,
  ModalInfo
}