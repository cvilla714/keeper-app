import React from "react";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>
      {/* <h2>Beyonce</h2> */}
      <h2>{props.name}</h2>
      <div className="lineup">
        {/* <img src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="avatar_img" /> */}
        <img src={props.img} alt="" />
        {/* <p>+123 456 789</p> */}
        <p>{props.tel}</p>
        {/* <p>b@beyonce.com</p> */}
        <p>{props.email}</p>
      </div>

      {/* <h2>Jack Bauer</h2>
      <img src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="avatar_img" />
      <p>+987 654 321</p>
      <p>jack@nowhere.com</p>

      <h2>Chuck Norris</h2>
      <img src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" alt="avatar_img" />
      <p>+918 372 574</p>
      <p>gmail@chucknorris.com</p> */}
    </div>
  );
}

export default Card;
