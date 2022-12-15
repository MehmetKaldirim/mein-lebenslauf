import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React LebensLauf</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Programs</Link>
          </li>
          <li>
            <Link href="/newProgram">Add New Program</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
