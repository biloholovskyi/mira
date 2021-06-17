import React from "react";

import MainButton from "../../../components/mainButton/mainButton";
import SmallProgressBar from '../smallProgressBar/smallProgressBar';
import ProgressBar from '../progressBar/progressBar';

import {InfoTabWrap, Info, GetBonuses, YourProgress, RefLevel} from '../styled';
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

          <SmallProgressBar
            label={'Сумма личного депозита'}
            value={100000}
            maxValue={200000}
          />

          <SmallProgressBar
            label={'Сумма оборота 1й линии'}
            value={500000}
            maxValue={800000}
          />

          <SmallProgressBar
            label={'Колиество чел. 1й линии'}
            value={50}
            maxValue={200}
          />

          <SmallProgressBar
            label={'Оборот всей структуры'}
            value={500000}
            maxValue={600000}
          />
        </YourProgress>
      </div>

      <RefLevel>
        <h3>Уровни рефералов</h3>

        <ProgressBar
          mrc={'5 432,10 MRC'}
          users={54}
          count={1}
        />

        <ProgressBar
          mrc={'5 432,10 MRC'}
          users={54}
          count={2}
        />

        <ProgressBar
          mrc={'5 432,10 MRC'}
          users={54}
          count={3}
        />

        <ProgressBar
          mrc={'5 432,10 MRC'}
          users={54}
          count={4}
        />

        <ProgressBar
          mrc={'5 432,10 MRC'}
          users={54}
          count={5}
        />
      </RefLevel>
    </InfoTabWrap>
  )
}

export default InformationTab;