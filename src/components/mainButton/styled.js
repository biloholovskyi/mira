import styled from "styled-components";

const Button = styled.button`
  font-family: ${props => props.simple ? 'Regular' : 'SemiBold'};
  font-style: normal;
  font-size: ${props => props.simple ? '16px' : '18px'};
  line-height: ${props => props.simple ? '22px' : '24px'};
  color: ${props => props.colorBg || props.simple ? '#fff' : '#36B37E'};
  background-color: ${props => props.colorBg ? '#36B37E' : 'transparent'};
  padding: ${props => props.simple ? '0' : '11px 24px'};
  border: ${props => props.simple ? 'none' : '2px solid #36B37E'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  text-decoration: ${props => props.simple ? 'underline' : 'none'};
`

export {Button}