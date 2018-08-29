import React from 'react';
import Clock from 'react-live-clock';
import { getDate } from '../utils';

const UI = ({ place, placeName }) => {
  const { year, textDay, textMonth } = getDate();
  const { properties } = place;

  return (
    <div className='container'>
      <Clock className='time' format={'HH:mm'} ticking={true} />
      <div className='textDate'>
        {textDay}, {textMonth}, {year}
      </div>
      <div className='text'>
        { placeName ? placeName : `${properties.place_name}, ${properties.description}`}
      </div>
    </div>
  );
};

export default UI;
