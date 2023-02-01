import Link from "next/link";

import classes from "./MainNavigation.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

function MainNavigation() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React LebensLauf</div>
      {isAuth && (
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
              <Link href="/ingredients/">Ingredienst Dükkani</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MainNavigation;
