import React from 'react';
import { Switch, Route } from 'react-router';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import About from './pages/About';
import Images from './pages/Images';
import Home from './pages/Home';

import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/images">
                        <Images />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}