import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Diary from '../Diary';
import Chat from '../Chat';
import Login from '../Login';

const PageNotFound =() => <div>404 Not found</div>

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component ={Login} />
            <Route path="/main" component ={Main} />
            <Route path="/diary" component ={Diary} />
            <Route path="/chat" component ={Chat} />
            <Route path="*" component ={PageNotFound} />
        </Switch>
    </BrowserRouter>
);
