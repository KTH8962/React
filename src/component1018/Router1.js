import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Vote from '../component1018/Vote';
import UseEffect from '../component1017/UseEffect1';
import UseMemo from '../component1017/UseMemo1';
import UseRef from '../component1017/UseRef1';

function Router1(props) {
    return (
        <Router>
        <ul>
            <li><Link to="/">vote컴포넌트</Link></li>
            <li><Link to="/useEffect">useEffect컴포넌트</Link></li>
            <li><Link to="/useMomo">useMomo컴포넌트</Link></li>
            <li><Link to="/useRef">useRef컴포넌트</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Vote />}></Route>
          <Route path='/useEffect' element={<UseEffect />}></Route>
          <Route path='/useMomo' element={<UseMemo />}></Route>
          <Route path='/useRef' element={<UseRef />}></Route>
        </Routes>
      </Router>
    );
}

export default Router1;