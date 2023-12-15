import React, { useState } from 'react';
import './App.css';

const Tabs = ({items}) => {
  const [value, setValue] = useState(items[0].label);

  const selectButton = (label) => {
    setValue(label)
  };

  return (
    <div>
    <div className='button-body'>
      {
        items.map((item)=>{
            return (
                <div 
                  key={item.label} 
                  className='button-style'
                >
                    <button 
                     className={item.label === value && "active-btn"}
                     onClick={()=>{selectButton(item.label)}} 
                    >{item.title}</button>
                </div>
            );
        })
      }
      </div>
      <div>
        {
        items.map((item)=>{
            if(item.label === value){
                return (
                <div>
                    <p>{item.content}</p>
               </div>);
            };
        })
       }
      </div>
    </div>  
    
  );
};

export default Tabs;
