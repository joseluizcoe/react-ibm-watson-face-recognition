import React from 'react';
import Marks from './Marks';
import Image from '../components/Image';

export const FaceRecognitionResult = (props) => {
  const { faces, imageUrl } = props;
  console.log('FaceRecognitionResult');
  console.log('faces', faces);
  return (
    <div id="image-result">
      {
        faces && faces.length
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
