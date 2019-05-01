import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import CreateArticle from './components/CreateArticle'; 
import SingleArticle from './components/SingleArticle';
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Route exact path = "/" component = {Welcome} />
            <Route path = "/home" component = {Welcome} />
            <Route path = "/login" component = {Login} />
            <Route path = "/signup" component = {Signup} />
            <Route path = "/article/:slug" component = {SingleArticle} />
            <Route path = "/articles/create" component = {CreateArticle} />
            <Footer />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();