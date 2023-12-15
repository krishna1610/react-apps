import React, { useEffect, useState } from "react";

const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";


const ApiIntegration = () => {
    const [jobIds, setJobIds] = useState([]);
    const [sortOrder, setSortOrder] = useState("ASC");
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setJobIds(data);
            setFilterList(data);
        });
        // const fetchData = async () => {
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     console.log("krishna ", data);
        // }
        // fetchData(); 

        // fetch with post method
        // const requestObject = {
        //     method: "POST",
        //     headers: {"Content-Type" : "application/json"},
        //     body: JSON.stringify({"abc": "111"})
        // }
        // fetch(url, requestObject)
    },[]);

    const sortingList = () => {
        const copyList = [...jobIds];
        if(sortOrder === 'ASC'){
            copyList.sort((a, b)=>{
                return a - b;
            //    if(a < b){
            //     return -1
            //    }else if(a > b){
            //     return 1;
            //    }
            //    return 0;
            });
            setFilterList(copyList);
            setSortOrder("DEC")
        }else{
             copyList.sort((a, b)=>{
                return b - a;
            //    if(a > b){
            //     return -1
            //    }else if(a < b){
            //     return 1;
            //    }
            //    return 0;
            });
            setFilterList(copyList);
            setSortOrder("ASC")
        }
    };

    const handleOnChnage = (e) => {
       const value = e.target.value;
       const newList = jobIds.filter((id)=>{
          return id.toString().includes(value);
       });
       setFilterList(newList);
    }

    return (

    <div>
    <div>
        <button onClick={sortingList}>Sorting</button>
        <label id="search">Searching here:</label>
        <input htmlFor="search" type="text" onChange={handleOnChnage}></input>
    </div>
     <ul>
        {filterList.map((jobid, index)=>{
            return <li key={index}>{jobid}</li>
        })}
     </ul>
    </div>)
};

export default ApiIntegration;