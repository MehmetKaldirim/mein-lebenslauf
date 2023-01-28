import { useRouter } from "next/router";
import Link from "next/link";

import Card from "../ui/Card";
import classes from "./UserList1.module.css";

function UserList1(props) {
  const router = useRouter();

  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>

              <td className={classes.action}>
                <Link href={`/users/edit/${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={props.onRemoveItem.bind(this, user.id)}>
                  Delete
                </button>
                <Link href={`users/${user.id}`}>
                  <button>Show Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default UserList1;
