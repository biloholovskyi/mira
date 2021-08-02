import styled from 'styled-components';

const AdminHeaderWrap = styled.div`
  background: #212121;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 0;
  top: 0;
  padding: 26px 40px;
  z-index: 100;
  .logo {
    width: 146.31px;
    height: 32px;
    img {
      width: 146.31px;
      height: 32px;
      object-fit: contain;
    }
  }
`

const NavList = styled.nav`
  a {
    font-family: 'TTInterfaces-Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 36px;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 30px;
    &.active {
      border-bottom: 2px solid #36B37E;
    }
  }
  & a:last-child {
    margin-right: 0;
  }
`

const UserBlock = styled.button`
  font-family: 'TTInterfaces-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-left: 8px;
  }
`

export {
  AdminHeaderWrap,
  NavList,
  UserBlock
}