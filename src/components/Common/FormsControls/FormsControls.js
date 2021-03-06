import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import cn from 'classnames'


const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <span className={cn(s.formControl,{[s.error]:hasError})}>
            {children}
            {hasError && <span>{error}</span>}
        </span>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl  {...props}> <input {...input} {...restProps}/> </FormControl>
};

export const CreateField = (placeholder, name, component, validate, props = {}, text = "") => {
    return (
        <div className={s.space}>
            <Field autoComplete="off"
                   placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validate}
                   {...props}/>{text}
        </div>
    )
};


