import React from "react";
import Index from "pages/index";
import Page7 from "pages/page7";
import Page8 from "pages/page8";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/7' component={Page7}/>
			<Route exact path='/8' component={Page8}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
