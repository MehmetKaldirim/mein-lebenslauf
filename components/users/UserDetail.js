import classes from "./UserDetail.module.css";

function ProgramDetail(props) {
  return (
    <section>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Lastname</th>
            <th>email</th>
          </tr>
          <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProgramDetail;
