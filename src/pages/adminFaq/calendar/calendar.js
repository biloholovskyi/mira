import React, {useEffect, useRef} from "react";

import CalendarItem from './calendarItem';

import {CalendarWrap} from './styled';

const Calendar = ({today, yesterday, week, month, twoWeeks, year, activeBtn, diapasonDate, clickDiapasonDate, setShowCalendar}) => {
  // ссылка модалку
  const selectEl = useRef(null);

  // закрытие при клике вне елемента
  const closeOutsideClick = (e) => {
    if (selectEl.current && !selectEl.current.contains(e.target)) {
      setShowCalendar(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);
  return (
    <CalendarWrap ref={selectEl}>
      <div className="left">
        <button className={`${activeBtn === 'Сегодня' &&  'active'}`} type={'button'} onClick={()=> today()}>Сегодня</button>
        <button className={`${activeBtn === 'Вчера' && 'active'}`} type={'button'} onClick={()=> yesterday()}>Вчера</button>
        <button className={`${activeBtn === 'Эта неделя' && 'active'}`} onClick={()=> week()}>Эта неделя</button>
        <button className={`${activeBtn === 'Последние две недели' && 'active'}`} onClick={()=> twoWeeks()}>Последние две недели</button>
        <button className={`${activeBtn === 'Этот месяц' && 'active'}`} onClick={()=> month()}>Этот месяц</button>
        <button className={`${activeBtn === 'Этот год' && 'active'}`} onClick={()=> year()}>Этот год</button>
      </div>
      <div className="right">
        <CalendarItem
          diapazonDate={diapasonDate}
          clickDiapasonDate={clickDiapasonDate}
        />
      </div>
    </CalendarWrap>
  )
}

export default Calendar;