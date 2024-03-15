import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Привет всем, я <span className="purple">Васильев Николай </span>
          из <span className="purple"> Нижнего Новгорода, Россия.</span>
            <br />
            Помимо кодинга, я люблю заниматься и другими видами деятельности!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Разработывать прложения на React
            </li>
            <li className="about-activity">
              <ImPointRight /> Разработка базы данных MangoDB, MySQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествовать
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Стремитесь создавать вещи, которые меняют мир к лучшему!"{" "}
          </p>
          <footer className="blockquote-footer">Николай</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
