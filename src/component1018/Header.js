import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="header">
      <h1>환영합니다!</h1>
      {user!=null && <p>Heollo, {user.name} - {user.email}</p>}      
    </header>
  );
}

export default Header;
