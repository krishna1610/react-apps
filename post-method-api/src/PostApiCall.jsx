import React, { useState } from "react";

const PostApiCall = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState({});

    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const getBody = (e) => {
        setBody(e.target.value);
    }

    const handleClick = async() => {
        setBody("");
        setTitle("");
        const url = "https://jsonplaceholder.typicode.com/posts";
        const reqParams = {
            title : title,
            body : body,
            userId: 1
        }
        const requestBody = {
            method: "POST",
            header: {"Content-Type" : "application/json"},
            body: JSON.stringify(reqParams)
        }
        const response = await fetch(url, requestBody);
        const data = await response.json();
        setResponse(data);
    }

    return (<div>
        <h1>Post Api Call</h1>
        <div>
            <label htmlFor="title">Enter Title:</label>
            <input type="text" id="title" value={title} onChange={getTitle}></input>
        </div>
        <div>
            <label htmlFor="body">Enter Body:</label>
            <input type="text" id="body" value={body} onChange={getBody}></input>
        </div>
        <button onClick={handleClick}>Fetch Information</button>
        {Object.keys(response).length > 0 && <div className="response-data">Response Id : {response.id}</div>}


    </div>)
};

export default PostApiCall;