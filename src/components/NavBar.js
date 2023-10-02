import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {

  let prevScrollpos = window.scrollY;
  window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("my-navbar").style.top = "0";
    } else {
      document.getElementById("my-navbar").style.top = "-50px";
    }
    document.documentElement.style.setProperty('--nav-height', document.getElementById("my-navbar").offsetHeight);
    prevScrollpos = currentScrollPos;
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top" id="my-navbar">
      <Container>
        <Navbar.Brand href="#home" id='fr-brand'><span id='logo-font'>Amazonian Tiles</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}