import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [loggedIn, stateLogIn] = useState(false);

  const [currentUser, getUser] = useState();

  const handleLogin = (user) => {
    fetch("http://localhost:8000/fj/all")
      .then((res) => res.json())
      .then((userList) => {
        for (let userName of userList) {
          if (user === userName.name) {
            stateLogIn(true);
            console.log(userList);
            console.log(userName);
            console.log(user);
            getUser(userName);
            break;
          }
        }
      });
  };

  return (
    <>
      <Header
        logIn={handleLogin}
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      <div className="mainPage"></div>
    </>
  );
}

export default App;
