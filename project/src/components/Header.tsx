import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <MapPin className="d-inline-block align-top me-2" />
          UrbanReport
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/report">Signaler</Nav.Link>
            <Nav.Link as={Link} to="/my-reports">Mes Signalements</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};