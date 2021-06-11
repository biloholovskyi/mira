import React, {useEffect, useState} from "react";

import {ChangePhoto, Photo} from "../../styled";
import dlt from '../../media/icon/delete.svg';

const ChangePhotoBlock = () => {
  // preview
  const [photo, setPhoto] = useState({})
  // window width
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  //  download photo
  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto({file, preview: reader.result})
    }
    reader.readAsDataURL(file)
  }

  // delete photo
  const handleRemove = () => {
    setPhoto({});
  };

  // render preview
  const renderPreview = JSON.stringify(photo) === JSON.stringify({})
    ? (
      <Photo forHtml={'photo-user'}>
        <input
          accept="image/*"
          className={'hidden-input'}
          name={'photo'}
          id={'photo-user'}
          onChange={(e) => handleImageChange(e)}
          type={'file'}
          required={false}
        />
        <div className="preview"/>
        <div className={'download'}>{windowWidth < 575 ? 'Загрузить фото' : 'Загрузить фото с компьютера'}</div>
      </Photo>
    ) : (
      <>
        <Photo forHtml={'photo-user'}>
          <input
            accept="image/*"
            className={'hidden-input'}
            name={'photo'}
            id={'photo-user'}
            onChange={(e) => handleImageChange(e)}
            type={'file'}
            required={false}
          />
          <img alt={'preview'} src={photo.preview}/>
          <div className={'download'}>Заменить фото</div>
        </Photo>
        <button onClick={() => handleRemove()} type={'button'} className={'dlt_btn'}><img src={dlt} alt="icon"/></button>
      </>
    )

  return (
    <ChangePhoto>
      <div className="small_title">Фото профиля</div>
      {renderPreview}
    </ChangePhoto>
  )
}

export default ChangePhotoBlock;