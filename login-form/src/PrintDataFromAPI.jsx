import React, { useEffect, useState } from "react";

const url = "https://official-joke-api.appspot.com/random_joke";

const PrintDataFromAPI = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            setData(data)
        })
    }, []);

    return(<div>
        <div>Domain Deatails: </div>
        <div>{data.type}</div>
        <div>{data.setup}</div>
        <div>{data.punchline}</div>
    </div>)
}
export default PrintDataFromAPI;