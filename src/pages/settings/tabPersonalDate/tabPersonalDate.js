import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";

import {loginUser} from '../../../actions/index';

import MainInput from '../../../components/mainInput/mainInput';
import MainButton from '../../../components/mainButton/mainButton';
import ChangePhotoBlock from './changePhotoBlock/changePhotoBlock';
import MainDropList from '../../../components/mainDropList/mainDropList';

import avatar from '../media/icon/avatar.svg';
import {PersonalDateWrap, PersonalDateForm, MyRefs, RefsBlock, Security} from '../styled';

import ServerSettings from "../../../service/serverSettings";

const TabPersonalDate = ({user, loginUser}) => {
  useEffect(() => {
  }, [user])

  const [photo, setPhoto] = useState();

  const cityList = [
    {name: 'Казань', value: 1},
    {name: 'Киев', value: 2},
    {name: 'ИФ', value: 3}
  ]

  // изминения данных пользователя
  const changePersonalData = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    const data = new FormData();
    data.set("name", e.target.name.value);
    data.set("email", e.target.email.value);
    data.set("surName", e.target.surname.value);

    await axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
      .then(res => {
        // обновляем данные пользователя в сторе
        loginUser(res.data);
        window.location.reload();
      }).catch(error => console.log(error));

  }

  // изминения пароля пользователя
  const changePassword = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    const newPass = e.target.newPass.value;
    const repeatPass = e.target.repeatPass.value;

    const data = new FormData();
    data.set("password", e.target.newPass.value);

    await axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
      .then(res => {
        //проверяем совпадают ли старый пароль и пароль со стора
        if (user.password === e.target.oldPass.value) {
          // проверка паролей новый и повторить новый пароль
          if(newPass === repeatPass) {
            // обновляем данные пользователя в сторе
            loginUser(res.data);
            window.location.reload();
          }
        }
      }).catch(error => console.log(error));
  }

  // get user photo
  const getUserPhoto = async () => {

    // меняем формат ссылки фото
    const avatar = user.photo.split('/')
    const newAva =  `${avatar[1]}/${avatar[2]}`;

    const server = new ServerSettings();

    // получаем аватарку и записиваем у стейт
    await axios.get(`${server.getApi()}${newAva}/`)
      .then(res => {
        setPhoto(res.config.url)
      }).catch(error => console.log(error))
  }

  useEffect(()=> {
    getUserPhoto().catch(error => console.error(error));
  })

  return (
    <PersonalDateWrap>
      <div className="small_title">Личные данные</div>

      <PersonalDateForm onSubmit={(e) => changePersonalData(e)}>
        <div className="small_title">Личные данные</div>

        <MainInput
          label={'Имя'}
          name={'name'}
          type={'text'}
          defaultValue={user.name}
        />

        <MainInput
          label={'Фамилия'}
          name={'surname'}
          type={'text'}
          defaultValue={user.surName}
        />

        <MainInput
          label={'Почта'}
          name={'email'}
          type={'email'}
          defaultValue={user.email}
        />

        <MainInput
          label={'Instagram'}
          name={'text'}
          type={'instagram'}
        />

        <MainDropList
          name={'city'}
          required={true}
          options={cityList}
          label={'Город'}
        />

        <MainButton
          text={'Сохранить'}
          type={'submit'}
          width={'140px'}
          colorBg={true}
        />

      </PersonalDateForm>

      <ChangePhotoBlock avatar={photo}/>

      <MyRefs>
        <div className="small_title">Мой реферал</div>
        <RefsBlock>
          <img className={'photo'} src={avatar} alt="photos"/>
          <div className="name">Альберт Гайфулин</div>
        </RefsBlock>
      </MyRefs>

      <div id={'security'} className="small_title">Безопасность</div>
      <PersonalDateForm onSubmit={(e) => changePassword(e)}>
        <div className="small_title">Смена пароля</div>

        <MainInput
          label={'Введите старый пароль'}
          name={'oldPass'}
          type={'password'}
        />

        <MainInput
          label={'Введите новый пароль'}
          name={'newPass'}
          type={'password'}
        />

        <MainInput
          label={'Повторите новый пароль'}
          name={'repeatPass'}
          type={'password'}
        />

        <MainButton
          text={'Сменить пароль'}
          type={'submit'}
          width={'200px'}
          colorBg={true}
        />

      </PersonalDateForm>

      <Security>
        <div className="small_title">Дополнительная безопасность</div>
        <div className="checkBlock">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"/>
          </label>
          <div className="text_block">
            <p>Двухфакторная аунтификация</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </Security>
    </PersonalDateWrap>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabPersonalDate);