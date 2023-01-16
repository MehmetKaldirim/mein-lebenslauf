import { useRef, useReducer, useCallback, useEffect } from "react";

import Card from "../ui/Card";
import useHttp from "../../hooks/http";
import classes from "./NewProgramForm.module.css";

const programReducer = (currentPrograms, action) => {
  switch (action.type) {
    case "SET":
      return action.programs;
    case "ADD":
      return [...currentPrograms, action.program];
    case "DELETE":
      return currentPrograms.filter((prg) => prg.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

function NewMeetupForm(props) {
  const [userPrograms, dispatch] = useReducer(programReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_PROGRAM") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_PROGRAM") {
      dispatch({
        type: "ADD",
        program: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

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
      subjectList: null,
    };
    addProgramHandler(programData);
  }

  const addProgramHandler = useCallback((programData) => {
    sendRequest(
      "http://172.20.10.2:8081/programs/api/v3",
      "POST",
      JSON.stringify(programData),
      programData,
      "ADD_PROGRAM"
    );
  }, []);

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
