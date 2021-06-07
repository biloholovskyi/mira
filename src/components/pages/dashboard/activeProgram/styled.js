import styled from "styled-components";

const ActiveTableWrap = styled.table`
  width: 100%;

  border-collapse: collapse;

  thead {
    tr {
      td {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #9E9E9E;
        text-align: right;
        padding-bottom: 14px;
        border-bottom: 2px solid #424242;
      }
    }
    & tr td:first-child {
      text-align: left;
    }
  }
  
  tbody {
    tr {
      td {
        min-height: 96px;
        border-bottom: 1px solid #424242;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        text-align: right;
       .info {
         display: flex;
         align-items: center;
         img {
           width: 128px;
           height: 96px;
           object-fit: cover;
           object-position: center;
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
       }
      }
    }
  }
`

export {
  ActiveTableWrap
}