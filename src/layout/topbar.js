import React from 'react';

const Topbar = ({token}) => {
  const logout = ()=>{
    return window.ipcRenderer.send('deleteToken','ping');
  }
    return (
        <div className="container-fluid" id="navBar">
        <nav className="l-navbar">
          <span className="l-navbar_logo" >
          لبسك .كوم
          </span>
          <ul className="l-navbar_navigation">
           {token &&  <li><a onClick={logout}>تسجيل خروج</a></li> }
          </ul>
        </nav>
      </div>

    );
};

export default Topbar;