import React from 'react';
import Home from './Home'
import Ejemplo from './Ejemplo'

const routes = [
    {
        path: "/",
        name: "home",
        exact: true,
        main: () => <Home />,
        icon: "home"
    },
    {
        path: "/ejemplo",
        name: "ejemplo",
        main: () => <Ejemplo />,
        icon: "gamepad"
    },
];




export default routes;