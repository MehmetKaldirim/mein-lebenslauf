import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React LebensLauf</div>
      <nav>
        <ul>
          <li>
            <Link href="/users">All Users</Link>
          </li>
          <li>
            <Link href="/programs">All Programs</Link>
          </li>
          <li>
            <Link href="/programs/newProgram">Add New Program</Link>
          </li>
          <li>
            <Link href="/users/newUser">Add New User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
