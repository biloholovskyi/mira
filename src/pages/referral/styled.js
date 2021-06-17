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

  @media (max-width: 520px) {
    flex-direction: column;
    .left {
      width: 100%;
      margin-bottom: 24px;
    }

    button {
      width: 100%;
      margin-bottom: 16px;
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
      @media (max-width: 1199px) {
        margin-right: 16px;
      }
      @media (max-width: 1015px) {
        flex: 100%;
        width: 100%;
        margin-bottom: 16px;
      }
    }

    @media (max-width: 1015px) {
      flex-direction: column;
    }
    @media (max-width: 520px) {
    margin-bottom: 32px;
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
        @media (max-width: 1199px) {
          font-size: 14px;
          line-height: 18px;
        }
      }

      & div:last-child {
        font-family: 'TTInterfaces-Bold', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
        @media (max-width: 1199px) {
          font-size: 22px;
          line-height: 28px;
        }
      }
    }

    @media (max-width: 1015px) {
      flex: 50% !important;
      margin-bottom: 0 !important;
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
        @media (max-width: 1199px) {
          font-size: 14px;
          line-height: 18px;
        }
      }

      & div:last-child {
        font-family: 'TTInterfaces-Bold', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
        @media (max-width: 1199px) {
          font-size: 22px;
          line-height: 28px;
        }
      }
    }
  }

  @media (max-width: 1199px) {
    padding: 16px;
  }
  @media (max-width: 1015px) {
    margin-bottom: 16px;
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

  @media (max-width: 1199px) {
    padding: 16px;
  }
`

const YourProgress = styled.div`
  padding: 32px;
  background: #212121;
  border-radius: 12px;
  width: 100%;
  flex: 50%;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-Bold', sans-serif;
    margin-bottom: 24px;
  }

  & div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1199px) {
    padding: 16px;
  }
`

const SmallBarWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 28px;

  .caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 100%;

    .label {
      font-family: 'TTInterfaces-SemiBold', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
    }

    .value {
      display: flex;
      align-items: center;

      & > * {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.72);
      }

      .border {
        margin: 0 6px;
      }
    }
  }

  .progress {
    width: 100%;
    background: #424242;
    border-radius: 1000px;
    height: 8px;
    position: relative;

    .progress_done {
      width: 0%;
      background-color: #36B37E;
      height: 8px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 1000px;
      opacity: 0;
      transition: width 1s;
    }
  }
`

const RefLevel = styled.div`
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 24px;
    font-family: 'TTInterfaces-SemiBold', sans-serif;
  }

  & div:last-child {
    margin-bottom: 0;
  }
`

const ProgressBarWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .count {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    font-family: 'TTInterfaces-SemiBold', sans-serif;
    margin-right: 18px;
    @media (max-width: 520px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  .progress {
    background: #212121;
    border-radius: 12px;
    width: 100%;
    height: 40px;
    position: relative;

    &_done {
      background: rgba(54, 179, 126, 0.2);
      border-radius: 12px;
      width: 50%;
      position: absolute;
      left: 0;

      height: 40px;
    }

    .sum {
      position: absolute;
      left: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #FFFFFF;
      font-family: 'TTInterfaces-SemiBold', sans-serif;
      top: 50%;
      transform: translateY(-50%);
    }

    .users {
      display: flex;
      align-items: center;
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);

      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
      }

      .user {
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
      }
    }
  }
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
  YourProgress,
  SmallBarWrap,
  RefLevel,
  ProgressBarWrap
}