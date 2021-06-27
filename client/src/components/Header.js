
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar
      style={{ background: "#5a189a", boxShadow: "10px 10px 10px  #9E9E9E" }}
      light
      expand="md"
      className="p-3 mb-5"
    >
      <NavbarBrand>
        <FontAwesomeIcon icon={faHome} mask={["far", "circle"]} color="white" />
      </NavbarBrand>
      <NavbarBrand href="/" style={{ color: "#ffff" }}>
        Byjus Pay
      </NavbarBrand>

      <form className="d-flex w-auto"></form>
    </Navbar>
  );
}

export default Header;