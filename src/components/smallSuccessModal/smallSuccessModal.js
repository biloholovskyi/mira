import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {setSuccessModalText} from '../../actions';

import {SuccessWrap} from './styled';
import ok from './media/icon/ok.svg';

const SmallSuccessModal = ({text}) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setMessage(text)
  }, [text])

  return(
      text && (
      <SuccessWrap>
        <div className="image"><img src={ok} alt="icon"/></div>
        <p>{message}</p>
      </SuccessWrap>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.successModal
  }
};

const mapDispatchToProps = {
  setSuccessModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallSuccessModal);