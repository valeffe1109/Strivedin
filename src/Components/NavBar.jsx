import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav, NavDropdown ,Form , FormControl} from 'react-bootstrap'
import './style.css'


class NavBar extends Component {
    state = {}
    render() {
        return (<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#007bb5' }}>
            <Navbar.Brand href="#home"><h1 style={{color:'white'}} className="ml-5">SIn</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
  
                <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    
    </Form>
                </Nav>
                <Nav className='N2'>
                    <Nav.Link className="linkStyle" href="/Home"><FontAwesomeIcon icon="home" fixedWidth /> Home </Nav.Link>
                    <Nav.Link className="linkStyle" href="#pricing"><FontAwesomeIcon icon="users" fixedWidth /> My Network </Nav.Link>
                    <Nav.Link className="linkStyle" href="#pricing"><FontAwesomeIcon icon="briefcase" fixedWidth /> Jobs </Nav.Link>
                    <Nav.Link className="linkStyle" href="#pricing"><FontAwesomeIcon icon="comment" fixedWidth /> Messaging </Nav.Link>
                    <Nav.Link className="linkStyle" href="#pricing"><FontAwesomeIcon icon="bell" fixedWidth /> Notifications </Nav.Link>

                    <NavDropdown
                        title={
                            <span className="text-light my-auto"><FontAwesomeIcon icon="user" fixedWidth />Me</span>
                        }
                        id="nav-dropdown"
                    >
                        <NavDropdown.Item href="/Me">MyProfile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={
                            <span className="text-light my-auto">Work</span>
                        }
                        id="nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="linkStyle" href='Learning'>Learning</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default NavBar;