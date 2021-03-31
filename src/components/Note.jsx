import React from "react";

function Note(props) {
  return (
    <div className="note">
      {/* <h1>Title</h1> */}
      <h1>{props.title}></h1>
      {/* <p>content</p> */}
      <p>{props.content}</p>
    </div>
  );
}
export default Note;
