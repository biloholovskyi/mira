import React from "react";

import MainButton from "../../../components/mainButton/mainButton";

import {InfoTabWrap, Info, GetBonuses, YourProgress} from '../styled';
import star from '../media/icon/star.svg';
import icon from '../media/icon/icon.svg';


const InformationTab = () => {
  return(
    <InfoTabWrap>
      <div className="top">
        <div className="left">
          <Info>
            <div className="left">
              <div className="img">
                <img src={star} alt="icon"/>
              </div>
              <div className="rank">
                <div>Ваш ранг</div>
                <div>4</div>
              </div>
            </div>
            <div className="right">
              <div className="img">
                <img src={icon} alt="icon"/>
              </div>
              <div className="rank">
                <div>Ваш бонус</div>
                <div>10%</div>
              </div>
            </div>
          </Info>

          <GetBonuses>
            <div className="title">Начисленно бонусов</div>
            <div className="summa">5 432,10 MRC</div>

            <MainButton
              colorBg={true}
              width={'100%'}
              text={'Вывести на основной счет'}
            />
          </GetBonuses>
        </div>

        <YourProgress>
          <h3>Ваш прогресс</h3>
        </YourProgress>
      </div>
    </InfoTabWrap>
  )
}

export default InformationTab;