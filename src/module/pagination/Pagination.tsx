import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getPageNumbers, getPageNumberClass } from './PaginationService'


const Pagination: FC<Props> = ({ totalNumberOfRecord, currentPage, pageSize, onPageChange }) => {
  const pages = getPageNumbers(totalNumberOfRecord, pageSize)

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pages && pages.map(page => (
          <li className={getPageNumberClass(page, currentPage)} key={page}>
            <Link className='page-link' to='/users' onClick={e => onPageChange(page)}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};



interface Props {
  totalNumberOfRecord: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (p: number) => void;
}

export default Pagination;
