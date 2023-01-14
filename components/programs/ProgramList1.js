import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./ProgramList.module.css";

function ProgramList(props) {
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

  console.log("programs here in program list");

  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Completed Time</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.programs.map((program) => (
            <tr key={program.id}>
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

export default ProgramList;
