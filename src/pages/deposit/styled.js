import styled from 'styled-components';

const DepositWrap = styled.div`
  .title {
    margin-bottom: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-SemiBold';
    @media(max-width: 500px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
  .info_block {
    display: flex;
    align-items: flex-start;
    margin-bottom: 48px;
    @media(max-width: 1199px) {
      flex-direction: column;
    }
  }
`

const Desc = styled.div`
  margin-bottom: 48px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #9E9E9E;
    font-family: 'TTInterfaces-Regular';
    margin-bottom: 16px;
    max-height: ${props => props.show ? 'fit-content' : '44px'};
    overflow: hidden;
  }
  button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-Medium';
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
      margin-left: 8px;
      transform: rotate(${props => props.show ? '180deg' : '0'});
      transition: .3s;
    }
  }
`

const Left = styled.div`
  flex: 50%;
  padding: 32px 0px 32px 0;
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    flex: 2;
    min-height: 231px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom {
    display: flex;
    align-items: center;
    flex: 1;
    .item {
      flex: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 7px;
      }
      .text {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
      }
    }
    & .item:first-child {
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid rgba(255, 255, 255, 0.16);
    }
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
    font-family: 'TTInterfaces-Bold';
  }
`

const Label = styled.div`
  background: #36C136;
  border-radius: 100px;
  width: fit-content;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #FFFFFF;
  font-family: 'TTInterfaces-Medium';
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    margin-right: 8px;
  }
`

const Right = styled.div`
  flex: 50%;
  padding: 32px 0 32px 32px;
  border-left: 1px solid #424242;
  margin-left: 32px;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
    font-family: 'TTInterfaces-Bold';
  }
  @media(max-width: 1199px) {
    width: 100%;
  }
  @media(max-width: 767px) {
    padding: 16px;
  }
`

const DepositTable = styled.div`
  .small_title {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 16px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        th {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #9E9E9E;
          text-align: left;
          padding-bottom: 14px;
          border-bottom: 2px solid #424242;
          padding-right: 15px;
        }
      }

      tr th:last-child {
        text-align: right;
      }
    }

    tbody {
      tr {
        td {
          min-height: 96px;
          border-bottom: 1px solid #424242;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #FFFFFF;
          text-align: left;
          padding: 25px 15px 25px 0;
          vertical-align: top;
          .info {
            display: flex;
            align-items: center;

            .indicator {
              width: 8px;
              height: 8px;
              background-color: #FF3842;
              border-radius: 50%;
              margin-right: 16px;
            }

            .name {
              font-family: 'TTInterfaces-Bold';
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 24px;
              color: #FFFFFF;
            }
          }
        }
        & td:last-child {
          max-width: 300px;
          text-align: right;
        }
      }
    }
  }
`

const InfoBlock = styled.div`
  background: #212121;
  border-radius: 12px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`

const TabHead = styled.div`
  display: flex;
  align-items: center;
  background: #424242;
  border-radius: 12px;
  padding: 4px;
  min-height: 65px;
  margin-bottom: 24px;
  & div:last-child {
    margin-right: 0;
  }
  @media(max-width: 575px) {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const TabHeadNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  flex: 1;
  cursor: pointer;
  padding: 6px 0;
  position: relative;
  z-index: 10;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    position: relative;
    z-index: 8;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF; 
    position: relative;
    z-index: 8;
  }
  &.tabs-active {
    background: #36B37E;
    border-radius: 8px;
  }
`

const TabWrap = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 48px;
    border-bottom: 1px solid #424242;
    .name {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #CACACA;
    }
    .value {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      background-color: transparent;
      border: none;
      text-align: right;
    }
  }
  
  button {
    margin-top: 32px; 
  }
`

export {
  DepositWrap,
  Desc,
  Left,
  Label,
  Right,
  DepositTable,
  InfoBlock,
  TabHead,
  TabHeadNav,
  TabWrap
}