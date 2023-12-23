import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from "../Styles/PeriodTracker.module.css"
import CircleIcon from '@mui/icons-material/Circle';

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lastPeriodDate, setLastPeriodDate] = useState(new Date());

  const handleLastPeriodChange = (e) => {
    setLastPeriodDate(new Date(e.target.value));
  };

  // Calculate 28 days after the selected date
  const calculateNextPeriodDate = () => {
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + 27);
    return nextPeriodDate;
  };
  // Calculate 18 to 24 days after the selected date
  const calculatePinkDatesRange = () => {
    const startDate = new Date(lastPeriodDate);
    startDate.setDate(startDate.getDate() + 13);
    
    const endDate = new Date(lastPeriodDate);
    endDate.setDate(endDate.getDate() + 19);

    return { startDate, endDate };
  };

  const getTileContent = ({ date }) => {
    // Highlight the date 28 days after the selected date in red
    if (date.toISOString().split('T')[0] === calculateNextPeriodDate().toISOString().split('T')[0]) {
      return <div style={{ backgroundColor: 'red', borderRadius: '50%', padding: '8px' }}></div>;
    }

    // Highlight the date 18 to 24 days after the selected date in pink
    const { startDate, endDate } = calculatePinkDatesRange();
    if (date >= startDate && date <= endDate) {
      return <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '8px' }}></div>;
    }
    
    return null;
  };

  const imgurl="https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2="https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";

  return (
    <div className={css.wrapper}>
      <img src={imgurl} alt="" className={css.i1}/>
      <img src={imgurl2} alt="" className={css.i2}/>
      <h2>Period Tracker Calendar</h2>
      <div className={css.lastPeriod}>
        <h3>Select Your Last Period Date</h3>
        <input
          type="date"
          value={lastPeriodDate.toISOString().split('T')[0]}
          onChange={handleLastPeriodChange}
        />
      </div>
      <div className={css.calender}>
        <h3>Your Next Period Dates</h3>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={getTileContent}
        />
      </div>
      <div className={css.specify}>
        <ul>
          <li><CircleIcon className={css.icon1}/>: Ovulation Period</li><br/>
          <li><CircleIcon className={css.icon2}/>: Your Next Period Date</li>
        </ul>
      </div>
    </div>
  );
}

export default PeriodTracker;
