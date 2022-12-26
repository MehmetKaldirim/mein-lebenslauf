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
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{props.name}</td>
              <td>{props.lastname}</td>
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
