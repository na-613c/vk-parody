// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyPosts from './MyPosts';
import {addUserPost, deleteUserPost} from '../../../redux/profile-reducer'
import {connect} from "react-redux";
import defaultPhotos from "../../../assets/images/user.jpg"

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        photos: (!state.profilePage.profile || !state.profilePage.profile.photos.large) ? defaultPhotos : state.profilePage.profile.photos.large
    }
};

const MyPostsContainer = connect(mapStateToProps, {addUserPost, deleteUserPost})(MyPosts);

export default MyPostsContainer;
