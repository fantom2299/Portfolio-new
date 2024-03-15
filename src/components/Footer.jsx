import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillSkype,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Дизайн и разработка Васильева Николая</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} ВН</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="email: fantom2299@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineGoogle />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://t.me/feliks2299"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="live:fantom2299"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
