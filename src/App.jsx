// import logo from "./logo.svg";
import "./App.css";
// import Title from "./components/Title";
// import ToDo from "./components/ToDo";
// import Modal from "./components/Modal";
// import Counter from "./components/Counter";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";

function App() {
  // const [showModal, setShowModal] = useState(false);

  // function onToDoDelete() {
  //   setShowModal(true);
  //   console.log("onToDoDelete()");
  // }

  // function onConfirmCancel() {
  //   setShowModal(false);
  //   console.log("clicked");
  // }

  // useEffect(() => {
  //   console.log("ONLY on mount");
  // }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>My name is Shai</p>
//   <Title />
//   <div className="">
//     <input
//       type="text"
//       onChange={(event) => {
//         console.log(event.target.value);
//       }}
//     />
//     <button onClick={() => setShowModal(true)}>Add ToDo</button>
//   </div>
//   <div className="todo__wrapper">
//     <ToDo
//       onToDoDelete={onToDoDelete}
//       title="Finish Frontend Simplified"
//       paragraph="Code along with Frontend Simplified step-by-step."
//     />
//     <ToDo
//       onToDoDelete={onToDoDelete}
//       title="Finish Intervied Section"
//       paragraph="Finish every interview question in the next 6 weeks."
//     />
//     <ToDo
//       onToDoDelete={onToDoDelete}
//       title="Land a $100K Job"
//       paragraph="Apply to 100 Jobs"
//     />
//   </div>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// {showModal && (
//   <Modal
//     onConfirm={onConfirmCancel}
//     onCancel={onConfirmCancel}
//     title="Are you sure?"
//   />
// )}
// </div>
