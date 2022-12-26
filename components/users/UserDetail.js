import classes from "./UserDetail.module.css";

function ProgramDetail(props) {
  return (
    <section>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>email</th>
          </tr>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProgramDetail;
