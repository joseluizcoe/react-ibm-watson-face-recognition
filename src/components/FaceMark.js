import React from 'react';
import './FaceMark.css';

export const FaceMark = (props) => {
  let {height, width, top, left} = props.face.face_location;
  let {gender} = props.face.gender;
  let {min, max} = props.face.age;
  return (
    <div
      className="face-mark"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <span>
        { gender.toLowerCase() === 'male'
          ? 'Homem'
          : 'Mulher'
        } ~ {min} - {max} anos
      </span>
    </div>
  )
}

export default FaceMark;
