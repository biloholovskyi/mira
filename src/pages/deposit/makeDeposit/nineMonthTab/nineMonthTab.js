import React from "react";

import MainButton from "../../../../components/mainButton/mainButton";

import {TabWrap} from "../../styled";

const NineMonthTab = ({totalSum, getInfo, onMakeDeposit}) => {

  //Прибыль за весь срок
  let income = ((totalSum * 1.2) / 100) * 270;
  let formatIncome = income.toFixed(2);
  //Дневная прибыль
  let dalyIncome = (totalSum * 1.2) / 100;
  let formatDailyIncome = dalyIncome.toFixed(2);

  return(
    <TabWrap onSubmit={(e)=>onMakeDeposit(e)}>
      <div className="item">
        <div className="name">Срок депозита</div>
        <div className="value">9 месяцей</div>
        <input type="text" name={'month'} value={'270'} hidden readOnly/>
      </div>
      <div className="item">
        <div className="name">Процентная ставка</div>
        <div className="value">1,2% / день</div>
        <input type="text" name={'percent'} value={'1.2'} hidden readOnly/>
      </div>
      <div className="item">
        <div className="name">Дневная прибыль</div>
        <div className="value">{formatDailyIncome.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
        <input type="text" name={'dailyIncome'} value={(totalSum * 1.2) / 100} hidden readOnly/>
      </div>
      <div className="item">
        <div className="name">Прибыль за весь срок</div>
        <div className="value">{formatIncome.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
        <input type="text" name={'income'} value={((totalSum * 1.2) / 100) * 270} hidden readOnly/>
      </div>
      <div className="item">
        <div className="name">Итого к оплате</div>
        <div className="value">{totalSum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
        <input type="text" name={'summa'} value={totalSum} hidden readOnly/>
      </div>

      <MainButton
        type={'submit'}
        text={'Открыть депозит'}
        colorBg={true}
        width={'100%'}
      />
    </TabWrap>
  )
}

export default NineMonthTab;