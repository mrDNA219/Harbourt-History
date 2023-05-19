/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = ({navigate}) => {
  return (
    <Navbar bg="light" expand="lg" className='border'>
      <Container className='align-items-center'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/')}>Welcome</Nav.Link>
            <Nav.Link onClick={() => navigate('/whatsnew')}>What's New</Nav.Link>
            <Nav.Link onClick={() => navigate('/stories')}>Stories</Nav.Link>
            <Nav.Link onClick={() => navigate('/descendancy')}>Descendency</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;