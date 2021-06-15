import styled from "styled-components";
import { Link } from "react-scroll";
import user from './media/icon/userAvatar.svg';

const TabHead = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #424242;
  margin-bottom: 32px;
  & div:last-child {
    margin-right: 0;
  }
  @media(max-width: 575px) {
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
  @media(max-width: 575px) {
    min-width: fit-content;
  }
`

const TabLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #9E9E9E;
  margin-right: 32px;
  border-bottom: 4px solid transparent;
  padding-bottom: 20px;
cursor: pointer;
  
  &.active {
    color: #fff;
    border-bottom: 4px solid #36B37E;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  @media(max-width: 575px) {
    min-width: fit-content;
  }
`

const BigTitle = styled.div`
  font-family: 'TTInterfaces-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #FFFFFF;
  margin-bottom: 24px;
  @media(max-width: 575px) {
    font-size: 24px;
    line-height: 32px;
  }
`

const TabBody = styled.div`

`

const PersonalDateWrap = styled.div`
  .small_title {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 24px;
  }
`

const PersonalDateForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #212121;
  border-radius: 12px;
  padding: 32px;
  align-items: flex-end;
  margin-bottom: 32px;

  .small_title {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 24px;
    width: 100%;
  }
  @media(max-width: 575px) {
    padding: 16px;
    margin-bottom: 8px;
    button {
      width: 100%;
    }
  }
`

const MyRefs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #212121;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;

  .checkBlock {
    display: flex;
    align-items: center;

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
      margin-right: 24px;

      input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
          background-color: #36B37E;
        }

        &:focus + .slider {
          box-shadow: 0 0 1px #36B37E;
        }

        &:checked + .slider:before {
          transform: translateX(13px);
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;

        &.round {
          border-radius: 34px;
        }

        &.round:before {
          border-radius: 50%;
        }
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }

    .text_block {
      display: flex;
      flex-direction: column;
      & p:first-child {
        font-family: 'TTInterfaces-Regular';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
      }
      & p:last-child {
        font-family: 'TTInterfaces-Regular';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.72);
      }
    }
  }

  @media(max-width: 575px) {
    padding: 16px;
    margin-bottom: 8px;
  }

`

const RefsBlock = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border: 1px solid #424242;
  border-radius: 12px;

  .photo {
    width: 40px;
    height: 40px;
    object-position: center;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 16px;
  }

  .name {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
`

const ChangePhoto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #212121;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  position: relative;

  .name {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .hidden-input {
    display: none;
  }

  .dlt_btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    object-position: center;
    position: absolute;
    border-radius: 50%;
    background-color: #121212;
    border: none;
    left: 85px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media(max-width: 575px) {
    padding: 16px;
    margin-bottom: 8px;
  }
`

const Photo = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;

  .preview {
    min-width: 72px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: transparent;
    background-image: url(${user});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 16px;
  }

  img {
    width: 80px;
    min-width: 80px;
    height: 80px;
    display: block;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-right: 24px;
  }

  .download {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #36B37E;
    padding: 12px 24px;
    border: 2px solid #36B37E;
    border-radius: 12px;
    @media(max-width: 325px) {
      font-size: 16px;
    }
  }
`

const Security = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #212121;
  border-radius: 12px;
  padding: 32px;
  
  .checkBlock {
    display: flex;
    align-items: center;

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
      margin-right: 24px;
      min-width: 40px;
      input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
          background-color: #36B37E;
        }

        &:focus + .slider {
          box-shadow: 0 0 1px #36B37E;
        }

        &:checked + .slider:before {
          transform: translateX(13px);
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;

        &.round {
          border-radius: 34px;
        }

        &.round:before {
          border-radius: 50%;
        }
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }

    .text_block {
      display: flex;
      flex-direction: column;
      & p:first-child {
        font-family: 'TTInterfaces-Regular';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
      }
      & p:last-child {
        font-family: 'TTInterfaces-Regular';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.72);
      }
    }
  }
  @media(max-width: 575px) {
    padding: 16px;
    margin-bottom: 8px;
  }
`

export {
  TabHead,
  TabHeadNav,
  BigTitle,
  TabBody,
  PersonalDateWrap,
  PersonalDateForm,
  MyRefs,
  RefsBlock,
  ChangePhoto,
  Photo,
  Security,
  TabLink
}
