import Link from "next/link";
import classes from './PrimaryButton.module.css'

const PrimaryButton = (props) => {

    return(
        <Link href={props.path} className={classes.primary}>{props.value}</Link>
    );
};

export default PrimaryButton;