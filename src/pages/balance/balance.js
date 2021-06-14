import React, {useState} from "react";

import MainInput from '../../components/mainInput/mainInput';
import MainButton from "../../components/mainButton/mainButton";
import WithDraw from './modals/withDraw/withDraw';
import ConfirmationCode from './modals/confirmationCode/confirmationCode';
import SuccessModal from './modals/successModal/successModal';
import TopUpModal from "./modals/topUpModal/topUpModal";

import {Top, BalanceBlock, InfoBlock, TableWrap} from './styled';
import search from './media/icon/search.svg';

const Balance = () => {
  // модалка вывода средств
  const [withDraw, setWithDraw] = useState(false);
  // модалка пополнения стеча
  const [topUpModal, setTopUpModal] = useState(false)

  // close for all modal
  const closeModal = () => {
    setWithDraw(false);
    setTopUpModal(false)
  }
  
  return (
   <>
     <div className={'main_container'}>
       <Top>
         <BalanceBlock>
           <div className="small_title">Баланс</div>
           <div className="info">10 000 MRC <span>151 217,89 ₽</span></div>
           <div className="btn_section">

             <MainButton
               type={'button'}
               text={'Вывести'}
               width={'50%'}
               func={()=> setWithDraw(true)}
             />

             <MainButton
               type={'button'}
               text={'Пополнить'}
               colorBg={true}
               width={'50%'}
               func={()=> setTopUpModal(true)}
             />

           </div>
         </BalanceBlock>

         <InfoBlock>
           <div className="title">Перевод другому пользователю</div>

           <MainInput
             label={'Выберите пользователя'}
             type={'text'}
             name={'selectUser'}
             placeholder={'Введите имя или Email'}
             icon={search}
           />

           <MainInput
             label={'Сумма перевода'}
             type={'number'}
             name={'selectUser'}
             iconText={'MRC'}
           />

           <MainButton
             text={'Перевести'}
             colorBg={true}
             width={'100%'}
           />
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
                 <div className="mobile_summ">20 000,00 MRc</div>
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
                 <div className="mobile_summ">40 000,00 MRc</div>
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

     {
       withDraw && (
         <WithDraw
          close={closeModal}
         />
       )
     }
     {
       topUpModal && (
         <TopUpModal
           close={closeModal}
         />
       )
     }
   </>
  )
}

export default Balance;