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
      <li class="nav-item">
        <a class="nav-link" href="/aboutus">About Us</a>
      </li>
    </ul>
    <NavDropdown title="Login As" id="navbarScrollingDropdown-3" style={{marginLeft:'70%',color:"white"}}>
                <NavDropdown.Item  href="/CustomerLogIn">Customer</NavDropdown.Item>
                <NavDropdown.Item  href="/EmpoloyeeLogIn">Agent</NavDropdown.Item>
                <NavDropdown.Item  href="/AgentLogIn">Employee</NavDropdown.Item>
              </NavDropdown>
  </div>
</Navbar>

</>
    
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //   <Navbar.Brand href="#home">Ticket Ease</Navbar.Brand>

    //   <Nav className="me-auto">
    //     <Nav.Link href="/">Home</Nav.Link>

    //       <Nav.Link href="/faq">FAQ</Nav.Link>
    //       <Nav.Link href="/aboutus">About Us</Nav.Link>
    //       <Nav.Link href="#">Contact Us</Nav.Link>
    //       <NavDropdown title="Log In" id="navbarDropdownMenuLink">
    //         <NavDropdown.Item href="logincustomer">Log in as customer </NavDropdown.Item>
    //         <NavDropdown.Item href="loginagent">Log in as agent </NavDropdown.Item>
    //         <NavDropdown.Item href="loginemployee">Log in as employee </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
}

export default CustomNavbar;
