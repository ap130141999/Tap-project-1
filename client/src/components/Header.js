import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

function Header() {
  return (
    <Navbar color="primary" light expand="md" className="p-2 mb-4">
      <NavbarBrand href="/" style={{ color: "#ffff" }}>
        Byjus Pay
      </NavbarBrand>
      <form className="d-flex w-auto">
      </form>
    </Navbar>
  );
}

export default Header;
