import React, { useEffect, useState } from 'react';

function useEffect1(props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
      console.log("useEffect");
    }, [count1]);

    return (
        <div>
          <div>count1: {count1}</div>
          <div>count2: {count2}</div>
          <button type="button" onClick={() => {setCount1(count1 + 1)}}>count1 증가</button>
          <button type="button" onClick={() => {setCount2(count2 + 1)}}>count2 증가</button>
        </div>
    );
}

export default useEffect1;