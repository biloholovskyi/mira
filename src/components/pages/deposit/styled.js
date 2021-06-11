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
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding: 32px;
  margin-right: 32px;
  //max-width: 500px;
  .top {
    border-bottom: 1px solid #424242;
    padding-bottom: 32px;
    margin-bottom: 32px;
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      margin-bottom: 7px;
    }
    .summa {
      font-family: 'TTInterfaces-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      color: #FFFFFF;
      margin-bottom: 32px;
    }
  }
  .bottom {
    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      margin-bottom: 7px;
    }
    .summa {
      display: flex;
      align-items: center;
     p {
       font-family: 'TTInterfaces-Bold';
       font-style: normal;
       font-weight: bold;
       font-size: 24px;
       line-height: 32px;
       color: #FFFFFF;
       margin-right: 16px;
     }
      margin-bottom: 32px;
      @media(max-width: 360px) {
        flex-direction: column;
        align-items: flex-start;
        p {
          margin-bottom: 10px;
        }
      }
    }
    .btn_section {
      display: flex;
      align-items: center;
      width: 100%;
      & button:first-child {
        margin-right: 16px;
      }
@media(max-width: 500px) {
  flex-direction: column;
  button {
    width: 100%;
  }
  & button:first-child {
    margin-right: 0px;
    margin-bottom: 10px;
  }
}
    }
  }
  @media(max-width: 1199px) {
   width: 100%;
    margin-right: 0;
    margin-bottom: 32px;
  }
  @media(max-width: 767px) {
   padding: 16px;
    margin-bottom: 16px;
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
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding: 32px;
  max-height: 414px;
  //max-width: 500px;
  overflow: hidden;
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

export {
  DepositWrap,
  Desc,
  Left,
  Label,
  Right,
  DepositTable
}