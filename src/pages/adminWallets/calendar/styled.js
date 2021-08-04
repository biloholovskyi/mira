import styled from 'styled-components';

const CalendarWrap = styled.div`
  padding: 0 20px 0 0;
  background: #424242;
  box-shadow: 0px 100px 179px rgba(0, 0, 0, 0.16), 0px 22.3363px 39.982px rgba(0, 0, 0, 0.0953772), 0px 6.6501px 11.9037px rgba(0, 0, 0, 0.0646228);
  border-radius: 12px;
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 20;
  width: 100%;
  max-width: 720px;
  min-width: 720px;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px 0;
    border-right: 1px solid  rgba(255, 255, 255, 0.1);
    margin-right: 4px;
    max-width: 200px;
    min-width: 200px;
    button {
      background-color: transparent;
      border: none;
      min-height: 40px;
      width: 100%;
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      text-align: left;
      cursor: pointer;
      padding-left: 20px;
      &.active {
        background: rgba(54, 179, 126, 0.1);
        color: #36B37E;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
`

export  {
  CalendarWrap
}