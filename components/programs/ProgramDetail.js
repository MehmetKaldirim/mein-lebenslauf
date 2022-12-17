import classes from "./ProgramDetail.module.css";

function ProgramDetail(props) {
  return (
    <section>
      <table className={classes.table}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Completed Time</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.duration}</td>
          <td>{props.completedTime}</td>
          <td>{props.description}</td>
        </tr>
      </table>
    </section>
  );
}

export default ProgramDetail;
