import styled from "styled-components";

const SideBarWrap = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 280px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  z-index: 50;
  padding: 20px 16px;
  
  .logo {
    width: 109.73px;
    height: 24px;
    margin-bottom: 32px;
    img {
      width: 109.73px;
      height: 24px;
      object-fit: contain;
      object-position: center;
    }
  }
  
  @media(max-width: 1199px) {
    max-width: 250px;
    min-width: 250px;
  }
  
    @media(max-width: 900px) {
      display: ${props => props.mobileMenu ? 'flex' : 'none'};
      padding: 16px;
    }
`
const UserBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  
  .info {
    display: flex;
    flex-direction: column;
  }
`
const Photo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 16px;
`

const Currency = styled.div`
  font-family: 'TTInterfaces-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #9E9E9E;
`

const Name = styled.div`
  font-family: 'TTInterfaces-SemiBold';
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
    margin-bottom: 8px;
    font-family: 'TTInterfaces-Regular';
  }
  
  a {
    font-family: 'TTInterfaces-Regular';
    font-size: 12px;
    line-height: 18px;
    color: #9E9E9E;
    text-decoration: none;
  }
  
`

const NavigationWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 22px;
    color: #9E9E9E;
    font-family: 'TTInterfaces-SemiBold', sans-serif;
    text-decoration: none;
    svg {
      width: 24px;
      height: 24px;
      object-fit: contain;
      margin-right: 16px;
    }
    &.active {
      color: #36B37E;
      background: rgba(54, 179, 126, 0.2);
      border-radius: 8px;
      svg {
        path {
          fill: #36B37E;
        }
      }
    }
  }
  
  .border {
    width: 100%;
    height: 1px;
    margin: 8px 0;
    background-color: #424242; 
  }
`

const CloseMenuBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const MobileBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color:  rgba(18, 18, 18, 0.72);
  z-index: 49;
`

const ExitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 22px;
  color: #9E9E9E;
  font-family: 'TTInterfaces-SemiBold', sans-serif;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 16px;
  }
`

export {
  SideBarWrap,
  UserBlock,
  Photo,
  Currency,
  Name,
  Information,
  NavigationWrap,
  CloseMenuBtn,
  MobileBackground,
  ExitBtn
}