import React from 'react';

const DisplayScreen = ({selectedItem}) => {
    return (
    <div className='cal-display-screen'>
        {selectedItem}
    </div>);
};

export default DisplayScreen;