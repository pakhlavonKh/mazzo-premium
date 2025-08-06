import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Story from '../components/Story';
import Cards from '../components/Cards';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import cardsData from '../data/cardsData';

function Home() {
  const cardsRef = React.useRef(null);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Carousel onImageClick={scrollToCards} />
      <Features />
      <Story />
      <Cards homes={cardsData.slice(0, 3)} ref={cardsRef}/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;