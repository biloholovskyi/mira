import React from "react";
import CircleProgressBar from './circleProgressBar/circleProgressBar';

import MainButton from "../../../components/mainButton/mainButton";

import {Left, Right, DepositTable, InfoBlock, TabWrap} from "../styled";

const ActiveDeposit = ({deposit}) => {
  return(
   <>
     <InfoBlock>
       <Left>
         <div className="top">

          <CircleProgressBar
            term={deposit.term}
          />

         </div>
         <div className="bottom">
           <div className="item">
             <div className="title">Тело депозита</div>
             <div className="text">{deposit.total.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
           </div>
           <div className="item">
             <div className="title">Начислено процентов</div>
             <div className="text"> MRC</div>
           </div>
         </div>
       </Left>

       <Right>
         <h3>Подробнее о вашем депозите</h3>
         <TabWrap>
           <div className="item">
             <div className="name">Срок депозита</div>
             <div className="value">{deposit.term} дней</div>
             <input type="text" name={'month'} value={deposit.term} hidden readOnly/>
           </div>
           <div className="item">
             <div className="name">Процентная ставка</div>
             <div className="value">{deposit.rate}% / день</div>
             <input type="text" name={'percent'} value={deposit.rate} hidden readOnly/>
           </div>
           <div className="item">
             <div className="name">Дневная прибыль</div>
             <div className="value">{deposit.dailyIncome.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
             <input type="text" name={'dailyIncome'} value={deposit.dailyIncome} hidden readOnly/>
           </div>
           <div className="item">
             <div className="name">Прогнозируемая прибыль</div>
             <div className="value">{deposit.income.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
             <input type="text" name={'income'} value={deposit.income} hidden readOnly/>
           </div>

           <MainButton
             type={'submit'}
             text={'Отменить депозит'}
             colorBgRed={true}
             width={'100%'}
           />
         </TabWrap>
       </Right>
     </InfoBlock>

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
             <td>10</td>
             <td>3%</td>
             <td>21.06.1995</td>
           </tr>
           <tr>
             <td>20</td>
             <td>5%</td>
             <td>28.06.1995</td>
           </tr>
         </tbody>
       </table>
     </DepositTable>
   </>
  )
}

export default ActiveDeposit;