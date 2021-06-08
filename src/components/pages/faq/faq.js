import React, {useState} from "react";

import AllCategoryTab from './allCategoryTab/allCategoryTab';
import MainTextArea from '../../mainTextArea/mainTextArea';
import MainButton from "../../mainButton/mainButton";

import {FaqWrap, TabHead, TabBody, AddQuestion} from './styled';

const Faq = () => {
  const [tabStatus, setTabStatus] = useState('all');

  // change allCategoryTab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.btn-active').classList.remove('btn-active');
    e.target.classList.add('btn-active');
  };

  return(
    <div className={'main_container'}>
      <FaqWrap>
        <div className="title">Помощь</div>
        <TabHead>
          <button onClick={(e) => changeTab(e, 'all')} className={'btn-active'}>Все категории</button>
          <button onClick={(e) => changeTab(e, 'category_1')}>Категория 1</button>
          <button onClick={(e) => changeTab(e, 'category_2')}>Категория 2</button>
          <button onClick={(e) => changeTab(e, 'category_3')}>Категория 3</button>
        </TabHead>
        <TabBody>
          {
            tabStatus === 'all'
            ? <AllCategoryTab/>
            : null
          }
        </TabBody>
        <AddQuestion>
          <div className="title">Остались вопросы? Напишите нам</div>
          <form>
            <MainTextArea
              label={'Ваш вопрос'}
              name={'question'}
            />

            <MainButton
              text={'Отправить'}
              colorBg={true}
            />
          </form>
        </AddQuestion>
      </FaqWrap>
    </div>
  )
}

export default Faq;