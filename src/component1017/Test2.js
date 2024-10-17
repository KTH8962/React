import React, { useEffect, useRef, useState } from 'react';

function Test2() {
    const [list, setList] = useState([]);
    const [inputText, setInputText] = useState("");
    const ipRef = useRef();

    useEffect(() => {
        ipRef.current.focus();
    }, [list]);  

    return (
        <div>
            <div>
                <input type='text' ref={ipRef} value={inputText} onChange={(e) => {
                    setInputText(e.target.value);
                }}/>
                <button type='button' onClick={() => {
                    if(inputText.length < 3) {
                        alert("3글자 이상 입력해주세요;");
                        return;
                    } else {
                        setList((prev) => {
                            setInputText("");
                            return [...prev, inputText];
                        });
                    }
                }}>저장</button>
            </div>
            {inputText.length < 3 && <p style={{color:"red"}}>3글자 이상이어야 합니다.</p>}
            <h1>이전 입력 값:</h1>
            {list.length === 0 && <p>입력 값이 없습니다.</p>}
            <ul>                
                {list.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Test2;