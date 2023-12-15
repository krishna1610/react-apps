import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState({
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        hours: new Date().getHours()
    });
    
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            const date = new Date();
            setCurrentTime({
               minute: date.getMinutes(),
               second: date.getSeconds(),
               hours: date.getHours() 
            });
        },[1000]);

        return ()=>clearInterval(timeInterval);
    },[currentTime]);

    const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

    return (
    <div className='time-display'>
        <div>{currentTime.hours > 12 ? convertToTwoDigit(currentTime.hours - 12) : convertToTwoDigit(currentTime.hours)} : </div>
        <div>{convertToTwoDigit(currentTime.minute)} : </div>
        <div>{convertToTwoDigit(currentTime.second)} </div>
        <div>{currentTime.hours >= 12 ? " PM" : " AM"}</div>
    </div>);
};

export default DigitalClock;