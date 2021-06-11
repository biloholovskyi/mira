import React from 'react';

import {SearchWrap} from '../styled';
import loop from '../media/icon/loop.svg';

const SearchPanel = () => {
  return (
    <SearchWrap>
      <img src={loop} alt="icon"/>
      <input type="text" placeholder={'Введите ключевое слово'}/>
    </SearchWrap>
  )
}

export default SearchPanel;