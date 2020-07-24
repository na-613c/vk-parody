import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = ({id,name}) => {
    return (
        <NavLink key={id}
                 className={s.dialog}
                 activeClassName={s.active}
                 to={`/dialogs/${id}`}>
            {name}
        </NavLink>
    )
};

export default DialogItem;
