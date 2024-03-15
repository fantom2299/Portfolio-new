import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hram from "../../Assets/Projects/hram.png";
import stoveman from "../../Assets/Projects/stoveman.png";
import irbis from "../../Assets/Projects/irbis.png";
import movie_search from "../../Assets/Projects/movie_search.png";
import intellectpro from "../../Assets/Projects/intellectpro.png";
import like from "../../Assets/Projects/like.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Мои последние <strong className="purple">Работы </strong>
        </h1>
        <p style={{ color: "white" }}>
        Вот несколько проектов, над которыми я работал в последнее время.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie_search}
              isBlog={false}
              title="Поиск фильмов"
              description="Учебный проект на JS"
              ghLink="https://fantom2299.github.io/my-films"
              demoLink="https://fantom2299.github.io/my-films/index.html/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={like}
              isBlog={false}
              title="Счетчик лайков"
              description="Учебный проект на React."
              ghLink="https://github.com/fantom2299/fantom2299.gidhub.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={irbis}
              isBlog={false}
              title="Театральная студия"
              description="Сайт создан для детской Театральной студии Ирбис."
              demoLink="https://irbis-studio.ru/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hram}              
              title="Русский Храм"
              description="Данный проект создан для компании которая специализируется на строительве провославных храмов и часовен."
              demoLink="https://rushram.ru/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intellectpro}              
              title="ИнтеллектПРО"
              description="Создание многостраничного сайта для компании которая занимаеться установкой систем безопастности для компаний и частных лиц."
              demoLink="https://intellekt-pro.ru/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stoveman}              
              title="Печник"
              description="Данный сайт создан компаии которая занимаеться печами."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://mag-pechi.ru/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
