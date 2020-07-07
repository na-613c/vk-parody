import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field autoComplete="off" placeholder={"Email"} name={"email"}
                   component={Input} validate={[required]}/>
        </div>
        <div>
            <Field autoComplete="off" placeholder={"Password"} name={"password"} type={"password"}
                   component={Input} validate={[required]}/>
        </div>
        <div>
            <Field name={"rememberMe"} type="checkbox" component={Input}/> remember me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>

};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.email.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login);