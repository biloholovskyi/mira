import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

import {ActiveTableWrap} from './styled';
import Car from '../../../../assets/images/car.svg';

import './styles.css';

const ActiveProgram = () => {
  const days = 28;

  return (
    <ActiveTableWrap>
      <thead>
        <tr>
          <td>Продукт</td>
          <td>Программа</td>
          <td>Первоначальный взнос</td>
          <td>Стоимость</td>
          <td>Дата заявки</td>
          <td>До получения</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="info">
              <img src={Car} alt="photo"/>
              <div className="name">Toyota RAV4 Hybrid</div>
            </div>
          </td>
          <td>Mira Auto</td>
          <td>32 000 MRC / 40%</td>
          <td>80 000 MRC</td>
          <td>21.06.1995</td>
          <td>
            <div style={{ width: 48, marginLeft: 'auto'}}>
              <CircularProgressbarWithChildren strokeWidth={4} label="Stroke width" value={days}  text={`${days}`}>
                <div style={{ fontSize: 10, marginTop: 15, color: '#9E9E9E'}}>дней</div>
              </CircularProgressbarWithChildren>
            </div>
          </td>
        </tr>
      </tbody>
    </ActiveTableWrap>
  )
}

export default ActiveProgram;