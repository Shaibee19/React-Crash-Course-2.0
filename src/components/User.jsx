import "./User.css"

  //   const pixels = "3px";

function User({ id, name, email, username }) {
  return (
    <div className="user" style={{ border: `3px solid black` }}>
      <div>{id}</div>
      <div>{name.toUpperCase()}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  );
}

export default User;
