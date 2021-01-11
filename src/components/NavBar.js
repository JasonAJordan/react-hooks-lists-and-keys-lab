import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavElements = links.map((ele) => {
    return <a key={ele} href={'#' + ele} > {ele} </a>
  })
  return <nav>{NavElements}</nav>;
}

export default NavBar;
