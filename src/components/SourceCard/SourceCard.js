import classes from "../SourceCard/SourceCard.module.css";
const SourceCard = (props) => {
    return (
        <div className={classes.card} onClick={() => window.open(props.url,"_blank")}>
            <div className={classes.header}>
                <p
                    style={{ backgroundColor: props.color }}
                    className={classes.name}
                >
                    {props.name}
                </p>
                <p className={classes.desc}>{props.description}</p>
            </div>
            <div
                style={{ backgroundColor: props.color }}
                className={classes.footer}
            >
                <p className={classes.category}>{props.category}</p>
                <p className={classes.country}>{props.country}</p>
            </div>
        </div>
    );
};

export default SourceCard;
