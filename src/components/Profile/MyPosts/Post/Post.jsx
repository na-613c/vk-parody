import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCount, photos}) => {
    return (
        <div className={s.item + " padding content"}>
            <div className={s.content}>
                <img className={s.photo}
                    src={photos}
                    alt="photos"/>
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
