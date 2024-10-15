import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);
    const countChange = (type) => {
        const cnt2 = parseInt(count);
        const num2 = parseInt(num);
        if(type == "add") {
            setCount(cnt2 + num2);
        } else if(type == "minus") {
            if(cnt2 < num2) {
                setCount(0);
            } else {
                setCount(cnt2 - num2);
            }
        } else {
            setCount(0);
        }
    };
    return (
        <>
            <div>현재 카운트: {count}</div>
            <input type="text" value={num} onChange={(e) => {
                setNum(e.target.value);
            }}></input>
            <div>
                <button type="button" onClick={() =>{countChange("add")}}>증가</button>
                <button type="button" onClick={() =>{countChange("minus")}}>감소</button>
                <button type="button" onClick={() =>{countChange("reset")}}>초기화</button>
            </div>
        </>
    )
}

export default App;