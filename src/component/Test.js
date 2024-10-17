import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);
    const countChange = (type) => {
        if(type === "add") {
            setCount(prev => prev + num);
        } else if(type === "minus") {
            setCount(Math.max((count - num), 0));
            // if(count < num) {
            //     setCount(0);
            // } else {
            //     setCount(count - num);
            // }
        } else {
            setCount(0);
        }
    };
    return (
        <>
            <div>현재 카운트: {count}</div>
            <input type="text" value={num} onChange={(e) => {
                setNum(parseInt(e.target.value));
            }}/>
            <div>
                <button type="button" onClick={() => {countChange("add")}}>증가</button>
                <button type="button" onClick={() => {countChange("minus")}}>감소</button>
                <button type="button" onClick={() => {countChange("reset")}}>초기화</button>
            </div>
        </>
    )
}

export default App;