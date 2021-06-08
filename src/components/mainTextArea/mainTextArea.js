import React from "react";

import {Wrapper} from "./styled";

const MainTextArea = ({label, name, required, defaultValue}) => {

  return (
    <Wrapper className={'input_wrap'}>
      <div className={'labelWrap'}>
        <label className={'label'}>{label}</label>
      </div>
      <textarea className={'input'} name={name} required={required} defaultValue={defaultValue} />
    </Wrapper>
  )
}

export default MainTextArea;