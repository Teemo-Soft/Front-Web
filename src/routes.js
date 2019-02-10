import React, { Component } from 'react';
import Home from './Home'
import Ejemplo from './Ejemplo'

const routes = [
    {
        path: "/home",
        main: () => <Home />
    },
    {
        path: "/ejemplo",
        main: () => <Ejemplo />
    }
];




export default routes;