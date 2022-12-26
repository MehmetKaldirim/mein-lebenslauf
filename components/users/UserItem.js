import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./UserItem.module.css";

function UserItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    //to navigate programatically
    router.push("/users" + user.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <table className={classes.table}>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{props.firstName}</td>
              <td>{props.lastName}</td>
              <td>{props.email}</td>
            </tr>
          </tbody>
        </table>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
