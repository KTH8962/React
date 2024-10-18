import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Main() {
  const {user, login, logout} = useContext(UserContext);
  return (
    <main className="main">      
      <button type='button' onClick={() => {
        if(user == null) {
          login();
        } else {
          logout();
        }
      }}>
        {user == null ? "로그인" : "로그아웃"}
      </button>      
      <p>{user == null ? `로그인하세요` : `환영합니다!, ${user.name} 님! 로그인 되었습니다.`}</p>      
    </main>
  );
}

export default Main;
