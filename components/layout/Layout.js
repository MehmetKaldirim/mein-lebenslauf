import { useSelector } from "react-redux";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Register from "./Register";
import Auth from "./Auth";

function Layout(props) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  //{!isAuth && <Auth />}
  return (
    <div>
      <MainNavigation />
      {!isAuth && <Register />}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
