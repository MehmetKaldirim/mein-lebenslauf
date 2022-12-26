import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function ProgramList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          firstName={user.name}
          lastName={user.lastname}
          email={user.email}
        />
      ))}
    </ul>
  );
}

export default ProgramList;
