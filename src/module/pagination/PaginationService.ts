import { range } from 'lodash';


export const getPageNumbers = (totalNumberOfRecord: number, pageSize: number) => {
    let pageCount = Math.ceil(totalNumberOfRecord / pageSize);
    if (pageCount === 0 || pageCount === 1) return null;
    return range(1, pageCount + 1);
}

export const getPageNumberClass = (page: number, currentPage: number) => {
    return (page === currentPage) ? 'page-item active' : 'page-item';
}