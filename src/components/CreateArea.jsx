import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpande] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpande(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" value={note.title} onChange={handleChange} placeholder="Title" /> : null}
        <textarea name="content" value={note.content} onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
