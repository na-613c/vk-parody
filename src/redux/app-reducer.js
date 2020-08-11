import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const ERROR = 'app/ERROR';

let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case ERROR:
            return {
                ...state,
                globalError: action.error
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const setError = (error) => ({type: ERROR, error});

export const initializeApp = () => (dispatch) => {
    // let promise = dispatch(getAuthUserData());
    dispatch(getAuthUserData());
    dispatch(initializedSuccess());
    // Promise.all([promise])
    //     .then(() => {
    //         dispatch(initializedSuccess());
    //     })
};

export default appReducer;