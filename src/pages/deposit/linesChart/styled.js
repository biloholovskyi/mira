import styled from "styled-components";

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
  margin-bottom: 16px;
  cursor: pointer;
  &.active { 
    background: rgba(54, 179, 126, 0.2);
    color: #36B37E;
  }
  @media (max-width: 1330px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    padding: 6px 10px;
    margin-right: 4px;
  }
  @media (max-width: 360px) {
    margin-bottom: 4px;
  }
  @media (max-width: 320px) {
    margin-bottom: 12px;
    padding: 4px;
  }
`

export {
  ChartBtn
}