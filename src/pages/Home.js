import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Story from '../components/Story';
import Homes from '../components/Cards';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import homesData from '../data/homesData';

function Home() {

  const scrollToHomes = () => {
    homesData.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Carousel onImageClick={scrollToHomes} />
      <Features />
      <Story />
      <Homes homes={homesData.slice(0, 3)}/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;