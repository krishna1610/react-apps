import React, {useState} from  'react';
import CalenderDays from '../Components/CalenderDays.jsx';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const currentDay = new Date();

const Calender = () => {
    const [selectedDay, setSelectedDay] = useState(currentDay.getDate());
   
    return (
    <div className='calender-view-div'>
        <div className='title'>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</div>
        <div className='days-div'>
            {days.map((day, index) => {
                return <div key={index} className='title days-style'>{day}</div>
            })}  
        </div>
        <div>
            <CalenderDays selectedDay={selectedDay} setSelectedDay={setSelectedDay} currentDay={currentDay}/>
        </div>
    </div>)
};

export default Calender;