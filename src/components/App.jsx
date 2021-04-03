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
    setNotas((prevNotas) => {
      return prevNotas.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notas.map((notasItem, index) => {
        return <Note key={index} id={index} title={notasItem.title} content={notasItem.content} onDelete={deleteNotes} />;
      })}

      {/* {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
