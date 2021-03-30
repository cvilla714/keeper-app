import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
console.log(year);

function Footer() {
  return (
    <footer>
      <p>
        Copyright <FaRegCopyright /> {year}
      </p>
    </footer>
  );
}

export default Footer;
