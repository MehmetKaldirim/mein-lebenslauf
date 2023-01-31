import { useSelector } from "react-redux";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Auth from "./Auth";

function Layout(props) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <MainNavigation />
      {!isAuth && <Auth />}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
