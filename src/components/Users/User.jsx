import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import cn from "classnames"

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={cn("shadow", "padding", s.marginBottom10, s.user)}>
            <div className={s.photo}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={s.userPhoto} alt='test'
                         src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div className={s.info}>
                <div className={s.follow}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>
                            Follow</button>
                    }
                </div>
                <div className={s.name}>Имя : {user.name}</div>
                <div className={s.id}>{user.id && `Пользователь № ${user.id}`}</div>
                <div className={s.status}>{user.status ? `Статус : ${user.status}` : `Статус не задан`}</div>
            </div>
        </div>)
};


export default User;