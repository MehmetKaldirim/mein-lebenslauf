import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewProgramForm.module.css";

function NewMeetupForm(props) {
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

    props.onAddProgram(userData);
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
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
