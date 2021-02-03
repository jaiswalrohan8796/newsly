import React from "react";
import classes from "./NewsCard.module.css";
import shareLogo from "../../assets/images/share.svg";
const NewsCard = (props) => {
    return (
        <div className={classes.card}>
            <div onClick={() => window.open(props.url, "_blank")}>
                <img
                    src={props.image}
                    alt={props.image}
                    className={classes.img}
                ></img>
                <p className={classes.source}>{props.source}</p>
                <p className={classes.title}>{props.title}</p>
            </div>

            <p className={classes.date}>
                {new Date(props.date).toDateString()}
            </p>
            <img
                className={classes.share}
                alt="share"
                src={shareLogo}
                onClick={() => shareHandler(props.title, props.url)}
            ></img>
        </div>
    );
};

function shareHandler(title, link) {
    if (navigator.share) {
        navigator
            .share({
                title: title,
                url: link,
            })
            .then()
            .catch((error) => console.log("Error sharing", error));
    } else {
        alert("Sharing failed due to some reasons");
    }
}

export default NewsCard;
