import React from "react";
import s from './myPaginator.module.css'

let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    let startPage = 1;

    if (currentPage - 5 < 1) startPage = 1;
    else startPage = currentPage - 5;

    if (currentPage + 10 >= pagesCount) {
        for (let i = 0; i < 5; i++) {
            if (currentPage + i === pagesCount) startPage = currentPage - 10 + i;
        }
    } else startPage = currentPage - 5;

    for (let i = 1; i <= pagesCount; i++) {
        if (i === 1 || i === pagesCount) pages.push(i);
        if (i > startPage && pages.length < 10 && i !== 1 && i !== pagesCount) pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? s.selectedPage : ''}
                             onClick={() => onPageChanged(p)}> -- {p} -- </span>
            })}
        </div>)
};


export default Paginator;