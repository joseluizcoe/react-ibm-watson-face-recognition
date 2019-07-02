import React from 'react';
import FaceMark from '../components/FaceMark';

export const Marks = (props) => {
  const { marks } = props;
  return marks.map(
    (mark, index) => (
      <FaceMark
        face={mark}
        key={index}
      />
    )
  )
}

export default Marks;
