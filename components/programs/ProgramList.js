import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ProgramList.module.css";

function ProgramItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    //to navigate programatically
    router.push("/programs/" + props.id);
  }
  function onClickEditHandler() {
    //to navigate programatically
    router.push("/programs/" + props.id);
  }
  function onClickDeleteHandler() {
    //to navigate programatically
    router.push("/programs/" + props.id);
  }
  //<li className={classes.item}>
  return (
    <Card>
      <table className={classes.table}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Completed Time</th>
          <th>ACTIONS</th>
        </tr>
        <tbody>
          {props.programs.map((program) => (
            <tr>
              <td>{program.id}</td>
              <td>{program.title}</td>
              <td>{program.duration}</td>
              <td>{program.completedTime}</td>

              <td className={classes.action}>
                <button onClick={onClickEditHandler}>Edit</button>
                <button onClick={onClickDeleteHandler}>Delete</button>
                <button onClick={showDetailsHandler}>Show Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default ProgramItem;
