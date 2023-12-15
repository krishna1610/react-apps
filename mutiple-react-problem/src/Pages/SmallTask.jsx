import React from 'react';
import ShowHide from '../Components/ShowHide.jsx';
import StopWatchTimer from '../Components/StopWatchTimer.jsx';
import ProgressBar from '../Components/ProgressBar.jsx';
import NoofClickCount from '../Components/NoofClickCount.jsx';

const SmallTask = ({name}) => {
    console.log("krish small", name)
    return (
        <div>
            <ShowHide/>
            <StopWatchTimer />
            <ProgressBar />
            <NoofClickCount />
        </div>
    );
};

export default SmallTask;