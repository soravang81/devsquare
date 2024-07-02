import Card from "./Card/Card";
import React from "react";
import "./Card/Card.css";

export default function Cards() {
  return (
    <div id="outer-div">
      <div className="main-cards">
        <h1 className="cards-h1">Public Communities</h1>
        <div className="cards-div">
          <Card title="Team XO">
            🍤 Headless CMS and 🍱Composable eCommerce! Welcome to the
            professional community discussing the key approaches of the modern
            web 🌶
          </Card>
          
          <Card title="Head Hunters">
            An independent Squad for discussions, questions and answers about
            Next.JS.
          </Card>

          <Card title="Calshers">
            The official @developer squad, follow our dev life at a
            fast-growing startup, learn web development, life tips as an
            engineer and more! Join me on a dev adventure!
          </Card>

          <Card title="5911">
            This is a squad where I organize my content and my upcoming events
            on different platforms
          </Card>

        </div>
      </div>
    </div>
  );
}
