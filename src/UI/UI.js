import React from 'react';
import Clock from 'react-live-clock';
import { getDate } from '../utils';

const UI = ({ placeName, style }) => {
  const { year, textDay, textMonth } = getDate();

  return (
    <div className={`container ${style.color}`}>
      <Clock className='time' format={'HH:mm'} ticking={true} />
      <div className='textDate'>
        {textDay}, {textMonth}, {year}
      </div>
      <div className='style'>
        <div className='style-name'>
          {style.name}
        </div>
        <a
          className={`style-button ${style.color}-button`}
          href={style.url}
          target='_blank'
        >
          Add this style
        </a>
      </div>
      <div className='text'>
        {placeName}
      </div>
    </div>
  );
};

export default UI;
