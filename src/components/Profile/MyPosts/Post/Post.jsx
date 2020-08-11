import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCount, photos, deleteUserPost, id}) => {
    const deletePost = () => deleteUserPost(id);

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
                <svg onClick={deletePost} className={s.del} xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'>
                    <path
                        d='M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z'/>
                </svg>
            </div>
        </div>
    );
};

export default Post;
