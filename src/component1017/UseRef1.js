import React, { useRef, useState } from 'react';

function UseRef1(props) {
    const [stateNum, setStateNum] = useState(0);
    const refNum = useRef(0);
    let letNum = 0;

    console.log("stateNum => ", stateNum);
    console.log("refNum => ", refNum.current);
    console.log("letNum => ", letNum);
    return (
        <div>
            <button type="button" onClick={() => {
                setStateNum(stateNum + 1);
            }}>stateNum 증가</button>
            <button type="button" onClick={() => {
                refNum.current++;
            }}>refNum 증가</button>
            <button type="button" onClick={() => {
                letNum++;
            }}>letNum 증가</button>
            <p>{stateNum}, {refNum.current}, {letNum}</p>
        </div>
    );
}

export default UseRef1;