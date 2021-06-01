import styled from "styled-components";

const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.colorBg ? '#fff' : '#36B37E'};
  background-color: ${props => props.colorBg ? '#36B37E' : 'transparent'};
  padding: 11px 24px;
  border: 2px solid #36B37E;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
`

export {Button}