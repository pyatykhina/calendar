import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Router.scss';
import Main from '../Main';
import Diary from '../Diary';
import Chat from '../Chat';
import Login from '../Login';

import mainIcon from '../../images/main.svg';
import diaryIcon from '../../images/diary.svg';
import chatIcon from '../../images/chat.svg';
import loginIcon from '../../images/login.svg';

const PageNotFound =() => <div>404 Not found</div>

export default () => (
    <BrowserRouter>
        <div className='wrapper'> 
            <div className='content'>
                <header className='header'>
                    <h1 className='header__logo'>Calendar</h1>
                    
                    <nav className='nav'>
                        <Link to='/'><img src={mainIcon} alt='main' className='nav__item' /></Link>
                        <Link to='/diary'><img src={diaryIcon} alt='diary' className='nav__item' /></Link>
                        <Link to='/chat'><img src={chatIcon} alt='chat' className='nav__item' /></Link>
                        <Link to='/login'><img src={loginIcon} alt='login' className='nav__item' /></Link>
                    </nav>
                </header>
            
                <Switch>
                    <Route exact path="/" component ={Main} />
                    <Route path="/diary" component ={Diary} />
                    <Route path="/chat" component ={Chat} />
                    <Route path="/login" component ={Login} />
                    <Route path="*" component ={PageNotFound} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);
