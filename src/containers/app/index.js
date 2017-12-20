import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Nav, Navbar, NavItem} from 'react-bootstrap';
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <Navbar inverse staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Redux-Starter</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/about-us">About</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    <div className="container">
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
    </div>

  </div>
)

export default App
