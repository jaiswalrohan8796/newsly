import React from 'react';
import { Link} from 'react-router-dom'
import classes from './Navigator.module.css'

const Navigator = (props) => {
    return (
        <div className={classes.div}>
            <ul className={classes.wrapper}>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/search" className={classes.link}>Search</Link>
                <Link to="/about" className={classes.link}>About</Link>
            </ul>
        </div>
    )
}

export default Navigator;