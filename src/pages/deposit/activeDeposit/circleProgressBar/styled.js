import styled from 'styled-components'

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .time {
    display: flex;
    align-items: center;
    font-family: 'TTInterfaces-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
  }
`

export {
  TimeWrapper
}