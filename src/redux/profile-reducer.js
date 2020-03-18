const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CLEAR_POST = 'CLEAR-POST'

const profileReduser = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let sizeDialogs = state.postData.length + 1;
            let newPost = {
                id: sizeDialogs,
                message: state.newPostText,
                likesCount: 0
            };

            if (state.newPostText !== "") {
                state.postData.push(newPost);
                state.newPostText = "";
            } else alert("post text is empty")

            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case CLEAR_POST:
            state.newPostText = "";
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextAcrionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const clearPostActionCreator = () => ({ type: CLEAR_POST })

export default profileReduser;