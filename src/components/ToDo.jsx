import "./ToDo.css";

function ToDo({ title, paragraph, onToDoDelete }) {
    return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <button onClick={onToDoDelete}>Delete</button>
    </div>
  );
}

export default ToDo;
