import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./cards";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
      <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="avatar_img" tel="+123 456 789" email="b@beyonce.com" />
      <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="avatar1" tel="+987 654 321" email="jack@nowhere.com" />
      <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" alt="avatar2" tel="+918 372 574" email="gmail@chucknorris.com" />
    </div>
  );
}

export default App;
