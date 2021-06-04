import React from "react";

import {CodeItem} from '../style';

const SingleCodeItem = () => {
  return (
    <CodeItem type={'text'} name={'code'} maxLength={'1'} required autoComplete={'off'}/>
  )
}

export default SingleCodeItem;