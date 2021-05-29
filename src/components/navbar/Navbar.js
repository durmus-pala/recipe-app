import React, { useState } from "react";
import { Hamburger, Logo, Menulink, Nav, Menu } from "./navbarStyles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>{"ed8en />"}</i>
        <span>reipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          to={{ pathname: "https://github.com/durmus-pala" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </MenuLink>
      </Menu>

      <h2>Navbar</h2>
    </Nav>
  );
}
