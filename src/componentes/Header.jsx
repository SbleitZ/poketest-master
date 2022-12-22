
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
  return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand style={{marginLeft: "12px"}} href="/">PokeTest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/SbleitZ/poketest-master">Repositorio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;