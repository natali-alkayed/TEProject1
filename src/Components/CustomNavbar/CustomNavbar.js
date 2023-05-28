import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    
<>
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <a class="navbar-brand" href="#">Ticket Ease </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/faq">FAQ</a>
      </li>
    
    </ul>
    <NavDropdown title="Login As" id="navbarScrollingDropdown-3" style={{marginLeft:'70%',color:"white"}}>
                <NavDropdown.Item  href="/CustomerLogIn">Customer</NavDropdown.Item>
                <NavDropdown.Item  href="/AgentLogIn">Agent</NavDropdown.Item>
                <NavDropdown.Item  href="/EmpoloyeeLogIn">Employee</NavDropdown.Item>
              </NavDropdown>
  </div>
</Navbar>

</>
    

  );
}

export default CustomNavbar;
