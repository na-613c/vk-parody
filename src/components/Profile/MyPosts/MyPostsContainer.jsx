// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyPosts from './MyPosts';
import {
    addPostActionCreator,
    clearPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/profile-reducer'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onClearPost: () => {
            dispatch(clearPostActionCreator())
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
