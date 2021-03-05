import { ArrowDropDown, ArrowDropUp, ChevronRight } from '@material-ui/icons';
import React, { useState } from 'react';
import './PaginationControl.scss';

interface Props {
    currentPage: number,
    lastPage: number,
    setPage: (nextPage: number) => void
}


export const PaginationControl = ({ currentPage, lastPage, setPage }: Props) => {
    const [pageControl, setPageControl] = useState(currentPage);

    return <div className="pagination-control-root">
        <span>Strona: {currentPage}</span>
        <button className="icon-button"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= lastPage}>
            <ArrowDropUp />
        </button>

        <button className="icon-button"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage <= 1}>
            <ArrowDropDown />
        </button>

        <span>Przejdź do strony</span>
        <input
            type="number"
            value={pageControl}
            onChange={e => setPageControl(parseInt(e.target.value))} />
        
        <button 
            className="icon-button"
            onClick={() => setPage(pageControl)}
            disabled={pageControl < 1 
            || pageControl > lastPage 
            || pageControl === currentPage}>
            <ChevronRight/>
        </button>
    </div>
}