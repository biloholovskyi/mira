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
          padding-right: 15px;
          width: 20%;
        }
      }

      & tr th:first-child {
        text-align: left;
        width: 40%;
      }
    }

`

export {
  AdminUserWrap,
  TableWrap
}