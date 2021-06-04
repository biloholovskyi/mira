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
    font-family: 'TTInterfaces-Bold';
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
  }
  .charts_block {
    display: flex;
    align-items: center;
    .lineChart {
      padding-right: 32px;
      margin-right: 32px;
      border-right: 1px solid #424242;
      width: 50%;
    }
    .pieChart {
      width: 50%;
    }
  }

`

const ChartBtn = styled.button`
  font-family: 'TTInterfaces-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.72);
  padding: 8px 12px;
  background: #424242;
  border-radius: 8px;
  border: none;
  margin-right: 8px;
  margin-bottom: 33px;
  cursor: pointer;
`

const PieItems = styled.li` 
  display: flex;
  align-items: center;
  font-family: 'TTInterfaces-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF!important;
  justify-content: space-between;
  min-width: 240px;
  list-style-type: none;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #424242;
  .left {
    display: flex;
    align-items: center;
    position: relative;
    span {
      width: 8px;
      height: 8px;
      margin-right: 6px;
      border-radius: 50%;
      position: absolute;
      left: 0;
    }
    padding-left: 15px;
  }
  .percent {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  }
  
`

export {
  TopBlock,
  Balance,
  RefLink,
  MyIncome,
  ChartBtn,
  PieItems
}