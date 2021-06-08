import React, {useEffect, useRef, useState} from "react";

import {FaqAnswer, FaqTitle, Question} from "../../styled";

const SingleTab = () => {
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
    // проверяем был ли клик по списку
    if (selectEl.current && !selectEl.current.contains(e.target)) {
      setShowStatus(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  return (
    <>
      <Question ref={wrapperEl}>
        <FaqTitle onClick={(e) => {showOptions(e)}} ref={selectEl} arrow={showStatus}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</FaqTitle>
        {
          showStatus && (
            <FaqAnswer className='faq-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec viverra
              nisi. Donec mauris magna, rutrum eu eros id, vulputate pulvinar est. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Praesent vel pellentesque velit, et rutrum orci. In molestie elit eget felis
              vestibulum tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Quisque vel turpis eu lacus finibus mattis. Quisque in tortor odio.</FaqAnswer>
          )
        }
      </Question>
    </>
  )
}

export default SingleTab;