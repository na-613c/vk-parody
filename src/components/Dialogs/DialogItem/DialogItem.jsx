import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
            <NavLink key={props.id} className={s.dialog} activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    )
};

export default DialogItem;
