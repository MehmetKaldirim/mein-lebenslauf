import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewProgramForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const durationInputRef = useRef();
  const completedTimeInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log("never arrived here");

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;
    const enteredCompletedTime = completedTimeInputRef.current.value;

    const programData = {
      createdBy: 1,
      createdTime: "2021-05-01T00:00:00",
      updatedBy: 1,
      updatedTime: "2021-05-01T00:00:00",
      isDeleted: false,
      programCode: enteredDescription,
      lecture: null,
      studyProgress: enteredCompletedTime,
      duration: enteredDuration,
      programName: enteredTitle,
      programStatus: "OPEN",
      userList: null,
      subjeytList: null,
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
