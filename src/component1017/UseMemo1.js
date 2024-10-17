import React, { useMemo, useState } from 'react';
function numFunc(count) {
    for(let i=0; i < 50000; i++) {
        console.log(i);
    }
    return count * 2;
}

function plusFunc(count) {
    return count + 1;
}

function UseMemo1(props) {
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(1);
    //let num = numFunc(count);
    let num = useMemo(() => {
        return numFunc(count);
    }, [count]);
    let num2 = plusFunc(count2);
    return (
        <div>
            {num}
            <button onClick={() => {setCount(count + 1);}}>증가11</button>
            <hr/>
            {num2}
            <button onClick={() => {setCount2(count2 + 1);}}>증가22</button>
        </div>
    );
}

export default UseMemo1;