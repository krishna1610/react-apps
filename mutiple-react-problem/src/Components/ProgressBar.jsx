import React, { useState } from 'react';

const ProgressBar = () => {
    const [inputPercent, SetInputPercent] = useState(0);

    const handleChange = (event) => {
        SetInputPercent(event.target.value);
    }

    return (
        <div>
            <div className='progressbar-style' >
                <div 
                  className='progress-bar-innerstyle'
                  style={{width:`${inputPercent}%`}}
                >
                {inputPercent > 0 ? `${inputPercent}%` : ""}
                </div>
            </div>
            <label id="count">Input Percentage</label>
            <input htmlFor="count" type='text' name="count" onChange={handleChange}></input>
        </div>
    );
};

export default ProgressBar;