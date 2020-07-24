import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = () =>{
    return (
        <div>
            <img className={s.preloaderStyle} src={preloader} alt="loading"/>
        </div>
    )
};

export default Preloader;