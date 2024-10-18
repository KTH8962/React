import React, { useReducer } from 'react';

const reducer = (number, action) => {
    //console.log(number, action);
    switch(action.req) {
        case "add" :
            return number += 1;
        case "minus" :
            return number -= 1;
        case "reset" :
            return number = 10;
        default :
            return;
    }
};

function Reducer1() {
    const [number, dispatch] = useReducer(reducer, 10);
    return (
        <div>
            <p>현재 숫자 : {number}</p>
            <button type='button' onClick={() => {dispatch({req:"add"})}}>증가</button>
            <button type='button' onClick={() => {dispatch({req:"minus"})}}>감소</button>
            <button type='button' onClick={() => {dispatch({req:"reset"})}}>초기화</button>
        </div>
    );
}

export default Reducer1;