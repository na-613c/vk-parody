import React, {useEffect} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);


const MyPosts = React.memo(props => {

    let postElements = [...props.postData]
        .reverse()
        .map((post, index) => <Post key={index}
                                    photos={props.photos}
                                    message={post.message}
                                    likesCount={`${post.likesCount} ♥`}/>);

    let addPost = (values) => props.addPost(values.newPostText);

    return (<div>
            <div className="padding shadow">
                <b>You can add a new post:</b>
                <br/>
                <br/>
                <AddNewPostFormReact onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
});

const AddNewPostForm = (props) => {

    // let handleSubmit = (event) => {
    //     props.handleSubmit().bind(this);
    //     event.target.reset();
    // };

    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            <Field component={Textarea}
                   name={'newPostText'}
                   placeholder="enter your post"
                   validate={[required, maxLength300]}
                   className={s.textarea} />
            <button className={s.btnAdd} >Add post</button>
        </form>
    )
};

const AddNewPostFormReact = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

export default MyPosts;
