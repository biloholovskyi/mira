import React from "react";

import {Wrapper} from "./styled";

const MainInput = ({label, name, type, required, defaultValue, placeholder, icon = false, iconText = false, readOnly = false, updateValue = () => null, minValue}) => {

  const onChange = (e) => {
    updateValue(e.target.value);
  }

  return (
    <Wrapper className={'input_wrap'} icon={icon} iconText={iconText}>
      <div className={'labelWrap'}>
        <label className={'label'}>{label}</label>
      </div>
      <input className={'input'} name={name} required={required} minvalue={minValue}  type={type}  defaultValue={defaultValue} autoComplete={'off'} placeholder={placeholder} readOnly={readOnly} onChange={(e) => onChange(e)}/>
      {
        icon && (
          <img src={icon} alt="alt" className={'icon'}/>
        )
      }
      {
        iconText && (
          <div className={'iconText'}>{iconText}</div>
        )
      }
    </Wrapper>
  )
}

export default MainInput;