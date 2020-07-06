import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let postElements = props.postData.map(
        (post, index) => <Post key={index} message={post.message} likesCount={`${post.likesCount} ♥`}/>);

    let addPost = (values) => props.addPost(values.newPostText);

    return (
        <div className="padding">
            My Post
            <br/>
            <AddNewPostFormReact onSubmit={addPost}/>
            <br/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"}
                   name={'newPostText'}
                   cols="129" rows="4"
                   placeholder="enter your post"/>
            <br/>
            <button>Add post</button>
        </form>
    )
};

const AddNewPostFormReact = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

export default MyPosts;
