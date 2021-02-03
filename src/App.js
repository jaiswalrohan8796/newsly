import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import classes from "../src/App.module.css";
import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
class App extends Component {
    state = {};
    render() {
        return (
            <div>
                <h1 className={classes.header}>Newsly</h1>
                <Navigator></Navigator>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;
