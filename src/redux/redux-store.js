import { createStore, combineReducers } from "redux";
import profileReduser from './profile-reducer';
import dialogsReduser from './dialogs-reducer';
import sidebarReduser from './sidebar-reducer';

let reducers = combineReducers({
    profileReduser: profileReduser,
    dialogsReduser: dialogsReduser,
    sidebarReduser: sidebarReduser
})

let store = createStore(reducers);

export default store;