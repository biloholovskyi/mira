import React, {useState} from "react";

import {Wrapper} from "./styled";

const MainInput = ({label, name, type, required, defaultValue}) => {

  return (
    <Wrapper className={'input_wrap'}>
      <div className={'labelWrap'}>
        <label className={'label'}>{label}</label>
      </div>
      <input className={'input'} name={name} required={required}  type={type}  defaultValue={defaultValue} autoComplete={'off'}/>
    </Wrapper>
  )
}

export default MainInput;