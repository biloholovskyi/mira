import React from 'react';
import ReactSpinner from 'react-bootstrap-spinner'
import "./spinner.css";

const SpinnerSimple = ({color = 'success', size = '2'}) => {
  return (
    <ReactSpinner type="border" color={color} size={size} />
  )
}

export default SpinnerSimple;