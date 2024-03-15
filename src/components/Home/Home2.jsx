import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillSkype,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ПОЗВОЛЬТЕ <span className="purple"> ПРЕДСТАВИТЬСЯ </span>
            </h1>
            <p className="home-about-body">
              Я влюбился в программирование и, кажется, хоть чему-то научился...
              🤷‍♂️
              <br />
              <br />Я владею такими классическими языками, как
              <i>
                <b className="purple"> Html, CSS, Javascript. </b>
              </i>
              <br />
              <br />
              Сфера моих интересов - создание новых &nbsp;
              <i>
                <b className="purple">веб-технологий и продуктов. </b>
              </i>
              <br />
              <br />
              По мере возможности я также использую свою страсть к разработке
              продуктов на <b className="purple">Node.js</b> и
              <i>
                <b className="purple">
                  {" "}
                  современных Javascript-библиотеках и фреймворках,
                </b>
              </i>
              &nbsp; таких как
              <i>
                <b className="purple"> React.js и Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>НАЙДИТЕ МЕНЯ НА САЙТЕ</h1>
            <p>
              Не стесняйтесь <span className="purple">связаться </span>со мной
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="email: fantom2299@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineGoogle />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://t.me/feliks2299"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              

              <li className="social-icons">
                <a
                  href="live:fantom2299"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
            </ul>

            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
