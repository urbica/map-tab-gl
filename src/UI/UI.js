import React from 'react';
import Clock from 'react-live-clock';
import { getDate } from '../utils';

const UI = ({ placeName }) => {
  const { year, textDay, textMonth } = getDate();

  return (
    <div className='container'>
      <Clock className='time' format={'HH:mm'} ticking={true} />
      <div className='textDate'>
        {textDay}, {textMonth}, {year}
      </div>
      <div className='text'>
        {placeName}
      </div>
    </div>
  );
};

export default UI;
