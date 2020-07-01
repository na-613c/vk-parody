import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.postData.map(
        (post, index) => <Post key={index} message={post.message} likesCount={`${post.likesCount} ♥`}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let clearPost = () => {
        props.onClearPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className="padding">
            My Post
            <br/>
            <div>
                <textarea ref={newPostElement} cols="129" rows="4"
                          onChange={onPostChange}
                          value={props.newPostText}/>
                <br/>
                <button onClick={addPost}>Add post</button>
                <button onClick={clearPost}>Remove</button>
            </div>
            <br/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
