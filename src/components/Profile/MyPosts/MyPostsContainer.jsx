import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextAcrionCreator, clearPostActionCreator } from '../../../redux/profile-reducer'


const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onClearPost = () => {
        props.store.dispatch(clearPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextAcrionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            clearPost={onClearPost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />);

}

export default MyPostsContainer;
