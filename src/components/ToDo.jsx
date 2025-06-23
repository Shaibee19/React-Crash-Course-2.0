import "./ToDo.css";

function ToDo({ title, paragraph }) {
  function deleteToDo() {
    console.log("deleteToDo", title.toUpperCase());
  }

  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={deleteToDo}>Delete</button>
    </div>
  );
}

export default ToDo;
