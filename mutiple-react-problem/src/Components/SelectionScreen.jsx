import React from 'react';

const SelectionScreen = ({onClick}) => {

    return(
        <div>
            <div className='btn-group-style'>
                <button className='btn-style' name="(" onClick={(e)=>onClick(e.target.name)}>(</button>
                <button className='btn-style' name="DE" onClick={(e)=>onClick(e.target.name)}>DE</button>
                <button className='btn-style' name=")" onClick={(e)=>onClick(e.target.name)}>)</button>
                <button className='btn-style' name="C" onClick={(e)=>onClick(e.target.name)}>C</button>
            </div>
             <div className='btn-group-style'>
                <button className='btn-style' name="7" onClick={(e)=>onClick(e.target.name)}>7</button>
                <button className='btn-style' name="8" onClick={(e)=>onClick(e.target.name)}>8</button>
                <button className='btn-style' name="9" onClick={(e)=>onClick(e.target.name)}>9</button>
                <button className='btn-style' name="+" onClick={(e)=>onClick(e.target.name)}>+</button>
            </div>
             <div className='btn-group-style'>
                <button className='btn-style' name="4" onClick={(e)=>onClick(e.target.name)}>4</button>
                <button className='btn-style' name="5" onClick={(e)=>onClick(e.target.name)}>5</button>
                <button className='btn-style' name="6" onClick={(e)=>onClick(e.target.name)}>6</button>
                <button className='btn-style' name="-" onClick={(e)=>onClick(e.target.name)}>-</button>
            </div>
             <div className='btn-group-style'>
                <button className='btn-style' name="1" onClick={(e)=>onClick(e.target.name)}>1</button>
                <button className='btn-style' name="2" onClick={(e)=>onClick(e.target.name)}>2</button>
                <button className='btn-style' name="3" onClick={(e)=>onClick(e.target.name)}>3</button>
                <button className='btn-style' name="*" onClick={(e)=>onClick(e.target.name)}>*</button>
            </div>
             <div className='btn-group-style'>
                <button className='btn-style' name="0" onClick={(e)=>onClick(e.target.name)}>0</button>
                <button className='btn-style' name="." onClick={(e)=>onClick(e.target.name)}>.</button>
                <button className='btn-style' name="=" onClick={(e)=>onClick(e.target.name)}>=</button>
                <button className='btn-style' name="/" onClick={(e)=>onClick(e.target.name)}>/</button>
            </div>

        </div>
    );
};

export default SelectionScreen;