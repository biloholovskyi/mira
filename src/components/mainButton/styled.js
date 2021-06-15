import styled from "styled-components";

const Button = styled.button`
  font-family: ${props => props.simple ? 'TTInterfaces-Regular' : 'TTInterfaces-SemiBold'};
  font-style: normal;
  font-size: ${props => props.simple ? '16px' : '18px'};
  line-height: ${props => props.simple ? '22px' : '24px'};
  color: ${props => props.colorBg || props.simple || props.colorBgRed ? '#fff' : '#36B37E'};
  background-color: ${props => props.colorBg ? '#36B37E' : props.colorBgRed ? '#FF3F35' : 'transparent'};
  padding: ${props => props.simple ? '0' : '11px 24px'};
  border: ${props => props.simple || props.colorBgRed ? 'none' : '2px solid #36B37E'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}` : 'auto'};
  text-decoration: ${props => props.simple ? 'underline' : 'none'};
`

export {Button}