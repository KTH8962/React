import React, { useContext } from 'react';
import { ThemaContext } from '../context/ThemaContext';

function ContextHeader(props) {
    const {thema, toggleThema} = useContext(ThemaContext);
    let style = thema === "light" ? {backgroundColor:'white'} : {backgroundColor : 'black', color: 'white'};
    return (
        <header style={style}>
            <h1>context 실습</h1>
            <button type='button' onClick={toggleThema}>테마변경</button>
        </header>
    );
}

export default ContextHeader;