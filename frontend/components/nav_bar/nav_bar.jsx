import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  let display;
  if(currentUser){
     display = (
      <div>
        <p>Hello, {currentUser.name}</p>
        <button className="btn" onClick={logout}>Log Out</button>
      </div>
    );
  }else{
     display = (
      <div>
        <Link className="btn" to="/signup">Sign Up </Link>
      </div>
    )
  }

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
