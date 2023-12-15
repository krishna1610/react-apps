import React, { useState } from "react";

const loginData = {
    name : "Krishna Bhadkoliya",
    email: "kkbhadkoliya16@gmail.com",
    password: "Krishna@1610"
}

const Login = () => {
    const [userEnterInfo, setUserEnterInfo] = useState({
         name : "",
         email: "",
         password: ""
    });
    const [loginInfoCorrect, setLoginInfoCorrect] = useState(false);

    const handleName = (e) => {
        console.log(typeof e.target.value);
        setUserEnterInfo({
            ...userEnterInfo,
            name: e.target.value
        })
    };

    const handleEmail = (e) => {
        setUserEnterInfo({
            ...userEnterInfo,
            email: e.target.value
        })
    };

     const handlePassword = (e) => {
        setUserEnterInfo({
            ...userEnterInfo,
            password: e.target.value
        })
    };

    const handleSubmit = (e) => {
        if(userEnterInfo.name === loginData.name 
            && userEnterInfo.email === loginData.email
            && userEnterInfo.password === loginData.password){
                setLoginInfoCorrect(true);
            }else{
                 setLoginInfoCorrect(false);
            }
        e.preventDefault();
    }

    return (<div>
        <form onSubmit={handleSubmit}>
        <div>Name:</div>
        <input type="text" value={userEnterInfo.name} onChange={handleName}></input>
        <div>Email:</div>
        <input type="email" value={userEnterInfo.email} onChange={handleEmail}></input>
        <div>Password:</div>
        <input type="password" value={userEnterInfo.password} onChange={handlePassword}></input>
        <div><button>Login</button></div>
        </form>
        {loginInfoCorrect ? <div>Welcome {userEnterInfo.name} ! </div> : <div>Your details are not Correct!</div>}
    </div>)
};

export default Login;