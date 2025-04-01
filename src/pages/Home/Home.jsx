import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 