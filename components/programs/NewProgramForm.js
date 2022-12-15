import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewProgramForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const lecturesInputRef = useRef();
  const durationInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredLecture = lecturesInputRef.current.value;
    const enteredDuration = durationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const programData = {
      title: enteredTitle,
      lectures: enteredLecture,
      duration: enteredDuration,
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
          <label htmlFor="image">Program Lectures</label>
          <input type="text" required id="lectures" ref={lecturesInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="duration">Duration</label>
          <input type="number" required id="duration" ref={durationInputRef} />
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
