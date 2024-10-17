import React, { useRef, useState } from 'react';

function Review1(props) {
    const [temp, setTemp] = useState(0);
    const refNum = useRef(10);
    console.log(refNum);
    let letNum = 10;
    const letIncreament = () => {
        letNum++;
        console.log("letNum => ", letNum);
        console.log("refNum => ", refNum.current);
    };
    const refIncreament = () => {
        refNum.current++;
        console.log("letNum => ", letNum);
        console.log("refNum => ", refNum.current);
    };
    const tempFunc = () => {
        setTemp(temp + 1);
    };
    return (
        <div>
            <div>
                <button onClick={tempFunc}>렌더링</button>
            </div>
            <div>
                {letNum}
                <button onClick={letIncreament}>증가</button>
            </div>
            <div>
                {refNum.current}
                <button onClick={refIncreament}>증가</button>
            </div>
        </div>
    );
}

export default Review1;