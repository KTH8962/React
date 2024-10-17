import React, { useRef, useState } from 'react';
import Result from './Result';

function Input(props) {
    const [num, setNum] = useState(0);
    const numRef1 = useRef();
    const numRef2 = useRef();
    const symRef = useRef();
    const calculator = () => {
        let calc;
        let num1 = Number(numRef1.current.value);
        let num2 = Number(numRef2.current.value);
        if(symRef.current.value == "+") {
            calc = `${num1 + num2}`;
        } else if(symRef.current.value == "-") {
            calc = `${num1 - num2}`;
        } else if(symRef.current.value == "*") {
            calc = `${num1 * num2}`;
        } else if(symRef.current.value == "/") {
            calc = `${num1 / num2}`;
        }
        setNum(calc);
        props.setData(calc);
    };
    return (
        <div>
            <Result result={num}/>
            <input type='text' ref={numRef1} placeholder='첫번째 숫자'/><br/>
            <input type='text' ref={numRef2} placeholder='두번째 숫자'/><br/>
            <input type='text' ref={symRef} placeholder='+, -, *, /'/><br/>
            <button onClick={calculator}>계산</button>
        </div>
    );
}

export default Input;