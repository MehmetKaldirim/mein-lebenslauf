import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewProgramForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const durationInputRef = useRef();
  const completedTimeInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;
    const enteredCompletedTime = completedTimeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const programData = {
      title: enteredTitle,
      duration: enteredDuration,
      completedTime: enteredCompletedTime,
      description: enteredDescription,
    };

    props.onAddProgram(programData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Program Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="duration">Total Duration</label>
          <input type="number" required id="duration" ref={durationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="completedTime">Covered Duration</label>
          <input
            type="number"
            required
            id="duration"
            ref={completedTimeInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Program</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
