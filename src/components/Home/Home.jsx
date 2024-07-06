import React from 'react';
import './Home.css';

const HomeTab = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to DevSquare</h1>
        <p className="subtitle">Connecting Investors and Start-Up Founders</p>
      </header>
      <section className="content">
        <div className="section">
          <h2 className="section-title">About Us</h2>
          <p className="section-description">
            Dev Square is the ultimate platform for start-up founders and investors to connect, collaborate, and grow together. Our mission is to bridge the gap between innovative entrepreneurs and the funding they need to bring their visions to life.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Features</h2>
          <ul className="features-list">
            <li>Interactive Board: Post requests for funding, advice, or partnerships.</li>
            <li>Investor Network: Connect with a wide network of potential investors.</li>
            <li>Start-Up Support: Access resources and guidance from experienced entrepreneurs.</li>
            <li>Blog: Stay updated with the latest news and trends in the start-up ecosystem.</li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-title">Join Us</h2>
          <p className="section-description">
            Whether you're a start-up founder looking for funding and support or an investor seeking the next big opportunity, Dev Square is the place for you. Sign up today and start connecting!
          </p>
          <button className="button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default HomeTab;
