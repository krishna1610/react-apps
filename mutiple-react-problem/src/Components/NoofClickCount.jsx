import React, { useEffect, useState } from 'react';

const NoofClickCount = () => {
    const [clicksCount, setClicksCount] = useState(0);
    const [time, setTime] = useState(10);
    const id = React.useRef(null)

    const clear = () => window.clearInterval(id.current)


    const clickEvent = () => {
        setClicksCount(clicksCount + 1);
    };

    useEffect(()=>{
        id.current = setInterval(()=>{
            setTime((time)=>time - 1);
        }, 1000);
         
        return clear;
    },[]);

    useEffect(()=>{
        if(time === 0){
            clear();
        }
    },[time])

    return(
        <div>
            <h2>Start editing to see some magic happen!</h2>
            <div className='count-box'>
                <div>{clicksCount}</div>
                <div>Time Left: {time} seconds</div>
                {time > 0 && <button onClick={clickEvent}>+</button>}
            </div>
        </div>
    )
};

export default NoofClickCount;