import Card from "./Card/Card";
import React from "react";
import "./Card/Card.css";
// @ts-ignore
import robotImg from '../assets/robot.webp';
// @ts-ignore
import teamxoImg from '../assets/teamxo.webp';
// @ts-ignore
import phpImg from '../assets/php.webp';
// @ts-ignore
import nextjsImg from '../assets/nextjs.webp';

export default function Cards() {
  return (
    <div id="outer-div">
      <div className="main-cards">
        <h1 className="cards-h1">Public Communities</h1>
        <div className="cards-div">
          <Card title="Team XO" image={teamxoImg}>
            Headless CMS and Composable eCommerce! Welcome to the
            professional community discussing the key approaches of the modern
            web and app development and blockchain. 
          </Card>
          
          <Card title="Head Hunters" image={nextjsImg}>
            An independent Squad for discussions, questions and answers about
            Next.JS. This is a squad where we organize our content and upcoming events
            on different platforms.
          </Card>

          <Card title="Calshers" image={robotImg}>
            The official @developer squad, follow our dev life at a
            fast-growing startup, learn web development, life tips as an
            engineer and more! Join me on a dev adventure!
          </Card>

          <Card title="Tech Wizards" image={phpImg}>
            Welcome to PHP Dev, a dedicated space for sharing knowledge about PHP 
            and its ecosystem (only PHP directly related). Help us find good articles and blogposts.
          </Card>

        </div>
      </div>
    </div>
  );
}
