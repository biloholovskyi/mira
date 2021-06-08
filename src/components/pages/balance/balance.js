import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import MainInput from '../../mainInput/mainInput';
import MainTextArea from '../../mainTextArea/mainTextArea';
import MainButton from "../../mainButton/mainButton";

import {Top, BalanceBlock, TabBody, InfoBlock, TableWrap} from './styled';
import bg from '../../../assets/images/image2.png';

const Balance = () => {
  const [tabStatus, setTabStatus] = useState('withdraw');

  // change allCategoryTab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.btn-active').classList.remove('btn-active');
    e.target.classList.add('btn-active');
  };

  return (
    <div className={'main_container'}>
      <Top>
        <BalanceBlock>
          <div className="small_title">Баланс</div>
          <div className="info">10 000 MRC <span>151 217,89 ₽</span></div>
          <div className="btn_section">
            <button onClick={(e) => changeTab(e, 'withdraw')} className={'btn-active'}>Вывести</button>
            <button onClick={(e) => changeTab(e, 'replenish')}>Пополнить</button>
          </div>
          {
            tabStatus === 'withdraw'
              ? (
                <TabBody>
                  <MainInput
                    label={'Сумма'}
                    name={'summa'}
                    required={true}
                  />

                  <MainInput
                    label={'Кошелек'}
                    name={'wallet'}
                    required={true}
                  />

                  <MainTextArea
                    label={'Коментарий к платежу (необязательно)'}
                    name={'comment'}
                  />

                  <MainButton
                    type={'button'}
                    text={'Далее'}
                    colorBg={true}
                    width={'100%'}
                  />
                </TabBody>
              ) : (
                <TabBody></TabBody>
              )
          }
        </BalanceBlock>

        <InfoBlock>
          <img src={bg} alt="image"/>
          <div className="text_block">
            <div className="name">О Mira Coin</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut neque turpis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent enim est, maximus eget diam nec, efficitur bibendum odio.
              Maecenas et condimentum arcu. Fusce sit amet ante quis quam gravida ullamcorper. Cras tempus massa
              sollicitudin, aliquet eros ac, pharetra ligula. Nullam laoreet egestas risus, quis convallis dolor posuere
              tempor. Curabitur molestie fringilla porta. Quisque pellentesque, augue at lobortis ullamcorper, risus.
            </div>
            <NavLink to={'#'}>Подробнее о Mira Coin</NavLink>
          </div>
        </InfoBlock>
      </Top>

      <TableWrap>
        <div className="small_title">История операций</div>
        <table>
          <thead>
          <tr>
            <th>Операция</th>
            <th>Статус</th>
            <th>Дата</th>
            <th>Сумма</th>
            <th>Коментарий к платежу</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div className="info">
                <div className="indicator"/>
                <div className="name">Оплата программы “Mira Auto”</div>
              </div>
            </td>
            <td>Проведено</td>
            <td>21.06.1995</td>
            <td>20 000,00</td>
            <td>Договірне списання комісії за тарифним пакетом за період з 01/04/2021 по 30/0...</td>
          </tr>
          <tr>
            <td>
              <div className="info">
                <div className="indicator"/>
                <div className="name">Начисление процентов</div>
              </div>
            </td>
            <td>Проведено</td>
            <td>21.06.1995</td>
            <td>20 000,00</td>
            <td>Договірне списання комісії за тарифним пакетом за період з 01/04/2021 по 30/0...</td>
          </tr>
          </tbody>
        </table>
      </TableWrap>
    </div>
  )
}

export default Balance;