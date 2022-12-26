import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ))}
    </ul>
  );
}

export default UserList;
