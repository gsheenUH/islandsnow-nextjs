'use client';

import { Nav, NavDropdown } from 'react-bootstrap';

const MiddleMenu = () => (
  <Nav className="justify-content-center py-3">
    <NavDropdown title="MEN">
      <NavDropdown.Item />
    </NavDropdown>
    <NavDropdown title="WOMEN">
      <NavDropdown.Item />
    </NavDropdown>
    <NavDropdown title="KIDS">
      <NavDropdown.Item />
    </NavDropdown>
    <NavDropdown title="BRANDS">
      <NavDropdown.Item />
    </NavDropdown>
    <Nav.Link>SEARCH</Nav.Link>
  </Nav>
);

export default MiddleMenu;
