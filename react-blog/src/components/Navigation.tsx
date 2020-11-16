import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Post  from './Post';

const Route = () => {
    <Switch>
        <Route path="/post" component={Post} />
    </Switch>
};

export default Route;