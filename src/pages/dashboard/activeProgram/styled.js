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
        @media(max-width: 1210px) {
          font-size: 12px;
        }
      }
      @media (max-width: 1110px) {
        display: none;
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
        @media(max-width: 1210px) {
          font-size: 14px;
        }
        @media(max-width: 600px) {
          .info {
            img {
              width: 64px;
              height: 48px;
            }
            .name {
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
      @media (max-width: 1110px) {
        & {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          border-bottom: 1px solid #424242;
          td {
            display: none;
          }
        }
        & td:last-child {
          display: flex;
          border: none;
          div {
           margin-top: 10px;
          }
        }
        & td:first-child { 
          display: block;
          border: none;
        }
      }
      @media(max-width: 600px) {
        & td {
          min-height: 56px;
        }
        & td:last-child {
          div {
            margin-top: 0px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`

export {
  ActiveTableWrap
}