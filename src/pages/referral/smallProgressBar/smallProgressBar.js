import React, {useEffect, useState} from "react";

import {SmallBarWrap} from '../styled';

const SmallProgressBar = ({label, value, maxValue}) => {
  const [style, setStyle] = useState({});

  useEffect(()=> {
    //получаем дание и переводим их в проценты
    setTimeout(()=>{
      let newValue = (value * 100) / maxValue;

      const newStyle = {
        opacity: 1,
        width: `${newValue}%`
      }
      setStyle(newStyle)
    }, 1000)
  })

  return (
    <SmallBarWrap>
      <div className="caption">
        <div className="label">{label}</div>
        <div className="value">
          <div className="data">{value}</div>
          <div className="border">/</div>
          <div className="max_value">{maxValue}</div>
        </div>
      </div>
      <div className="progress">
        <div className="progress_done" style={style}/>
      </div>
    </SmallBarWrap>
  )
}

export default SmallProgressBar;