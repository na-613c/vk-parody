import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field autoComplete="off" placeholder={"Login"} name={"login"}
                   component={Input} validate={[required]}/>
        </div>
        <div>
            <Field autoComplete="off" placeholder={"Password"} name={"password"}
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
        console.log(formData)
    };

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

export default Login