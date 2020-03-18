import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextAcrionCreator, clearPostActionCreator } from '../../../redux/profile-reducer'


const MyPosts = (props) => {

    let postElements = props.postData.map((post, index) => {
        return (
            <div key={index}>
                <Post message={post.message} likesCount={`${post.likesCount} ♥`} />
            </div>
        );
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let clearPost = () => {
        props.dispatch(clearPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextAcrionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className="padding" >
            My Post
            <br />
            <div>
                <textarea ref={newPostElement} cols="129" rows="4"
                    onChange={onPostChange}
                    value={props.newPostText} />
                <br />
                <button onClick={addPost}>Add post</button>
                <button onClick={clearPost}>Remove</button>
            </div>
            <br />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );

}

export default MyPosts;
