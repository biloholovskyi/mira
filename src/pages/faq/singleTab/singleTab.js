import React, {useEffect, useRef, useState} from "react";
import YouTube from 'react-youtube'; // https://www.npmjs.com/package/react-youtube

import {FaqAnswer, FaqTitle, Question} from "../styled";

const SingleTab = ({video}) => {
  const [showStatus, setShowStatus] = useState(false)

  // ссылка на селект
  const selectEl = useRef(null);
  // ссылка на весь врапер
  const wrapperEl = useRef(null)

  // открываем/закриваем select
  const showOptions = () => {
    setShowStatus(!showStatus)
  }

  // закрытие при клике вне списка селекта
  const closeOutsideClick = (e) => {
    if (wrapperEl.current && !wrapperEl.current.contains(e.target)) {
      if (selectEl.current && !selectEl.current.contains(e.target)) {
        setShowStatus(false);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  const opts = {
    height: '580px',
    width: '100%'
  };



  return (
    <>
      <Question ref={wrapperEl}>
        <FaqTitle onClick={(e) => {showOptions(e)}} ref={selectEl} arrow={showStatus}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</FaqTitle>
        {
          showStatus && (
           <>
             <FaqAnswer className='faq-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec viverra
               nisi. Donec mauris magna, rutrum eu eros id, vulputate pulvinar est. Interdum et malesuada fames ac ante
               ipsum primis in faucibus. Praesent vel pellentesque velit, et rutrum orci. In molestie elit eget felis
               vestibulum tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
               egestas. Quisque vel turpis eu lacus finibus mattis. Quisque in tortor odio.</FaqAnswer>
             {
               video && (
                 <YouTube videoId={video} opts={opts}   id={'video_youtube'}    />
               )
             }
           </>
          )
        }
      </Question>
    </>
  )
}

export default SingleTab;