import React from 'react';
import ReactSpinner from 'react-bootstrap-spinner'

import {SpinnerWrap} from './styled'

import "./spinner.css";

const SpinnerSimple = ({color = 'success', size = '2', btnSpinner = false}) => {
  return (
    <SpinnerWrap  btnSpinner={btnSpinner}>
      <ReactSpinner type="border" color={color} size={size} />
    </SpinnerWrap>
  )
}

export default SpinnerSimple;