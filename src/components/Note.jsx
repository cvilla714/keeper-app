import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {/* <h1>Title</h1> */}
      <h1>{props.title}</h1>
      {/* <p>content</p> */}
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
