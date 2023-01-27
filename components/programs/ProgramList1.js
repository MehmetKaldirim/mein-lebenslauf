import { useRouter } from "next/router";
import Link from "next/link";

import Card from "../ui/Card";
import classes from "./ProgramList.module.css";

function ProgramList1(props) {
  const router = useRouter();

  return (
    <Card>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Completed Time</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.programs.map((program) => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>{program.programName}</td>
              <td>{program.duration}</td>
              <td>{program.completedTime}</td>

              <td className={classes.action}>
                <Link href={`/programs/edit/${program.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={props.onRemoveItem.bind(this, program.id)}>
                  Delete
                </button>
                <Link href={`programs/${program.id}`}>
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

export default ProgramList1;
