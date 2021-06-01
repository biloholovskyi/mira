import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import {Wrapper} from "./styled";

const MainInput = ({label, name, type, required, defaultValue, forgotPass = false}) => {
  // состояния инпута
  const [active, setActive] = useState(false)

  const onChange = (e) => {
    setActive(e.target.value);
  }

  return (
    <Wrapper className={'input_wrap'}>
      <div className={'labelWrap'}>
        <label className={'label'}>{label}</label>

        {
          forgotPass && (
            <NavLink className={'forgotPass'} to={'/'}>Забыли пароль?</NavLink>
          )
        }

      </div>
      <input className={'input'} name={name} required={required}  type={type}  onChange={(e) => onChange(e)} defaultValue={defaultValue} autoComplete={'off'}/>
    </Wrapper>
  )
}

export default MainInput;