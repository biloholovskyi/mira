import styled from 'styled-components';

const HeaderWrap = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #212121;
  position: absolute;
  left: 0;
  top: 0;
  .left {
    display: flex;
    align-items: center;
    a {
      width: 82.3px;
      height: 18px;
      display: block;
      img {
        width: 82.3px;
        height: 18px;
        object-fit: contain;
      }
    }
  }
  .notification_btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    filter: brightness(2);
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
`

const BurgerBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  margin-right: 16px;
  border: none;
  border-right: 1px solid #424242;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

export {
  HeaderWrap,
  BurgerBtn
}