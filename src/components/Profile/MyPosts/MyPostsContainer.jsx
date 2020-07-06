// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reducer'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
