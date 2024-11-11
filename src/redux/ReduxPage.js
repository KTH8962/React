import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, toggleClass } from './reducer2';

function ReduxPage(props) {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);
    const isActive = useSelector(state => state.isActive);

    return (
        <div>
            {isLogged ? 
                (<div>로그인되었습니다.<br/><button type='button' onClick={() => dispatch(logout())}>로그아웃</button></div>):
                (<div>로그인 해주세요.<br/><button type='button' onClick={() => dispatch(login())}>로그인</button></div>)
            }
            <div>
                <div className={`box ${isActive ? 'active': ''}`}>박스</div>
                <button type='button' onClick={() => dispatch(toggleClass())}>
                    {isActive? '클래스 제거': '클래스 추가'}
                </button>
            </div>
        </div>
    );
}

export default ReduxPage;