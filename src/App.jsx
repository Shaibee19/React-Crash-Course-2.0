import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import ToDo from "./components/ToDo";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Shai</p>
        <Title />
        <div className="">
          <input type="text" onChange={(event) => {
            console.log(event.target.value)
          }} />
          <button>Add ToDo</button>
        </div>
        <div className="todo__wrapper">
          <ToDo
            title="Finish Frontend Simplified"
            paragraph="Code along with Frontend Simplified step-by-step."
          />
          <ToDo
            title="Finish Intervied Section"
            paragraph="Finish every interview question in the next 6 weeks."
          />
          <ToDo title="Land a $100K Job" paragraph="Apply to 100 Jobs" />
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
      <Modal title="Are you sure?" />
    </div>
  );
}

export default App;
