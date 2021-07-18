import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage';
import NewPostPage from './components/newPostPage';
import Header from './common/header';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/newPost/:seq" component={NewPostPage} />
                <Route component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
