import styled from 'styled-components';

const FaqModalOverlay = styled.div`
  background: rgba(18, 18, 18, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`

const FaqModalBody = styled.div`
  background: #212121;
  box-shadow: 0px 100px 179px rgba(0, 0, 0, 0.16), 0px 22.3363px 39.982px rgba(0, 0, 0, 0.0953772), 0px 6.6501px 11.9037px rgba(0, 0, 0, 0.0646228);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 640px;
  position: relative;
  .title {
    font-family: 'TTInterfaces-Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    width: 100%;
    text-align: left;
    margin-bottom: 32px;
  }
  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
`

export {
  FaqModalBody,
  FaqModalOverlay
}
