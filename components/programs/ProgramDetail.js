import classes from "./ProgramDetail.module.css";
import Card from "../ui/Card";

function ProgramDetail(props) {
  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Completed Time</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.program.id}>
            <td>{props.program.id}</td>
            <td>{props.program.programName}</td>
            <td>{props.program.duration}</td>
            <td>{props.program.studyProgress}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export default ProgramDetail;
