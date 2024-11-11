import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './atoms/atoms';
import { Link } from 'react-router-dom';
import { doubledState } from './selectors/selector';

function Counter(props) {
    const [count, setCount] = useRecoilState(counterState);
    const doubledCount = useRecoilValue(doubledState);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <p>Doubled Count: {doubledCount}</p>
            <div>
                <button type='button' onClick={increment}>plus</button>
                <button type='button' onClick={decrement}>minus</button>
            </div>
            <Link to='/test'>d</Link>
        </div>
    );
}

export default Counter;