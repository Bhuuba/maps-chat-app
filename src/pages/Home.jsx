import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="home">
    <h1 className="page-title">City Chat</h1>
    <p className="text">
      Join local conversations and discover chats near you. Choose a city on the
      map or browse popular regions.
    </p>
    <Link className="btn" to="/register">Get Started</Link>
  </section>
);

export default Home;
