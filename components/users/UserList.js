import UserItem from "./UserItem";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <section className={classes.program}>
        <h2>Loaded Users</h2>
        <ul>
          {props.users.map((usr) => (
            <li key={usr.id} onClick={props.onRemoveItem.bind(this, usr.id)}>
              <span>{usr.firstName}</span>
              <span>{usr.lastName}</span>
              <span>{usr.email}x</span>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default UserList;
