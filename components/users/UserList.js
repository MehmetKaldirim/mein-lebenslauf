import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function ProgramList(props) {
  return (
    <ul className={classes.list}>
      {props.programs.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          lastname={user.lastname}
          email={user.email}
        />
      ))}
    </ul>
  );
}

export default ProgramList;
