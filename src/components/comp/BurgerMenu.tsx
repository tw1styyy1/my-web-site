import * as React from "react";
import {FC} from "react";

interface Interface {
    color?:any
}

const BurgerMenu: FC<Interface> =(props:Interface) => {

    return(
        <svg width="18" height="12" viewBox="0 0 18 12" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.54" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill={props.color}/>
        </svg>

    )

};

export {BurgerMenu};

