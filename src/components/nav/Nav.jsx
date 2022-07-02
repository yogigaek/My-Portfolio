import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdLibraryBooks } from 'react-icons/md';
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActIveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActIveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActIveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setActIveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        {" "}
        <BiBook />{" "}
      </a>
      <a
        href="#portfolio"
        onClick={() => setActIveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        {" "}
        <MdLibraryBooks />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActIveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <BiMessageSquareDetail />{" "}
      </a>
    </nav>
  );
};

export default Nav;
