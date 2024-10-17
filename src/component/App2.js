function Header(props) {
    return (
        <div id="header">
            <h1>{props.text}</h1>
        </div>
    );
}

function Body(props) {
    return (
        <>
            <ul>
                {props.list.map((item, index) => {
                    return <li key={index}><button type="button" onClick={()=>{
                        props.printSubject(item);
                    }}>{item}</button></li>
                })}
            </ul>
        </>
    )
}

function Footer(props) {
    return (
        <div id="footer">
            <h2>{props.text}</h2>
        </div>
    )
}

function App() {
    let list = ["자바", "오라클", "html"];
    return (
        <>
            <Header text="Web Header!"></Header>
            <Body list={list} printSubject={(subject) => {
                alert(subject);
            }}></Body>
            <Footer text="Web Footer!"></Footer>
        </>
    );
}

export default App;