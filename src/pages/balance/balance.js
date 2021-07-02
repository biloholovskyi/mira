import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MainInput from '../../components/mainInput/mainInput';
import MainButton from "../../components/mainButton/mainButton";
import WithDraw from './modals/withDraw/withDraw';
import ConfirmationCode from './modals/confirmationCode/confirmationCode';
import TopUpModal from "./modals/topUpModal/topUpModal";

import {Top, BalanceBlock, InfoBlock, TableWrap} from './styled';
import search from './media/icon/search.svg';

import {loginUser} from "../../actions";
import ServerSettings from "../../service/serverSettings";

const Balance = ({user}) => {
  // модалка вывода средств
  const [withDraw, setWithDraw] = useState(false);
  // модалка пополнения стеча
  const [topUpModal, setTopUpModal] = useState(false)
  // модалка перевода средств
  const [transferModal, setTransferModal] = useState(false)
  // записиваем баланс пользователя
  const [balanceList, setBalanceList] = useState([])

  // закритие модалок
  const closeModal = () => {
    setWithDraw(false)
    setTopUpModal(false)
    setTransferModal(false)
  }

  // получаем баланс текущого пользователя
  const getUserBalance = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/balance/`)
      .then(res => {
        const userBalance = res.data.filter(balance => parseInt(balance.user_id) === parseInt(user.id))
        if(userBalance) {
          setBalanceList(userBalance)
        }
      }).catch(error => console.log(error));
  }

  useEffect(() => {
    getUserBalance().catch(error => console.error(error));
  }, [])

  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  return (
    <>
      <div className={'main_container'}>
        <Top>
          <BalanceBlock>
            <div className="small_title">Баланс</div>
            <div className="info">{user.user_balance}  MRC <span>151 217,89 ₽</span></div>
            <div className="btn_section">

              <MainButton
                type={'button'}
                text={'Вывести'}
                width={'50%'}
                func={() => setWithDraw(true)}
              />

              <MainButton
                type={'button'}
                text={'Пополнить'}
                colorBg={true}
                width={'50%'}
                func={() => setTopUpModal(true)}
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
              func={() => setTransferModal(true)}
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
            {
              balanceList.map(item => {
                const MyNewDate = item.date.split('T')[0]
                const dateNormal = formatDate(MyNewDate);
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="info">
                        <div className="indicator"/>
                        <div className="name">{item.operation}</div>
                        <div className="mobile_summ">{item.summa} MRC</div>
                      </div>
                    </td>
                    <td>{item.status === 'Conducted' ? 'Проведено' : 'Не Проведено'}</td>
                    <td>{dateNormal}</td>
                    <td>{item.summa}</td>
                    <td>Коментарий</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </TableWrap>
      </div>
      {
        withDraw && (
          <WithDraw
            user={user}
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
      {
        transferModal && (
          <ConfirmationCode
            transferModal={transferModal}
            title={'Подтвердите перевод'}
            close={closeModal}
          />
        )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);