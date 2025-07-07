import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Homes from '../components/Cards';
import Pagination from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import homesData from '../data/homesData';

function Catalog() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;

  const pageSize = 6;
  const totalPages = Math.ceil(homesData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedHomes = homesData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Homes homes={paginatedHomes} />
      <Pagination currentPage={page} totalPages={totalPages} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Catalog;
