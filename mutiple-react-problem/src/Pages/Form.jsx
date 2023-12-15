import React, { useState } from 'react';

const Form = () => {
    const [display, setDisplay] = useState(false);
    const [requestedData, setRequestedData] = useState({
        username: '',
        fullname: '',
        age: ""
    })

    const userNameChange = (event) => {
        setRequestedData({
        ...requestedData,
        username: event.target.value,
       })
    };

    const fullNameChange = (event) => {
       setRequestedData({
        ...requestedData,
        fullname: event.target.value,
       })
    };

     const ageChange = (event) => {
        setRequestedData({
        ...requestedData,
        age: event.target.value,
       })
    };

    const onSubmitForm = (event) => {
       setDisplay(true);
       event.preventDefault();
    };


    return (
    <div>
    <form onSubmit={onSubmitForm}>
        <div>
            <div>
                <div>User Name:</div>
                <input type="text" value={requestedData.username} onChange={userNameChange}></input>
            </div>  
            <div>
                <div>Full Name:</div>
                <input type="text" value={requestedData.fullname} onChange={fullNameChange}></input>
            </div> 
            <div>
                <div>Age:</div>
                <input  type="text" value={requestedData.age} onChange={ageChange}></input>
            </div>  
        </div>
        <button>Submit</button>
    </form>
    {display && 
    <div>
        <div>Request Sent to DB with given Data</div>
        <div>User Name: {requestedData.username}</div>
        <div>Full Name: {requestedData.fullname}</div>
        <div>Age: {requestedData.age}</div>
    </div>
    }
    </div>
    )
};

export default Form;