import React, {useState} from "react";

import {ChangePhoto, Photo} from "../../styled";

const ChangePhotoBlock = () => {
  // preview
  const [photo, setPhoto] = useState({})

  // изминение фото
  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto({file, preview: reader.result})
    }
    reader.readAsDataURL(file)
  }

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
        <div className={'download'}>Загрузить фото с компьютера</div>
      </Photo>
    ) : (
      <Photo forHtml={'photo-user'}>
        <img alt={'preview'} src={photo.preview}/>
        <div className={'download'}>Заменить фото</div>
      </Photo>
    )

  return (
    <ChangePhoto>
      <div className="small_title">Фото профиля</div>
      {renderPreview}
    </ChangePhoto>
  )
}

export default ChangePhotoBlock;