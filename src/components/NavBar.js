import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/leo-logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import toast, { Toaster } from 'react-hot-toast';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export const copyMail = () => {
    var input = document.createElement("input");
    input.setAttribute("value", "leonel.abrante.dev@gmail.com");
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    toast.success('leonel.abrante.dev@gmail.com copied!', {duration: 3000, className: 'toast-message'});
    return result;
  };

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

   

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/leonel-abrante-4a9726206/"><img src={navIcon1} alt='' /></a>
                            <a href="https://github.com/ljat11"><img src={navIcon4} alt='' /></a>
                            {/* <a href="#"><img src={navIcon3} alt='' /></a> */}
                        </div>
                        <Toaster position="top-center"
                            reverseOrder={false} />
                        <button href="#connect" className="vvd" onClick={(copyMail)}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
