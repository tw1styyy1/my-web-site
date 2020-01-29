import * as React from "react";
import {FC, useState} from "react";

interface Interface {
    className: string
}

export const Modal: FC<Interface> = (props: Interface) => {

    const [userLogin, setUserLogin] = useState<string>();
    const [userPass, setUserPass] = useState<string>();

    function getLogin(e: any) {
        const login = e.target.value;
        setUserLogin(login);
    }

    function getPass(e: any) {
        const pass = e.target.value;
        setUserPass(pass);
    }

    function getUser(e: any) {
        e.preventDefault();
        console.log('login ', userLogin, ' пароль ', userPass );
    }

    return (
        <form className={props.className}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Login</label>
                <input onChange={getLogin} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">Enter your login </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={getPass} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button
                onClick={getUser}
                type="submit"
                className="btn btn-primary">Submit</button>
        </form>
    )

}