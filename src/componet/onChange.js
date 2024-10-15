import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const inputText = (e) => {
        setText(e.target.value);
    };
    return(
        <>
            <input type="text" value={text} onChange={inputText}></input>
            <button type="button">버튼</button>
            <div>{text}</div>
        </>
    );
}

export default App;