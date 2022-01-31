import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Home from "./core/Home";

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact ><Home /></Route>
                </Switch>
            </Router>
        </>
    );
}
