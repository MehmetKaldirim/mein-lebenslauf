import { useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Card from "../ui/Card";
import classes from "./NewUserForm.module.css";
import { addUser } from "./userSlice";

function EditUserForm(props) {
  const dispatch = useDispatch();
  const params = useParams;

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
    };
    dispatch(
      addUser({
        id: "3",
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
      })
    );
    props.onAddUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" required id="firstName" ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" required id="lastName" ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Edit User</button>
        </div>
      </form>
    </Card>
  );
}

export default EditUserForm;
