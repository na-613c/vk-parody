import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <hr/>
            <span>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={s.userPhoto} alt='test'
                 src={user.photos.small != null ? user.photos.small : userPhoto}/>
                          </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => unfollow(user.id)}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => follow(user.id)}>
                                Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <div>Имя : {user.name}</div>
                    <div>{user.id && `Пользователь № ${user.id}`}</div>
                    <div>{user.status ? `Статус : ${user.status}` : `Статус не задан`}</div>
                </span>
            <hr/>
        </div>)
};


export default User;