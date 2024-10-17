import React, { useEffect, useRef, useState } from 'react';

function Review2(props) {
    const searchRef = useRef();
    
    useEffect(() => {
        console.log(searchRef);
        searchRef.current.focus();
    });

    const fnSearch = () => {
        console.log(searchRef.current.value);
    };
    return (
        <div>
            <input ref={searchRef} />
            <button onClick={fnSearch}>검색!</button>
        </div>
    );
}

export default Review2;