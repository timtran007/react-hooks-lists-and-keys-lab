import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map(link => {
    let anchorNav = '#' + link
    return(<a href={anchorNav} key={link}>{link}</a>)
  })

  return <nav>{navItems}</nav>;
}

export default NavBar;
