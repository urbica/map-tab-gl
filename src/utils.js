import random from 'random-number';

export const getDate = () => {
  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  const textDay = days[day];
  const textMonth = months[month];


  return { day, month, year, textDay, textMonth };
};

export const randomGen = (max) => random.generator({ min: 0, max, integer: true })();
