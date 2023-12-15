import React from 'react';

const CalenderDays = ({selectedDay, setSelectedDay, currentDay}) => {
     const firstDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
     const lastDay = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0);
     let dates = [];
     
     const firstDayOfTheMonth = firstDay.getDay();
     if(firstDayOfTheMonth !== 0){
        for(let i=0; i<firstDayOfTheMonth; i++){
            dates.push("");
        }
     };

     for(let i=firstDay.getDate(); i<=lastDay.getDate(); i++){
        dates.push(i);
     };
     
     const handleSelection = (date) =>{
        setSelectedDay(date)
     };

    return (
    <div className='date-design'>
        {dates.map((date)=>{
           return <div className={selectedDay === date ? "selcted-day date-div" : 'date-div'} onClick={()=>handleSelection(date)}>{date}</div>
        })}
    </div>);
};

export default CalenderDays;