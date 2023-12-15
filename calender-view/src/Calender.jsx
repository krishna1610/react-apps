import React, { useState } from "react";

const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January","Frbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const todayDate = new Date();

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(todayDate.getDate());
    const firstDateOfMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
    const lastDateOfMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0);
    const firstDay = firstDateOfMonth.getDay();
    const firstDate = firstDateOfMonth.getDate();
    const lastDate = lastDateOfMonth.getDate();

    const dates = [];

    if(firstDay > 0){
        for(let i=0; i<firstDay; i++){
            dates.push(" ");
        }
    }

    for(let i=firstDate; i<=lastDate; i++){
        dates.push(i);
    }

    const handleOnClick = (date) => {
        setSelectedDate(date);
    };

    return (<div className="calender-div">
        <div className="month-year-div">{months[todayDate.getMonth()]} {todayDate.getFullYear()}</div>
        <div className="days-div">
        {days.map((day, index)=>{
            return <div key={index} className="day">{day}</div>
        })}
        </div>
        <div className="date-div">
            {dates.map((date, index)=>{
                return <div key={index} className={selectedDate === date ? "selected date": "date"}  onClick={()=>handleOnClick(date)}>{date}</div>
            })}
        </div>
    </div>)
};

export default Calender;