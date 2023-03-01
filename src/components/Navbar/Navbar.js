import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerAniIcon from './Hamburger/Hamburger';
import { ReactComponent as NavLogo } from './navbrand.svg';
import './Navbar.css';
export default function Navbaar({dimension}) {
    
  const [navHeight, setNavHeight] = dimension;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(()=>{
    const navbar = document.querySelector('.navbar');
    const height = navbar.offsetHeight;
    setNavHeight(height);
  }, []);
  
 

  useEffect(()=>{
    
    const checkCollapseNavbar = (e)=>{

        if(navRef.current && !navRef.current.contains(e.target) && window.innerWidth <992 && isOpen){
            navRef.current.querySelector('.navbar-toggler').click();
        }
        const t = e.target;
        if((t.localName === 'svg' || t.localName === 'path' || t.getAttribute('href') === '#home') && navRef.current.contains(t) && isOpen){
          navRef.current.querySelector('.navbar-toggler').click();
        }
    }
    document.addEventListener('mouseup', checkCollapseNavbar);
    return ()=>{
        document.removeEventListener('mouseup', checkCollapseNavbar);
    }
  }, [navRef, isOpen]);

  //functions

  

  return (
    <Navbar onToggle={()=>{setIsOpen(!isOpen)}} ref={navRef} fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid >
        <Navbar.Brand href="#home">
        <NavLogo className='nav-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <HamburgerAniIcon clickState={[isOpen, setIsOpen]}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="#">4 bands</Nav.Link>
           <Nav.Link href="#">5 bands</Nav.Link>
           <Nav.Link href="#">6 bands</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

