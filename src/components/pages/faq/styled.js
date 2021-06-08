import styled from 'styled-components';

import arrow from '../../../assets/icon/arrow_down.svg';

const FaqWrap = styled.div`
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-Bold';
    margin-bottom: 32px;
  }
`

const TabHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #424242;
  button {
    font-family: 'TTInterfaces-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #9E9E9E;
    background-color: transparent;
    border: none;
    margin-right: 32px;
    border-bottom: 2px solid transparent;
    padding-bottom: 16px;
    margin-bottom: -2px;
    &.btn-active {
      color: #FFFFFF;
      border-bottom: 2px solid #36B37E;
    }
  }
`

const TabBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

const Question = styled.div`
  border-bottom: 1px solid #424242;
  padding: 24px 0;
`;

const FaqTitle = styled.button`
  cursor: pointer;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-family: 'TTInterfaces-SemiBold';
  color: #fff;
  background-color: transparent;
  border: none;
  width: 100%;
  &::after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    min-width: 18px;
    background-image: url(${arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .3s;
    transform: ${props => props.arrow ? 'rotate(180deg)' : 'rotate(0deg)'};
    margin-left: 20px;
  }
  
  &.show {
    &::after {
      transform: rotate(-180deg);
    }
  }
`;

const FaqAnswer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  padding: 24px 0;
  font-family: 'TTInterfaces-Medium';
`;

const TabsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AddQuestion = styled.div`
  background: #212121;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;
    font-family: 'TTInterfaces-Bold';
  }
`

export {
  FaqWrap,
  TabHead,
  TabBody,
  Question,
  FaqTitle,
  FaqAnswer,
  TabsList,
  AddQuestion
}