import React, {useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import LinesChart from './linesChart/linesChart';

import up from './media/icon/up.svg';
import arrow from './media/icon/arrow_down.svg';
import {DepositWrap, Desc, Left, Label, Right, DepositTable} from './styled';

const Deposit = () => {
  // for button show more text
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      date: "3 июня",
      mrc: 400,
    },
    {
      date: "4 июня",
      mrc: 600,
    },
    {
      date: "5 июня",
      mrc: 800,
    },
    {
      date: "6 июня",
      mrc: 700,
    },
    {
      date: "7 июня",
      mrc: 950,
    },
    {
      date: "8 июня",
      mrc: 450,
    },
    {
      date: "9 июня",
      mrc: 500,
    }
  ];

  const showMoreBtn = () => {
    setShowMore(!showMore)
  }

  return(
    <div className={'main_container'}>
      <DepositWrap>
        <div className="title">Программа Mira Deposit</div>

        <Desc show={showMore}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et odio eget massa blandit posuere. Integer sed massa nisi. Morbi eget lectus nulla. Integer sodales elit sed consequat volutpat. Curabitur lectus felis, interdum nec nulla a, elementum sagittis felis. Donec congue, felis ege... massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer</p>
          <button onClick={showMoreBtn}>{showMore ? 'Скрыть' : 'Подробнее'}<img src={arrow} alt="icon"/></button>
        </Desc>

        <div className="info_block">
          <Left>
            <div className="top">
              <h3>У вас на депозите</h3>
              <div className={'summa'}>10 000 MRC</div>

              <MainButton
                text={'Пополнить '}
                colorBg={true}
                width={'100%'}
              />
            </div>
            <div className="bottom">
              <h3>Доступно к выводу</h3>
              <div className={'summa'}>
                <p>5 432,10 MRC</p>
                <Label>
                  <img src={up} alt="icon"/>
                  + 10% за неделю
                </Label>

              </div>
              <div className="btn_section">
                <MainButton
                  text={'Вывести '}
                  width={'50%'}
                />

                <MainButton
                  text={'Реинвестировать '}
                  colorBg={true}
                  width={'50%'}
                />
              </div>
            </div>
          </Left>

          <Right>
            <h3>Начисления процентов</h3>

            <LinesChart
              data={data}
              width={468}
            />

          </Right>
        </div>

        <DepositTable>
          <div className="small_title">История начислений</div>
          <table>
            <thead>
              <tr>
                <th>Сумма, MRC</th>
                <th>Сумма, %</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 MRC</td>
                <td>3%</td>
                <td>21.06.1995</td>
              </tr>
              <tr>
                <td>20 MRC</td>
                <td>5%</td>
                <td>28.06.1995</td>
              </tr>
            </tbody>
          </table>
        </DepositTable>
      </DepositWrap>
    </div>
  )
}

export default Deposit;