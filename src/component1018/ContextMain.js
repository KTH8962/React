import React, { useContext } from 'react';
import { ThemaContext } from '../context/ThemaContext';

function ContextHeader(props) {
    const {thema} = useContext(ThemaContext);
    let style = thema === "light" ? {backgroundColor:'white'} : {backgroundColor : '#666', color: 'white'};
    return (
        <main style={style}>
            <div>현재 색상 모드: {thema}</div>
        </main>
    );
}

export default ContextHeader;