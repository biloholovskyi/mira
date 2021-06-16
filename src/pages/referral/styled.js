import styled from 'styled-components';

const RefWrap = styled.div`
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-SemiBold', sans-serif;
    margin-bottom: 24px;
  }
`

const CopyLink = styled.div`
  background: #212121;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  min-height: 64px;
  margin-bottom: 24px;

  .left {
    padding-left: 8px;

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #9E9E9E;
    }

    .link {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
    }
  }
`

const TabHead = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #424242;
  margin-bottom: 32px;

  & div:last-child {
    margin-right: 0;
  }

  @media (max-width: 575px) {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const TabHeadNav = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #9E9E9E;
  margin-right: 32px;
  border-bottom: 4px solid transparent;
  padding-bottom: 20px;

  &.tabs-active {
    color: #fff;
    border-bottom: 4px solid #36B37E;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  @media (max-width: 575px) {
    min-width: fit-content;
  }
`

const TabBody = styled.div`

`

const InfoTabWrap = styled.div`
  .top {
    display: flex;
    align-items: flex-start;
    margin-bottom: 48px;
    .left {
      margin-right: 32px;
      flex: 50%;
    }
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  background: #212121;
  border-radius: 12px;
  margin-bottom: 32px;

  .left {
    display: flex;
    align-items: center;
    border-right: 1px solid #424242;
    flex: 1;
    margin-right: 32px;

    .img {
      width: 58px;
      height: 58px;
      min-width: 58px;
      max-width: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(54, 179, 126, 0.2);
      border-radius: 12px;
      flex: 50%;
      border-right: 1px solid #424242;
      margin-right: 18px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    .rank {
      & div:first-child {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 4px;
      }

      & div:last-child {
        font-family: 'TTInterfaces-Bold', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    flex: 50%;

    .img {
      width: 58px;
      height: 58px;
      min-width: 58px;
      max-width: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 142, 51, 0.2);
      border-radius: 12px;
      flex: 50%;
      border-right: 1px solid #424242;
      margin-right: 18px;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    .rank {
      & div:first-child {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        margin-bottom: 4px;
      }

      & div:last-child {
        font-family: 'TTInterfaces-Bold', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
      }
    }
  }
`

const GetBonuses = styled.div`
  background: #212121;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 4px;
  }
  .summa {
    font-family: 'TTInterfaces-Bold', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 32px;
  }
`

const YourProgress = styled.div`
  padding: 32px;
  background: #212121;
  border-radius: 12px;
  width: 100%;
  flex: 50%;
`

export {
  RefWrap,
  CopyLink,
  TabHead,
  TabHeadNav,
  TabBody,
  InfoTabWrap,
  Info,
  GetBonuses,
  YourProgress
}