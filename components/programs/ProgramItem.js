import Card from "../ui/Card";
import classes from "./ProgramItem.module.css";

function ProgramItem(props) {
  const listLectures = props.lectures.map((element) => {
    return (
      <ul type="disc">
        <li
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {element.lectureName}
        </li>
        <li>{element.duration}</li>
      </ul>
    );
  });
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h3>{props.totalTime}</h3>
        </div>
        <div className={classes.list}>{listLectures}</div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProgramItem;
