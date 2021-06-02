import styled from "styled-components";

const TopBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  & div:first-child {
    margin-right: 32px;
  }
  div {
    .small_title {
      font-family: 'Regular';
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      margin-bottom: 4px;
    }
    .info {
      font-style: normal;
      font-family: 'Bold';
      font-size: 24px;
      line-height: 32px;
      color: #FFFFFF;
      margin-bottom: 40px;
      span {
        font-style: normal;
        font-family: 'Bold';
        font-size: 12px;
        line-height: 18px;
        color: #C1C1C1;
      }
    }
  }
`

const Balance = styled.div`
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding: 32px;
  .btn_section {
    display: flex;
    align-items: center;
    button:first-child {
      margin-right: 16px;
    }
  }
`

const RefLink = styled.div`
  background: #212121;
  border-radius: 12px;
  flex: 50%;
  min-height: 202px;
  padding: 32px;
`

const MyIncome = styled.div`
  background: #212121;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 32px;
  min-height: 414px;
  padding: 32px;
  .small_title {
    font-style: normal;
    font-family: 'Bold';
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
  }
`

export {
  TopBlock,
  Balance,
  RefLink,
  MyIncome
}