import React from 'react';
import Marks from './Marks';
import Image from '../components/Image';

export const FaceRecognitionResult = (props) => {
  const { faces, imageUrl } = props;
  return (
    <div id="image-result">
      {
        imageUrl && faces && faces.length
        ? (<>
            <Image src={imageUrl} />
            <Marks marks={faces}/>
          </>)
        : <Image src={imageUrl} />
      }
    </div>
  )
}

export default FaceRecognitionResult;
