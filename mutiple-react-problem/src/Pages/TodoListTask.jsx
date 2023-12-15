import React, { useState } from 'react';

const TodoListTask = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [cityIndexNumber, setCityIndexNumber] = useState(0);
  const [completed, setCompleted] = useState([]);

  const addCities = () => {
    setCities([...cities, city]);
    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const removeCity = (selectedCity) => {
    const updatedCities = cities.filter((city)=>{
        return city !== selectedCity;
    });
    setCities(updatedCities);
  };

  const EditCity = (index) => {
    setIsEditable(true);
    setCityIndexNumber(index);
  }

  const EnterNewCity = (event) => {
     if(event.key === "Enter"){
       setIsEditable(false);
       const copyCities = [...cities];
       copyCities[cityIndexNumber] = event.target.value;
       setCities(copyCities);
     }  
  };

  const markedCompleted = (city) => {
    setCompleted([...completed, city]);
  };
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
          <input type='text' value={city} onChange={handleChange}></input>
          <button onClick={addCities}>Add</button>
      </div>
      <div>
        <ul>
            {cities.map((city, index)=> {
                return <li key={index}  className={completed.indexOf(city) >= 0 ? "completed" : ""}>
                  <input type="checkbox" value={city} onChange={()=>markedCompleted(city)}></input>
                  {city}
                  <button onClick={()=>removeCity(city)}>X</button> 
                  <button onClick={()=>EditCity(index)}>Edit</button>
                </li>
            })}
        </ul>
      </div>
      {
        isEditable && <div>
           <label id="edit">Edit City Here: </label>
           <input htmlFor="edit" type="text" onKeyDown={EnterNewCity}></input>
        </div>
      }
     
    </div>
  );
};

export default TodoListTask;