import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp, setError} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import NotFound from "./components/NotFound/NotFound";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevState && this.props.globalError != null ) {
            alert(this.props.globalError);
            this.props.setError(null);
        }
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
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"}/>}/>

                            <Route path="/dialogs"
                                   render={withSuspense(DialogsContainer)}/>

                            <Route path="/profile/:userId?"
                                   render={withSuspense(ProfileContainer)}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>

                            <Route path="/login"
                                   render={() => <Login/>}/>

                            <Route path="*"
                                   render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
    auth: state.auth.isAuth,
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, setError})
)(App);


let MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default MainApp;