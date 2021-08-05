import styled from 'styled-components';

import ok from './media/ok.svg';

const AdminUserWrap = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: calc(100vh - 84px);
  position: relative;
  .title_section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    .title {
      font-family: 'TTInterfaces-Bold', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      color: #FFFFFF;
    }
  }
  .bottom_info {
    display: flex;
    align-items: center;
    .count_users {
      display: flex;
      align-items: center;
      & > * {
        font-family: 'TTInterfaces-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #9E9E9E;
        margin-right: 5px;
      }
    }
  }
`

const TableWrap = styled.table`

  width: 100%;
  border-collapse: collapse;
  position: relative;
  margin-bottom: 32px;

  thead {
    tr {
      th {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #9E9E9E;
        text-align: right;
        padding-bottom: 14px;
        border-bottom: 2px solid #424242;
        //padding-right: 15px;
        width: 20%;
      }
    }

    & tr th:first-child {
      text-align: left;
      width: 40%;
    }
  }

  tbody {
    tr {
      width: 100%;
      border-bottom: 1px solid #424242;
      cursor: pointer;
      transition: 0.5s;
      td {
        padding: 16px 0;
        font-family: 'TTInterfaces-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        text-align: right;
        color: #FFFFFF;
        input[type=checkbox] {
          appearance: none;
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 1px solid #424242;
          box-sizing: border-box;
          border-radius: 2px;
          background-clip: content-box;
          margin-right: 16px;
          position: relative;
          &:checked {
            background-color: #36B37E;
            border-radius: 2px;
            background-image: url(${ok});
            background-size: 12px;
            background-repeat: no-repeat;
           background-position: center;
          }
          &:focus {
            outline: none!important;
          }
        }
      }
      & td:first-child{
        text-align: left;
        display: flex;
        align-items: center;
      }
    }

    & tr:hover {
      background: #212121;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
      border-radius: 12px;
      border-bottom: none;
      transition: 0.5s;
      transform: scale(1.04);

      & td {
        padding: 20px 0;
        background: #212121;
      }

      & td:first-child {
        padding-left: 20px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }

      & td:last-child {
        padding-right: 20px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }

`

const PaginationWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 24px;
  li.item_number {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .page_link {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #9E9E9E;
      opacity: 0.64;
      background-color: transparent;
      width: 40px;
      height: 40px;
      border: 1px solid #9E9E9E;
      cursor: pointer;
      &.active {
        background: rgba(54, 179, 126, 0.1);
        border: 1px solid #36B37E;
        color: rgb(54, 179, 126);
      }
    }
  }

  & .item_number:first-child {
    .page_link {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  & .item_number:last-child {
    .page_link {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  .left {
    display: flex;
    align-items: center;
    .text {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #D0D0D4;
      margin-right: 24px;
    }
    margin-right: 24px;
  }
  .right {
    display: flex;
    align-items: center;
    .dropList {
      background: #424242;
      border-radius: 12px;
      width: 100%;
      max-width: 305px;
      min-width: 305px;
      padding: 13px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: none;
      min-height: 47px;
      .text {
        font-family: 'TTInterfaces-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }
      .arrow_down {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .calendar_icon {
        margin-right: 12px;
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .calendar_arrow {
        display: flex;
        align-items: center;
        .prev,
        .next {
          background-color: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 13px 16px;
          border-left: 1px solid  rgba(255, 255, 255, 0.1);
          cursor: pointer;
          img {
            transform: rotate(90deg);
            width: 18px;
            height: 18px;
            object-fit: contain;
          }
        }
        .next {
          img {
            transform: rotate(-90deg);
            width: 18px;
            height: 18px;
            object-fit: contain;
          }
        }
      }
    }
    .calendar_dropList {
      padding-bottom: 0;
      padding-top: 0;
      padding-right: 0;
      position: relative;
    }
    & .dropList:first-child {
      margin-right: 24px;
    }
    .dropList_container {
      margin-right: 0;
      .calendar_dropList {
        margin-right: 0;
      }
    }
  }
`

const TabHead = styled.div`
  background: #424242;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: 305px;
`

const TabHeadNav = styled.div`
  padding: 9px 0;
  width: 50%;
  font-family: 'TTInterfaces-Regular', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
  &.tabs-active {
    background: #36B37E;
    border-radius: 8px;
  }
`

const CashoutInfoModal = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
  padding: 16px 24px;
  background: #212121;
  box-shadow: 0px 100px 179px rgba(0, 0, 0, 0.16), 0px 22.3363px 39.982px rgba(0, 0, 0, 0.0953772), 0px 6.6501px 11.9037px rgba(0, 0, 0, 0.0646228);
  border-radius: 12px;
  display: flex;
  align-items: center;
  max-height: 72px;
  .text {
    font-family: 'TTInterfaces-Regular', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 32px;
  }
 .cancel {
   background-color: transparent;
   border: none;
   margin-left: 16px;
   font-family: 'TTInterfaces-Regular', sans-serif;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   line-height: 22px;
   color: #9E9E9E;
   cursor: pointer;
 }
  .select_all {
    background-color: transparent;
    border: none;
    margin-right: 24px;
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    position: relative;
    .hover {
      display: none;
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #FFFFFF;
      padding: 5px 10px;
      background: rgba(0, 0, 0, 0.72);
      border-radius: 2px;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        background: rgba(0, 0, 0, 0.72);
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
      }
    }
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
    &:hover {
      transition: .3s;
      background-color: rgba(255, 255, 255, 0.08);
    }
    &:hover .hover{
      display: block;
    }
  }
`

export {
  AdminUserWrap,
  TableWrap,
  PaginationWrap,
  InfoSection,
  TabHead,
  TabHeadNav,
  CashoutInfoModal
}