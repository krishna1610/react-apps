import React, { useState } from 'react';

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const days = ["SUN", "MON", "TUE", "WES", "THU", "FRI", "SAT"];
const todayDate = new Date();

const DatePickerComponet = () => {
   const [selectedDay, setSelectedDay] = useState(todayDate.getDate());

   const changeSelectedDate = (date) => {
        setSelectedDay(date);
   };

   return (
    <div className='calender-view'>
            <div>October 2023</div>
            <div className='days-name'>
              {
                days.map((day, index)=>{
                    return <div keys={index} className='day-item'>{day}</div>
                })
              }
            </div>
            <div className='days-name'>
            {dates.map((date, index)=>{
                return (
                <div keys={index} className={selectedDay === date ? 'selected-date date-item' : 'date-item'} onClick={()=>changeSelectedDate(date)}>{date}</div>
                );    
            })}
            </div>
    </div>)
}
export default DatePickerComponet;