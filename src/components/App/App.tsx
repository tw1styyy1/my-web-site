import * as React from "react";
import {Header} from "../header/header";
import {HomePage} from "../homePage/homePage";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import './App.scss';

const data = [
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
    {
        img: 'https://cs10.pikabu.ru/post_img/2020/01/08/8/1578485928115931461.webp',
        title: 'Открутите это немедленно!',
        text: 'Наверняка между вами и внутренностями бытовой техники вставал винт с шлицем,' +
            ' отличным от крестового и прямого, и у вас не оказывалось под рукой отвертки подходящей формы. ' +
            'Этот пост о видах шлицев, зачем их столько, и почему крестовых отверток ДВА вида, которые' +
            ' не совместимы меж собой (хотя кажется иначе).'
    },
];

const App: React.FunctionComponent = () => {

    return(
        <Router>
            <Header/>
            <Redirect
                to={{
                    pathname: "/Главная",
                    state: { from: '/' }
                }}
            />
            <Route exect path="/Главная">
                <HomePage
                    data={data}/>
            </Route>
        </Router>
    )

};

export {App};
