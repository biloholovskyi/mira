import React from "react";

import { Button } from "./styled";

const MainButton = ({text, func = () => null, width, type = 'button', classList, colorBg =  false, simple = false}) => {
  return (
    <Button
      onClick={() => func()}
      width={width}
      type={type}
      className={classList}
      colorBg={colorBg}
      simple={simple}
    >
      {text}
    </Button>
  )
}

export default MainButton;