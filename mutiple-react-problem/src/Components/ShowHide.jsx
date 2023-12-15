import React, { useState } from 'react';

const ShowHide = () => {
    const [contentState, setContentState] = useState(false);

    const hideShowText = () => {
       setContentState(!contentState);
    };

    return (
        <div>
            <h1>Show/Hide Content By Clicking Button</h1>
            <button onClick={hideShowText}>{contentState ? "Hide" : "Show"}</button>
            {contentState && <div>Welcome to React Application</div>} 
        </div>
    )
};

export default ShowHide;