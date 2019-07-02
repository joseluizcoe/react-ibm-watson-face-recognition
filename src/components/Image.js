import React from 'react';

export const Image = (props) =>{
  const { src } = props;
  return (
    <>
      { src
        ? <img src={src} alt="imagem"/>
        : ''
      }
    </>
  );
}

export default Image;
