import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({captchaUrl, handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            {CreateField("Email", "email", Input, [required])}
            {CreateField("Password", "password", Input, [required], {type: "password"})}
            {CreateField(null, "rememberMe", Input, null, {type: "checkbox"}, "remember me")}
            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && CreateField("Symbols from image", "captcha", Input, [required], {})}
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Log in</button>
            </div>
        </form>
    </div>
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.email.rememberMe, formData.captcha);
    };

    if (isAuth) return <Redirect to={"/profile"}/>;

    return <div className="content padding">
        <br/>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login, logout})(Login);