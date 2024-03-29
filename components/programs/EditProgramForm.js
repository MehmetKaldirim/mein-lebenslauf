import { useRef, useReducer, useCallback, useEffect, useState } from "react";

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

function EditMeetupForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(props.program.programName);
  const [enteredDuration, setEnteredDuration] = useState(
    props.program.duration
  );
  const [enteredCompletedTime, setEnteredCompletedTime] = useState(
    props.program.studyProgress
  );

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

  useEffect(() => {
    setEnteredTitle(props.program.programName);
    setEnteredDuration(props.program.duration);
    setEnteredCompletedTime(props.program.studyProgress);
  }, [props]);

  function submitHandler(event) {
    event.preventDefault();

    console.log("never arrived here");
    console.log("here new pname");
    console.log(enteredTitle);

    const programData = {
      id: props.program.id,
      createdBy: 1,
      createdTime: "2021-05-01T00:00:00",
      updatedBy: 1,
      updatedTime: "2021-05-01T00:00:00",
      isDeleted: false,
      programCode: "FS01",
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
      "PUT",
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
          <input
            type="text"
            required
            id="title"
            value={enteredTitle}
            onChange={(e) => {
              setEnteredTitle(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="duration">Total Duration</label>
          <input
            type="number"
            required
            id="duration"
            value={enteredDuration}
            onChange={(e) => {
              setEnteredDuration(e.target.value);
            }}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="completedTime">Covered Duration</label>
          <input
            type="number"
            required
            id="studyProgres"
            value={enteredCompletedTime}
            onChange={(e) => {
              setEnteredCompletedTime(e.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button>Edit Program</button>
        </div>
      </form>
    </Card>
  );
}

export default EditMeetupForm;
