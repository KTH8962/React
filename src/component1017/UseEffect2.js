import React, { useEffect, useState } from 'react';

function UseEffect2(props) {
    const [flg, setFlg] = useState(true);

    useEffect(() => {
        let interval="";
        if(flg) {
            interval = setInterval(() => {
                console.log("1초마다");
            }, 1000);
        }
        return () => {
            clearInterval(interval);
            console.log("종료");
        }
    }, [flg]);

    return (
        <div>
            <div>1초마다</div>
            <button type='button' onClick={() => {
                setFlg(!flg);
            }}>클릭</button>
        </div>
    );
}

export default UseEffect2;

// app.js
// const [flg, setFlg] = useState(true);
//   return (
//     <>
//       {flg && <UseEffect2/>}
//       <button type="button" onClick={() => {
//         setFlg(!flg);
//       }}>
//         {flg ? "숨기기" : "보이기"}
//       </button>
//     </>
//   );