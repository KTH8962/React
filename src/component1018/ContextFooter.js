import React, { useContext } from 'react';
import { ThemaContext } from '../context/ThemaContext';

function ContextHeader(props) {
    const {thema} = useContext(ThemaContext);
    let style = thema === "light" ? {backgroundColor:'white'} : {backgroundColor : '#aaa', color: 'white'};
    return (
        <footer style={style}>
            <div>푸터</div>
        </footer>
    );
}

export default ContextHeader;