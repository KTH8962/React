import React from 'react';
import { Provider } from 'react-redux';
import store3 from './redux/store3';
import Page from './redux/Page';
// import { RecoilRoot } from 'recoil';
// import Counter from './recoil/Counter';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Test from './recoil/Test';

function App() {

  return (
    // <RecoilRoot>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Counter />}/>
    //       <Route path="/test" element={<Test />}/>
    //     </Routes>        
    //   </BrowserRouter>
    // </RecoilRoot>
    <Provider store={store3}>
      <Page/>
    </Provider>
  );
}

export default App;
