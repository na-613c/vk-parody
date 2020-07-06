import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";

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
                return <span key={p} className={props.currentPage === p && s.selectedPage}
                             onClick={() => props.onPageChanged(p)}> -- {p} -- </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <hr/>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={s.userPhoto} alt='test'
                                 src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.unfollow(u.id)}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.follow(u.id)}>
                                Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>Имя : {u.name}</div>
                    <div>{u.status ? `Статус : ${u.status}` : `Статус не задан`}</div>
                </span>
            <hr/>
        </div>)}
    </div>
};


export default Users;