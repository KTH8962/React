import { useEffect, useState } from "react";
//useEffect => 렌더링이 발생하면 동작한다.
function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>생일</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((item, index) => {
                    return (<tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.email}</td>
                        <td>{item.birthDate}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

function App() {
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState(0);
    const [list, setList] = useState([]);
    
    useEffect(() => {
        async function userList() {
            const res = await fetch("https://jsonplaceholder.org/users");
            const result = await res.json();
            setList(result);
            //console.log(result);
        }
        userList();
        //setMenu(1); -> 예전에는 무한루프에 빠질 수 있었다.
    }, []);
    // menu값이 변경 될 때만 동작한다. -> 같은 값이면 동작 안한다.
    // [menu]가 없으면 모든 렌더링에 반응한다.
    // []은 첫 로드 시에만 실행된다.
    //useEffect(() => {}, []);
    return (
        <>
            <Table list={list}></Table>
            <button type="button" onClick={() => {
                setCount(prev => prev + 1);
            }}>증가</button>
            <button type="button" onClick={() => {setMenu(1)}}>1번 메뉴</button>
            <button type="button" onClick={() => {setMenu(2)}}>2번 메뉴</button>
        </>
    );
}

export default App;