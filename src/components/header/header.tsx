import * as React from "react";
import { Link} from "react-router-dom";
import {useState} from "react";
import {Message} from "../comp/message";
import {BurgerMenu} from "../comp/BurgerMenu";

import pen from '../../img/pen.png';
import triangle from '../../img/triangle.png';
import './header.scss';

interface Interface {
    user?:string
}

export const Header: React.FunctionComponent<Interface> = (props: Interface) => {

    const obj = [
        {name: 'Главная', icon: "home", id: 1},
        {name: 'Лучшее', icon: "updates", id: 2},
        {name: 'Чат', icon: "message", id: 4},
    ];

    const name = 'IT Blog';

    const [state, setState] = useState();
    const [user, setUser] = useState();

    const [mobileMenu, setMobileMenu] = useState(false);
    const [modalIsOn, setModalIsOn] = useState(false);

    const [userLogin, setUserLogin] = useState();
    const [userPass, setUserPass] = useState();

    const [userPhoto, setUserPhoto] = useState();
    const [url, setUrl] = useState();

    function getLogin(e: any) {
        const login = e.target.value;
        setUserLogin(login);
    }

    function getPass(e: any) {
        const pass = e.target.value;
        setUserPass(pass);
    }

    function getUrl(e: any) {
        const url = e.target.value;
        setUserPhoto(url);
    }

    function getUser(e: any) {
        e.preventDefault();
        setUser(userLogin);
        setModalIsOn(false);
        setUrl(userPhoto);
    }

    return(
        <React.Fragment>
            <form className={modalIsOn ? 'my-modal' : 'none'}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Логин</label>
                    <input required onChange={getLogin} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">Ваш логин </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Пароль</label>
                    <input required onChange={getPass} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Фотография</label>
                    <input onChange={getUrl} type="text" className="form-control" id="exampleInputPassword1"/>
                    <small id="emailHelp" className="form-text text-muted">Вставьте сюда url фотографии (не обязательно) </small>
                </div>
                <button
                    onClick={getUser}
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>

            <header className="header">
                <div className="header-title">
                    <img src={pen} alt="pen"/>
                    <h1>{name}</h1>
                </div>
                <nav className="menu">
                    <ul >
                        {obj.map((item, i) => (
                            <Link
                                className={state === i ? 'active' : ''}
                                onClick={(id) => {
                                    setState(i);
                                }}
                                key={item.id}
                                to={item.name}>
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </nav>
                {url ? <img src={url} className="user-photo-header" alt="img"/> : null }
                {user ? <p className={url ? 'user-header-withPhoto' : 'user-header'}>{user}</p> :
                    <button
                    onClick={() => modalIsOn ? setModalIsOn(false) : setModalIsOn(true)}
                    className={user ? 'none' : 'white-btn'}>
                    CREATE ACCOUNT
                </button>}
            </header>

            {/*мобильная версия*/}

            <header className="header-mobile"/>
            <div className={mobileMenu ? "mobile-menu" :  "mobile-menu_active"}>
                <div className="bgc-grey">
                    <div className="user-window">
                        {userPhoto ? <img src={userPhoto} className="user-photo" alt="#"/> : null}
                        <p className="user">{user}<span><img src={triangle} alt="triangle"/></span></p>
                    </div>
                    <nav className="menu">
                        <ul >
                            {obj.map((item, i) => (
                                <Link
                                    className={state === i ? 'active' : ''}
                                    onClick={(id) => {
                                        setState(i);
                                    }}
                                    key={item.id}
                                    to={item.name}>
                                <span>
                                    <Message opacity={0.8} name={item.icon} color={state === i ? '#4285F4' : '#000'}/>
                                </span>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                        <button onClick={() => {
                            setMobileMenu(false)
                        }} className="btn menu-btn">Назад</button>
                    </nav>
                </div>
            </div>
            <button
                onClick={() => {
                    setMobileMenu(true);
                 }}
                className={ mobileMenu ? "burger-menu_disabled" : "burger-menu" }>
                <BurgerMenu color='#4285F4' />
            </button>
        </React.Fragment>
    )

};
