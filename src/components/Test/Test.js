import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import { PhotoCamera } from '@material-ui/icons';

const Test = () => {
  const [prevImg, setPrevImg] = useState('');
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        console.log(e.target.result);
        setPrevImg(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
      setImgFile(e.target.files[0]);
    }
  };

  const deleteFilePrevImg = () => {
    setPrevImg('');
    setImgFile(null);
  };

  return (
    <div>
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={handleChangeFile}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>

      <img src={prevImg} alt="First slide" />
      <Button onClick={deleteFilePrevImg}>삭제</Button>
    </div>
  );
};

export default Test;
