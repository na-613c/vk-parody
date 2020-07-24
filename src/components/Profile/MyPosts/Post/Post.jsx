import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCount, photos}) => {
    return (
        <div className={s.item + " padding content"}>
            <div>
                <img className={s.photo}
                     src={photos}
                     alt="photos"/>
            </div>
            <div className={s.content}>
                <div className={s.message}>
                    {message}
                </div>
                <div className={s.like}>
                    {likesCount}
                </div>
            </div>
        </div>
    );
};

export default Post;
