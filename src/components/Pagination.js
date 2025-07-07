// Pagination.js
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            to={`/catalog?page=${page}`}
            className={`page-link ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
