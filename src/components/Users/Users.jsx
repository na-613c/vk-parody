import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let startPage = 1;

    if (props.currentPage - 5 < 1) startPage = 1;
    else startPage = props.currentPage - 5;

    if (props.currentPage + 10 >= pagesCount) {
        for (let i = 0; i < 5; i++) {
            if (props.currentPage + i === pagesCount) startPage = props.currentPage - 10 + i;
        }
    } else startPage = props.currentPage - 5;

    for (let i = 1; i <= pagesCount; i++) {
        if (i === 1 || i === pagesCount) pages.push(i);
        if (i > startPage && pages.length < 10 && i !== 1 && i !== pagesCount) pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => props.onPageChanged(p)}> -- {p} -- </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto}
                             src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt='test'/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>
                                Unfollow
                            </button> :
                            <button onClick={() => props.follow(u.id)}>
                                Follow
                            </button>
                        }
                    </div>
                </span>
            <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                </span>
        </div>)}
    </div>
};


export default Users;