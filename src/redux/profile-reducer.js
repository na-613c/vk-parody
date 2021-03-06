import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setError} from "./app-reducer";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const LOADING_PROFILE_SUCCESS = 'profile/LOADING_PROFILE_SUCCESS';


let initialState = {
    postData: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: "Hi, how are you", likesCount: 1},
        {id: 3, message: "T_E_S_T", likesCount: 404},
    ],
    profile: null,
    status: '',
    isLoadingProfile: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        case LOADING_PROFILE_SUCCESS:
            return {
                ...state,
                isLoadingProfile: action.isLoading
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const loadingProfileSuccess = (isLoading) => ({type: LOADING_PROFILE_SUCCESS, isLoading});

export const deleteUserPost = (postId) => (dispatch) =>{
    dispatch(deletePost(postId));
};
export const addUserPost = (newPostText) => (dispatch) =>{
    dispatch(addPostActionCreator(newPostText));
};
export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(loadingProfileSuccess(true));
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    dispatch(loadingProfileSuccess(false));

};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        dispatch(setError(null));
    } else {
        dispatch(setError('updateStatus'+ response.data.messages[0] + ''));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess('savePhoto1'+response.data.data.photos));
        dispatch(setError(null));
    } else {
        dispatch(setError('savePhoto2'+ response.data.messages[0] + ''));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;