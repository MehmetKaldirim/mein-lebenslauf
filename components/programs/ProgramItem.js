import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ProgramItem.module.css";

function ProgramItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    //to navigate programatically
    router.push("/programs/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <table className={classes.table}>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Completed Time</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>{props.title}</td>
              <td>{props.duration}</td>
              <td>{props.completedTime}</td>
              <td>{props.description}</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ProgramItem;
