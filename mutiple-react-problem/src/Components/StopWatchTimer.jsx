import React, { useState } from "react";

const StopWatchTimer = () => {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(()=>{
        setTimer((timer)=>timer + 1)
    }, 1000);

  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    // Complete this function
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div>
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div className="btn-group">
        <button onClick={startTimer} className="start-btn">Start</button>
        <button onClick={stopTimer} className="stop-btn">Stop</button>
        <button onClick={resetTimer} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default StopWatchTimer;