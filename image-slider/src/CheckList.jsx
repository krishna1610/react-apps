import React, { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Grapes", "Watermelon", "Pineapple"];

const CheckList = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event) => {
        if(event.target.checked){
            setSelectedItems([...selectedItems, event.target.value]);
        }else{
            const newLists = selectedItems.filter((item)=> {
                return item !== event.target.value;
            })
            setSelectedItems(newLists);
        }
    }

    return (<div>
        <div>Select Items from the below list : </div>
        {items.map((item, index)=>{
            return <div key={index}> 
                 <input 
                     type="checkbox" 
                     id={item} 
                     name="fruits" 
                     value={item} 
                     onChange={handleChange} 
                 />
                 <label htmlFor={item}>{item}</label>
            </div>
        })}
        <div>Selected Itmes are : </div>
        <ul>
            {selectedItems.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        <div></div>
    </div>)
};

export default CheckList;