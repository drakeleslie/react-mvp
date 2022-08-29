import React, { useState } from "react";

const Header = ({ logIn, loggedIn, currentUser }) => {
  const [user, setUser] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    logIn(user);
    setUser("");
  };

  return (
    <div id="hd">
      <div className="banner">
        <div className="bnInfo">FJ</div>
      </div>
      <div className="pageSelection">
        <button className="pageChoice">Exercises</button>
        <button className="pageChoice">Journal</button>
      </div>
      <div className="logInDiv">
        {loggedIn ? (
          <div className="currentUserDiv">
            <div className="userNameDiv">{currentUser.name}</div>
          </div>
        ) : (
          <form className="inputLogIn" onSubmit={onSubmit}>
            <input
              id="userLogIn"
              type="text"
              placeholder="Who are you?"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <button id="logInBtn">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
