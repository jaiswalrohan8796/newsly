import React, { Component } from "react";
import classes from "./About.module.css";
import heart from "../../assets/images/heart.png";
class About extends Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <p className={classes.text}>
                    Made with
                    <span>
                        <img className={classes.img} src={heart} alt="heart"></img>
                    </span>
                </p>
                <p>by</p>
                <p className={classes.text}>Rohan Jaiswal</p>
            </div>
        );
    }
}

export default About;
