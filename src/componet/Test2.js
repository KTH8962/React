import { useState, useEffect } from "react";

function Btn(props){
    return (
        <button type="button" onClick={props.btnClick}>
            {props.state ? 'hide' : 'show'}
        </button>
    )
}

function App() {
    const [state, setState] = useState(true);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        let time
        if(state) {
            time = setInterval(() => {setCount(prev=>prev+1)}, 1000);
        } else {
            setCount(0);
        }
        
        return () => {
            clearInterval(time);
        };
    },[state]);

    return (
        <>
            <Btn state={state} btnClick={() => {
                setState(prev=>!prev);                
            }}></Btn>            
            <div style={state ? {display:'block'} : {display: 'none'}}>{count}</div>
        </>
    );
}

export default App;