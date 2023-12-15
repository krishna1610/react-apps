import React, { useState } from 'react';
import DisplayScreen from '../Components/DisplayScreen.jsx';
import SelectionScreen from '../Components/SelectionScreen.jsx';

const Calculator = () => {
    const [selectedItem, setSelectedItem] = useState("");

    const onClick = (button) => {
        if(button === "="){
            calculate();
        }else if(button === 'DE'){
            backSpace();
        }else if(button === 'C'){
            reset();
        }else{
            setSelectedItem(selectedItem + button);
        }
    };

    const calculate = () => {
        let checkResult = ''
        if(selectedItem.includes('--')) {
           checkResult = selectedItem.replace('--', '+')
        } else {
           checkResult = selectedItem;
        }
        
        try {
           setSelectedItem((eval(checkResult) || ""))
        }catch(e) {
           setSelectedItem("Error")
        }
    };

    const backSpace = () => {
       setSelectedItem(selectedItem.slice(0, -1))
    };

    const reset = () => {
        setSelectedItem("");
    };

    return(
        <div className='cal-div'>
            <DisplayScreen selectedItem={selectedItem}/>
            <SelectionScreen onClick={onClick}/>
        </div>
    )
};

export default Calculator;