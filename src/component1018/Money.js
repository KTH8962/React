import React, { useReducer, useRef } from 'react';

// prev는 처음 선언한 100000(state)이 담긴다.
// action에는 dispatch로 보낸 map이 담겨있다.
const reducer = (prev, action) => {
  let money = Number(action.money);
  if(action.req == "결제") {
    return prev - money;
  } else if(action.req == "환불") {
    return prev + money;
  }
};

function Money(props) {
    // money => 100000(state)이 담기고 dispatch는 중계하는 reducer(함수)가 담긴다.
    const [money, dispatch] = useReducer(reducer, 100000);
    const moneyRef = useRef();

    return (
        <div>
            {money}
            <div><input type='text' ref={moneyRef} /></div>
            <div>
                <button type='button' onClick={() => {
                dispatch({money: moneyRef.current.value, req: "결제"});
                }}>결제</button>
                <button type='button' onClick={() => {
                dispatch({money: moneyRef.current.value, req: "환불"});
                }}>환불</button>
            </div>
        </div>
    );
}

export default Money;