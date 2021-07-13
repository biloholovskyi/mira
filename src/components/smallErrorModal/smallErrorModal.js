import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {setErrorModalText} from '../../actions';

import {SuccessWrap} from './styled';
import err from './media/icon/err.svg';

const SmallErrorModal = ({text}) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setMessage(text)
  }, [text])

  return(
      text && (
      <SuccessWrap>
        <div className="image"><img src={err} alt="icon"/></div>
        <p>{message}</p>
      </SuccessWrap>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.errorModal
  }
};

const mapDispatchToProps = {
  setErrorModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallErrorModal);