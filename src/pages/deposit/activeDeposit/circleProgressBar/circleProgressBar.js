import React, {useEffect} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import {TimeWrapper} from './styled';

const daySeconds = 10; //86400

const timerProps = {
  isPlaying: true,
  size: 220,
  strokeWidth: 10
};

const renderTime = (dimension, time) => {
  // if (time === 0) {
  //   return <div className="time">the end...</div>;
  // }

  return (
    <TimeWrapper>
      <span>Осталось</span>
      <div className="time">{time} {dimension}</div>
    </TimeWrapper>
  );
};

const getTimeDays = (time) => (time / daySeconds) | 0;

const CircleProgressBar = ({term}) => {
  const remainingTime = 2 * daySeconds;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#4BA499"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        onComplete={() => [false]}
      >
        {({ elapsedTime }) =>
          renderTime("дней", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
  )
}

export default CircleProgressBar;