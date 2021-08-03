import React, {useState} from "react";

import {Button} from "./styled";
import Spinner from '../../components/spinner/spinner';

const MainButton = ({text, func = () => null, width, type = 'button', classList, colorBg = false, simple = false, colorBgRed = false}) => {
  const [spinner, setSpinner] = useState(false);

  const onClick = () => {
    func();
    setSpinner(true)
    setTimeout(()=> {
      setSpinner(false)
    }, 2000)
  }

  return (
    <Button
      onClick={() => func()}
      width={width}
      type={type}
      className={classList}
      colorBg={colorBg}
      simple={simple}
      colorBgRed={colorBgRed}
      disabled={spinner}
    >
      {spinner ? <Spinner size={'1.5'} btnSpinner={true} color={'light'}/> : text}
    </Button>
  )
}

export default MainButton;