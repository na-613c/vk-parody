import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const MyPosts = React.memo(props => {

    let postElements = [...props.postData]
        .reverse()
        .map(
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
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newPostText'}
                   placeholder="enter your post"
                   validate={[required, maxLength10]}/>
            <br/>
            <button>Add post</button>
        </form>
    )
};

const AddNewPostFormReact = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

export default MyPosts;
