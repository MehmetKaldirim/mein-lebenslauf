import { Fragment } from "react";
import classes from "./ProgramDetail.module.css";

function ProgramDetail(props) {
  return (
    <Fragment className={classes.detail}>
      <div>{listLectures}</div>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Fragment>
  );
}

export default ProgramDetail;
