import { useState, useEffect } from "react";
import Header from "./components/Header";
import Exercises from "./components/Exercises";
import Journal from "./components/Journal";

function App() {
  const [loggedIn, stateLogIn] = useState(false);

  const [currentUser, getUser] = useState();

  const [list, getList] = useState();

  const [journal, getJournal] = useState();

  //fetchs exercise data
  useEffect(() => {
    fetch("http://localhost:8000/fj/exercises")
      .then((res) => res.json())
      .then((json) => {
        getList(json);
        console.log(json);
      });
  }, []);

  //fetch journal data
  useEffect(() => {
    fetch(`http://localhost:8000/fj/journal`)
      .then((res) => res.json())
      .then((json) => {
        getJournal(json);
        console.log(json);
      });
  }, []);

  //retrieves list of users and logins
  const handleLogin = (user) => {
    fetch("http://localhost:8000/fj/all")
      .then((res) => res.json())
      .then((userList) => {
        for (let userName of userList) {
          if (user === userName.name) {
            stateLogIn(true);
            console.log(userList);
            console.log(userName);
            getUser(userName);
            break;
          }
        }
      });
  };

  //post lift to journal
  //const sendLift = (list) => {};

  if (!list || !journal) return <h1></h1>;
  return (
    <>
      <Header
        logIn={handleLogin}
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      <div className="mainPage">
        <Exercises list={list} currentUser={currentUser} />
        <Journal journal={journal} currentUser={currentUser} />
      </div>
    </>
  );
}

export default App;
