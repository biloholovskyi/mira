import React from "react";

import {SuccessWrap} from './styled';
import ok from './media/icon/ok.svg';

const SmallSuccessModal = () => {
  return(
    <SuccessWrap>
      <div className="image"><img src={ok} alt="icon"/></div>
      <p>Средства были отправлены</p>
    </SuccessWrap>
  )
}

export default SmallSuccessModal;