import React, {useState} from "react";

import AllCategoryTab from './allCategoryTab/allCategoryTab';
import MainTextArea from '../../components/mainTextArea/mainTextArea';
import MainButton from "../../components/mainButton/mainButton";
import SearchPanel from './searchPanel/searchPanel';
import CategoryTab1 from './categoryTab1/categoryTab1';
import CategoryTab2 from './categoryTab2/categoryTab2';

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
        <SearchPanel/>

        <TabHead>
          <button onClick={(e) => changeTab(e, 'all')} className={'btn-active'}>Все категории</button>
          <button onClick={(e) => changeTab(e, 'category_1')}>Категория 1</button>
          <button onClick={(e) => changeTab(e, 'category_2')}>Категория 2</button>
        </TabHead>
        <TabBody>
          {
            tabStatus === 'all'
            ? <AllCategoryTab/>
            :  tabStatus === 'category_1'
              ? <CategoryTab1/>
              : tabStatus === 'category_2'
                ? <CategoryTab2/>
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