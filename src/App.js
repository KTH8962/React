import React from 'react';
import { RecoilRoot } from 'recoil';
import Counter from './recoil/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './recoil/Test';

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>        
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
