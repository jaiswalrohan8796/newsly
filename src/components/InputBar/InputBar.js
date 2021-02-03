import React, { Component } from "react";
import classes from "../InputBar/InputBar.module.css"
class InputBar extends Component {
    state = {
        searchQuery: "",
    };
    submitHandler = (e) => {
        e.preventDefault()
        this.props.searchHandler(this.state.searchQuery)
    }
    render() {
        return (
            <form className={classes.form} onSubmit={(e) => this.submitHandler(e)}>
                <input className={classes.input}
                    type="text"
                    name="searchQuery"
                    value={this.state.searchQuery}
                    onChange={(e) => {
                        this.setState({[e.target.name] : e.target.value});
                    }}
                ></input>
                <button className={classes.button} type="submit">
                    Search
                </button>
            </form>
        );
    }
}

export default InputBar;
