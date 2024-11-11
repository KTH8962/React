import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, toggleClass } from './reducer3';

function Page() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const isActive = useSelector(state => state.isActive);
    return (
        <div>
            {isLoggedIn ?
                (<div><p>로그인 되었습니다.</p><button type='button' onClick={()=>dispatch(logout())}>로그아웃</button></div>) :
                (<div><p>로그인 해주세요.</p><button type='button' onClick={()=>dispatch(login())}>로그인</button></div>)
            }
            <div>
                <div className={`box ${isActive ? 'active': ''}`}></div>
                <button type='button' onClick={() => dispatch(toggleClass())}>클래스</button>
            </div>
        </div>
    )
}

export default Page
