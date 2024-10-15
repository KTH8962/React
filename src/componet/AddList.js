import { useState } from "react";

function App() {
    const [list, setList] = useState(["자바", "오라클"]);
    const [subject, setSubject] = useState("");
    const addSubject = () => {
        //console.log(subject);
        //let list2 = [...list, subject];
        setList((prev) => {
            console.log(prev);
            return [...prev, subject];
        });
        setSubject("");
    }
    return (
        <>
            <input type="text" value={subject} onChange={(e) => {
                setSubject(e.target.value);
            }}></input>
            <button type="button" onClick={addSubject}>추가</button>
            <ul>{list.map((item, index) => {return <li key={index}>{item}</li>})}</ul>
        </>
    );
}

export default App;