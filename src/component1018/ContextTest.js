import React, { useState } from 'react';
import './context.css';
import ContextHeader from './ContextHeader';
import ContextMain from './ContextMain';
import ContextFooter from './ContextFooter';
import { ThemaContext } from '../context/ThemaContext';

function ContextTest(props) {
    const [thema, setThema] = useState("light");
    const toggleThema = () => {
        if(thema === "light") {
            setThema("dark");
        } else{
            setThema("light");
        }
    }
    return (
        <ThemaContext.Provider value={{thema, toggleThema}}>
            <ContextHeader />
            <ContextMain />
            <ContextFooter />
        </ThemaContext.Provider>
    );
}

export default ContextTest;