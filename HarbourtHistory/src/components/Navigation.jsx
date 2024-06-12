/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import  Container  from 'react-bootstrap/Container';
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';


const Navigation = ({navigate}) => {
  return (
    <Navbar expand="lg" className='navigation-bar'>
      <Container className='align-items-center'>
        <Navbar.Brand>
          <img style={{width: '30px', height: '30px', marginRight: '0.75rem'}} src='https://img.icons8.com/?size=100&id=80717&format=png&color=000000'></img>
        </Navbar.Brand>
        <Navbar.Brand href="#home">Harbourt History</Navbar.Brand>
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