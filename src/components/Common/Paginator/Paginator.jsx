import React from "react";
import {Pagination} from '@material-ui/lab';
import s from './myPaginator.module.css';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    const handleChangePage = (event, newPage) => {
        onPageChanged(newPage);
    };

    return (
        <div className={"shadow "+s.page}>
                <Pagination
                    boundaryCount={1}
                    variant="outlined"
                    page={currentPage}
                    count={pagesCount}
                    onChange={handleChangePage}
                    siblingCount={5}
                />
        </div>)
};


export default Paginator;