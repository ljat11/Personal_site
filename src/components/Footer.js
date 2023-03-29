import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/leo-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center align-items-center text-sm-end ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/leonel-abrante-4a9726206/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ljat11" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
