import React, { useEffect, useState } from 'react';

function Test(props) {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);

    useEffect(() => {
        let interval;
        if(state) {
            interval = setInterval(() => {
                setCount((prev) => { 
                    prev = prev + 1;
                    if(prev == 10) {
                        prev = 0;
                    }
                    return prev;
                });
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        }
    }, [state]);
    return (
        <div>
            <h1>{count}초</h1>
            <button type='button' onClick={() => {
                setState(!state);
            }}>
                {state ? "중지": "시작"}
            </button>
            <button type='button' onClick={() => {
                setCount(0);
            }}>리셋</button>
        </div>
    );
}

export default Test;