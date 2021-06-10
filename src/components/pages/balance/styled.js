import styled from "styled-components";

const Top = styled.div`
  margin-bottom: 48px;
  display: flex;
  @media(max-width: 1000px) {
    flex-direction: column;
  }
`

const BalanceBlock = styled.div`
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding: 32px;
  margin-right: 32px;

  .btn_section {
    display: flex;
    align-items: center;
    background-color: #424242;
    border-radius: 12px;
    padding: 4px;
    margin-bottom: 24px;

    button:first-child {
      margin-right: 4px;
    }

    button {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.72);
      width: 50%;
      background-color: transparent;
      border: none;
      min-height: 40px;
      cursor: pointer;

      &.btn-active {
        background: #36B37E;
        border-radius: 8px;
      }
    }
  }

  .small_title {
    font-family: 'TTInterfaces-Regular';
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 4px;
  }

  .info {
    font-style: normal;
    font-family: 'TTInterfaces-Bold';
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 40px;

    span {
      font-style: normal;
      font-family: 'TTInterfaces-Bold';
      font-size: 12px;
      line-height: 18px;
      color: #C1C1C1;
    }
  }
  
  @media(max-width: 1160px) {
    padding: 16px;
  }
  @media(max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`

const TabBody = styled.form`

`

const InfoBlock = styled.div`
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding-bottom: 32px;

  img {
    width: 100%;
    min-height: 280px;
    object-position: center;
    object-fit: cover;
    margin-bottom: 32px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .text_block {
    padding: 32px 32px 0;
    display: flex;
    flex-direction: column;

    .name {
      font-family: 'TTInterfaces-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
      margin-bottom: 16px;
    }

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #9E9E9E;
      margin-bottom: 16px;
    }

    a {
      font-family: 'TTInterfaces-Bold';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-decoration-line: underline;
      color: #FFFFFF;
    }
    @media(max-width: 1160px) {
      padding: 16px 16px 0;
      .text {
        font-size: 14px;
      }
    }
  }
  
`

const TableWrap = styled.div`
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
          text-align: right;
          padding-bottom: 14px;
          border-bottom: 2px solid #424242;
          padding-right: 15px;
        }
      }

      & tr th:first-child,
      & tr th:last-child {
        text-align: left;
      }
      @media (max-width: 1170px) {
        display: none;
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
          text-align: right;
          padding: 25px 15px 25px 0;
          vertical-align: top;
          .info {
            display: flex;
            align-items: center;
            position: relative;
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
              @media(max-width: 325px) {
                font-size: 16px;
              }
            }
            
            .mobile_summ {
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
              text-transform: uppercase;
              color: #FFFFFF;
              display: none;
              position: absolute;
              left: 24px;
              bottom: -25px;
              @media(max-width: 1170px) {
                display: block;
              }
            }
          }
          @media(max-width: 1340px) {
          font-size: 14px;
          line-height: 18px;
          }
          @media(max-width: 1170px) {
            min-height: 82px;
          }
        }
        & td:last-child {
          max-width: 300px;
          text-align: left;
        }
        @media (max-width: 1170px) {
          & {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            border-bottom: 1px solid #424242;
            td {
              display: none;
            }
          }
          & td:first-child {
            display: block;
            border: none;
          }
        }
      }
    }
  }
`

export {
  Top,
  BalanceBlock,
  TabBody,
  InfoBlock,
  TableWrap
}