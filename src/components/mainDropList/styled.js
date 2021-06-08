import styled from "styled-components";

import arrow from '../../assets/icon/arrow_down.svg';

const Wrapper = styled.div`
  width: ${props => props.width ? props.width + 'px' : '100%'};
  background-color: #424242;
  border-radius: 8px;
  height: 46px;
  position: relative;
  margin-bottom: 23px;
  
  &.wrapper-textarea {
    min-height: 224px;
  }

  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.ValiddationBg ? 'red' : '#697077'};
    opacity: 0.8;
    transition: .3s;
    z-index: 1;

    &.active {
      top: 15px;
      font-size: 12px;
      line-height: 18px;
      color: #4F7FFF;
      opacity: 0.8;
    }
  }
  
  .input {
    background: #424242;
    border-radius: 12px;
    padding: 12px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    width: 100%;
    border: none;
  }
  
  .select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    cursor: pointer;

    option { 
      visibility: hidden; 
      display: none;
    }
    
  }
  
  textarea {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
    resize: none;
    min-height: 224px;
  }
  
  .select-arrow {
    position: absolute;
    background-image: url(${arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat; 
    width: 18px;
    height: 18px;
    top: 50%;
    margin-top: -12px;
    margin-right: 0 !important;
    right: 12px;
    transform: rotate( ${props => props.fakeBg ? '180deg' : '0deg'};);
  }
`

const Label = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  margin-bottom: 12px;
  width: 100%;
`

const DropLIstItems = styled.ul`
  width: 100%;
  box-shadow: 0px 8px 38px -4px rgb(33 39 42 / 10%);
  background: #424242;
  position: absolute;
  z-index: 100;
  border-radius: 8px;
  top: 0px;
  left: 0;
  padding: 8px 16px;
  overflow: auto;
  max-height: 160px;
  z-index: 14;
  .listItem {
    list-style-type: none;
    background: #424242;
    padding: 12px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
  
`

export {Wrapper, DropLIstItems, Label}