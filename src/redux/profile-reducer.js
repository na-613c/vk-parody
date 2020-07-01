const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CLEAR_POST = 'CLEAR-POST';

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you", likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let sizeDialogs = state.postData.length + 1;
            let newPost = {
                id: sizeDialogs,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case CLEAR_POST: {
            return {
                ...state,
                newPostText: ''
            };
        }
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const clearPostActionCreator = () => ({type: CLEAR_POST});

export default profileReducer;