// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reducer'
import {connect} from "react-redux";
import defaultPhotos from "../../../assets/images/user.jpg"

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        photos: (!state.profilePage.profile || !state.profilePage.profile.photos.large) ? defaultPhotos : state.profilePage.profile.photos.large
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
