import React from "react";

import {ProgressBarWrap} from '../styled';
import userIcon from '../media/icon/user.svg';

const ProgressBar = ({mrc, users, count}) => {

  return (
    <ProgressBarWrap>
      <div className="count">{count}</div>
      <div className="progress">
        <div className="sum">{mrc}</div>
        <div className="progress_done"/>
        <div className="users">
          <img src={userIcon} alt="images"/>
          <div className="user">{users}</div>
        </div>
      </div>
    </ProgressBarWrap>
  )
}

export default ProgressBar;