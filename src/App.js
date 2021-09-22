import React from "react";
import Index from "pages/index";
import Page1 from "pages/page1";
import Page2 from "pages/page2";
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
			<Route exact path='/1' component={Page1}/>
			<Route exact path='/2' component={Page2}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
