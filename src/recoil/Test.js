import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { counterState } from './atoms/atoms';
import { Link } from 'react-router-dom';
import { doubledState, doubledStateSet } from './selectors/selector';

function Test(props) {
    const num = useRecoilValue(counterState);
    const doubleNum = useRecoilValue(doubledState);
    const setDouble = useSetRecoilState(doubledStateSet);
    const incrementValue = () => {
        setDouble(prevValue => prevValue * 2);  // 값 증가
    };
    
    return (
        <div>            
            <p>기존: <Link to="/">{num}</Link></p>
            <p>2배: <Link to="/">{doubleNum}</Link></p>
            <button type='button' onClick={incrementValue}></button>
        </div>
    );
}

export default Test;