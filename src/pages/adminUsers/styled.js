import styled from 'styled-components';

const AdminUserWrap = styled.div`
  padding-top: 64px;
  
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
`

const TableWrap = styled.table`

    width: 100%;
    border-collapse: collapse;
    position: relative;

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
       
        td {
          padding: 16px 0;
          font-family: 'TTInterfaces-Regular', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          text-align: right;
          color: #FFFFFF;
          .info_block {
            display: flex;
            align-items: center;
            .photo {
              width: 40px;
              height: 40px;
              object-fit: contain;
              border-radius: 50%;
              margin-right: 16px;
              min-width: 40px;
            }
            .name_block {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              .name {
                font-family: 'TTInterfaces-Bold', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                color: #FFFFFF;
              }
              .nickname {
                font-family: 'TTInterfaces-Regular', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 20px;
                color: #9E9E9E;
              }
            }
          }
        }
      }
      
      & tr:hover {
        background: #212121;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
        border-radius: 12px;
        border-bottom: none;
        transition: 0.3s;
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

export {
  AdminUserWrap,
  TableWrap
}