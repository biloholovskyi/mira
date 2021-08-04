import styled from 'styled-components';

const AdminUserWrap = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
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
        
      }
      & td:first-child{
        text-align: left;
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
  width: 100%;
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
      .text {
        font-family: 'TTInterfaces-Regular', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        white-space: nowrap;
      }
      .arrow_down {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
      .calendar_icon {
        margin-right: 19px;
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

export {
  AdminUserWrap,
  TableWrap,
  PaginationWrap,
  InfoSection,
  TabHead,
  TabHeadNav
}