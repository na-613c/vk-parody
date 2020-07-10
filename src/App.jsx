import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader";
import store from "./redux/redux-store";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>

                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>

                        <Route path="/users"
                               render={() => <UsersContainer/>}/>

                        <Route path="/login"
                               render={() => <Login/>}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);


let MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )

};

export default MainApp;