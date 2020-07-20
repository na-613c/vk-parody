import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    postData: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: "Hi, how are you", likesCount: 0},
        {id: 3, message: "T_E_S_T", likesCount: 404},
    ]
};

it('length of post should be incremented', () => {
    let acton = addPostActionCreator('my first test');
    let newState = profileReducer(state, acton);

    expect(newState.postData[2].message).toBe("my first test");
});


it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(3);
});









