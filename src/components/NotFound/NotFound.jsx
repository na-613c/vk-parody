import React from 'react';
import s from "./NotFound.module.css"
import notFoundImg from "../../assets/images/not_found.gif"

const NotFound = () => {
    return (
        <div className={"shadow " + s.notFound}>
            <h1>Страница <br/>
                не существует </h1>
            <img src={notFoundImg} alt="404"/>
        </div>
    )
};

export default NotFound;
