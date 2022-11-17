import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Alunos from "./components/Alunos";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Login} /> */}
                <Route path="/" exact component={Alunos} />
                <Route path="/alunos" component={Alunos} />
            </Switch>
        </BrowserRouter>
    );
}
