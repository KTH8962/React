import { useState } from "react";
import Input from "./component1017/Input";
import Result2 from "./component1017/Result2";

function App() {
  const [data, setData] = useState(0);
  //const 
  return (
    <>
      <Result2 result={data}/>
      <Input setData={setData} />
    </>
  );
}

export default App;
