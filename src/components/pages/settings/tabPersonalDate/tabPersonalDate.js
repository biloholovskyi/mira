import React from "react";

import MainInput from '../../../mainInput/mainInput';
import MainButton from '../../../mainButton/mainButton';
import ChangePhotoBlock from './changePhotoBlock/changePhotoBlock';

import photo from '../../../../assets/icon/avatar.svg';
import {PersonalDateWrap, PersonalDateForm, MyRefs, RefsBlock, Security} from '../styled';

const TabPersonalDate = () => {
  return (
    <PersonalDateWrap>
      <div className="small_title">Личные данные</div>

      <PersonalDateForm>
        <div className="small_title">Личные данные</div>

        <MainInput
          label={'Имя'}
          name={'name'}
          type={'text'}
        />

        <MainInput
          label={'Фамилия'}
          name={'lastName'}
          type={'text'}
        />

        <MainInput
          label={'Почта'}
          name={'email'}
          type={'email'}
        />

        <MainInput
          label={'Instagram'}
          name={'text'}
          type={'instagram'}
        />

        <MainButton
          text={'Сохранить'}
          type={'submit'}
          width={'140px'}
          colorBg={true}
        />

      </PersonalDateForm>

      <ChangePhotoBlock/>

      <MyRefs>
        <div className="small_title">Мой реферал</div>
        <RefsBlock>
          <img className={'photo'} src={photo} alt="photo"/>
          <div className="name">Альберт Гайфулин</div>
        </RefsBlock>
      </MyRefs>

      <div className="small_title">Безопасность</div>
      <PersonalDateForm>
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
            <input type="checkbox"  />
              <span className="slider round" />
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

export default TabPersonalDate;