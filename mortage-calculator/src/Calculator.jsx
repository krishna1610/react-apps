import React, { useState } from "react";
import './App.css';

const Calculator = () => {
    const [amount, setAmount] = useState(null);
    const [interest, setInterest] = useState(null);
    const [years, setYears] = useState(null);
    const [calAmount, setCalAmount] = useState({
        monthly: null,
        payment: null,
        interest: null
    });
    const [error, setError] = useState("");
    
    const getLoanAmount = (event) => {
           setAmount(event.target.value);
    };

    const getAPR = (event) => {
           setInterest(event.target.value);
    };

    const getYears = (event) => {
           setYears(event.target.value);
    };

    const buttonAction = () => {
        if(isNaN(Number(amount))  || 
           isNaN(Number(interest))  ||
            isNaN(Number(years)) 
        ){
          setError("Please Enter the valid Number");
        }else{
            const i = interest / 100 / 12;
            const n = years * 12;
            const M = amount * (i * Math.pow(1+i, n))/(Math.pow(1+i, n) - 1);
            const T = M * n;
            const int = T - amount;
            setCalAmount({
                monthly: Math.round(M * 100) / 100,
                payment: Math.round(T * 100) / 100,
                interest: Math.round(int * 100) / 100
            });
        };
    };
                   
//     M = P(i(1+i)n)/((1+i)n - 1)

// M: Monthly mortgage payment
// P: Loan amount
// i: Monthly interest rate (APR / 12)
// n: Total number of payments (loan term in years x 12)

    return (
        <div>
            <h1>Mortgage Calculator</h1>
            <label>Loan amount ($)</label>
            <input type="text" value={amount} onChange={getLoanAmount} required></input>
            <br/>
            <label>Annual interest rate (%)</label>
            <input type="text" value={interest} onChange={getAPR} required></input>
            <br/>
            <label>Loan term (in years)</label>
            <input type="text" value={years} onChange={getYears} required></input>
            <br/>
            <button onClick={buttonAction}>Calculate</button>
            {
                error?.length > 0 &&  
                <div className="error-style">{error}</div>
            }
            <div>Monthly mortgage payment : </div>
            <div>{calAmount.monthly}</div>
            <div>Total payment amount : </div>
            <div>{calAmount.payment}</div>
            <div>Total interest paid : </div>
            <div>{calAmount.interest}</div>
        </div>
    );
};

export default Calculator;