import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink key={props.id} activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            <hr/>
        </div>
    )
};

export default DialogItem;
