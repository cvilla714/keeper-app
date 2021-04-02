import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";

function App() {
  const [notas, setNotas] = useState([]);

  function addNote(note) {
    // console.log(note);
    setNotas((prevNotas) => {
      return [...prevNotas, note];
    });
  }

  function deleteNotes(id) {
    console.log("Delete was triggered");
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notas.map((notasItem) => {
        return <Note title={notasItem.title} content={notasItem.content} onDelete={deleteNotes} />;
      })}

      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} onDelete={deleteNotes} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
