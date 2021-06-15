import React, {useState} from "react";

import MakeDeposit from './makeDeposit/makeDeposit';
import ActiveDeposit from "./activeDeposit/activeDeposit";

import arrow from './media/icon/arrow_down.svg';
import {DepositWrap, Desc} from './styled';

const Deposit = () => {
  // for button show more text
  const [showMore, setShowMore] = useState(false);
  // записиваем все дание о депозите
  const [deposit, setDeposit] = useState(null);


  const showMoreBtn = () => {
    setShowMore(!showMore)
  }

  // записываем дание о депозите в стейт
  const updateList = (event) => {
    setDeposit(event)
  }
  //console.log(deposit)

  return(
    <div className={'main_container'}>
      <DepositWrap>
        <div className="title">Программа Mira Deposit</div>

        <Desc show={showMore}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et odio eget massa blandit posuere. Integer sed massa nisi. Morbi eget lectus nulla. Integer sodales elit sed consequat volutpat. Curabitur lectus felis, interdum nec nulla a, elementum sagittis felis. Donec congue, felis ege... massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer</p>
          <button onClick={showMoreBtn}>{showMore ? 'Скрыть' : 'Подробнее'}<img src={arrow} alt="icon"/></button>
        </Desc>

        {
          deposit === null
          ? (
              <MakeDeposit
                updateList={updateList}
              />
            ) : (
              <ActiveDeposit
                deposit={deposit}
              />
            )
        }
      </DepositWrap>
    </div>
  )
}

export default Deposit;