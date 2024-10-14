function Header(props) {  
  return (
    <div id="header">
      <div>
        <button type="button" onClick={() => {
          props.printText();
        }}>{props.title}</button>
      </div>
    </div>
  )
}

function Main(props) {
  let list = [];
  props.list.forEach((item, index) => {
    list.push(<li key={index}>{item}</li>);
  });
  return (
    <div id="main">
      여기는 메인
      <ul>
        {list}
        <li>------------</li>
        {          
        props.list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
        }
      </ul>
    </div>
  )
}

function Footer(props) {
  return (
    <div id="footer">
      <div>
        <button type="button" onClick={() => {
          props.printText();
        }}>{props.address}</button>
      </div>
    </div>
  )
}

function App() {
  let subject1 = ["자바", "자바스크립트", "오라클"];
  let subject2 = ["html", "css", "리엑트", "mysql"];
  return (
    <>
      <Header title="자바" printText={()=>{
        console.log("함수 보내기 테스트!");
      }}></Header>
      <Header title="오라클" printText={()=>{
        alert("함수 보내기 테스트2!");
      }}></Header> 
      <Header title="html"></Header>  
      <Main list={subject1}></Main>
      <Main list={subject2}></Main>
      <Footer address="경기도" printText={(text)=>{
        alert(text);
      }}></Footer>
      <Footer address="인천광역시" printText={(text)=>{
        alert(text);
      }}></Footer>
    </>
  );
}

export default App;
