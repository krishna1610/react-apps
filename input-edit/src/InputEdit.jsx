import React, { useState } from "react";

const InputEdit = () => {
    const [value, setVaule] = useState(2000);
    
    const ChangeValue = (event) => {
       event.preventDefault();
       setVaule(event.target.value);
    };

    return (
        <div>
            <input
               type="text"
               value={value}
               onChange={ChangeValue}
            ></input>
        </div>
    );
}

export default InputEdit;