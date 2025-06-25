import logo from "../logo.svg";
import Title from "../components/Title";
import ToDo from "../components/ToDo";
import Modal from "../components/Modal";
import Counter from "../components/Counter";
import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }

  const [showModal, setShowModal] = useState(false);

  function onToDoDelete() {
    setShowModal(true);
    console.log("onToDoDelete()");
  }

  function onConfirmCancel() {
    setShowModal(false);
    console.log("clicked");
  }

  function renderUsers() {
    return users.map((user) => (
      <Link to={`/users/${user.id}`} key={user.id}>
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ));
  }

  function renderSkeleton() {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("ONLY on mount");
  }, []);

  return (
    <div>
      {users.length ? renderUsers() : renderSkeleton()}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>My name is Shai</p>
          <Title />
          <div className="">
            <input
              type="text"
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
            <button onClick={() => setShowModal(true)}>Add ToDo</button>
          </div>
          <div className="todo__wrapper">
            <ToDo
              onToDoDelete={onToDoDelete}
              title="Finish Frontend Simplified"
              paragraph="Code along with Frontend Simplified step-by-step."
            />
            <ToDo
              onToDoDelete={onToDoDelete}
              title="Finish Intervied Section"
              paragraph="Finish every interview question in the next 6 weeks."
            />
            <ToDo
              onToDoDelete={onToDoDelete}
              title="Land a $100K Job"
              paragraph="Apply to 100 Jobs"
            />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {showModal && (
          <Modal
            onConfirm={onConfirmCancel}
            onCancel={onConfirmCancel}
            title="Are you sure?"
          />
        )}
      </div>
    </div>
  );
}

export default Home;
