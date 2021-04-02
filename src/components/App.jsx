import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
