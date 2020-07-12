import React from 'react';
import s from './Post.module.css';


const Post = ({message, likesCount}) => {
    return (
        <div className={s.item + " padding content"}>
            <div className={s.content}>
                <img
                    src="https://social-network.samuraijs.com/activecontent/images/users/9089/user.jpg?v=6"
                    alt=""/>
                <div className={s.message}>
                    {message}
                </div>
            </div>
            <div className={s.like}>
                {likesCount}
            </div>
        </div>
    );

};

export default Post;
