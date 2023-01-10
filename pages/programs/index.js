import ProgramList from "../../components/programs/ProgramList";
import NewProgramForm from "../../components/programs/ProgramList";
import React, { useReducer, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import useHttp from "../../hooks/http";

const programReducer = (currentPrograms, action) => {
  switch (action.type) {
    case "SET":
      return action.programs;
    case "ADD":
      return [...currentPrograms, action.program];
    case "DELETE":
      return currentPrograms.filter((program) => program.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};
function HomePage(props) {
  const [userPrograms, dispatch] = useReducer(programReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_PROGRAM") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_PROGRAM") {
      dispatch({
        type: "ADD",
        program: { id: data.id, ...reqExtra },
      });
    } else if (!isLoading && !error && reqIdentifer === "SHOW_PROGRAM") {
      dispatch({
        type: "SET",
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredProgramsHandler = useCallback((filteredPrograms) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", programs: filteredPrograms });
  }, []);

  const onAddProgramHandler = useCallback((program) => {
    sendRequest(
      "http://172.20.10.2:8081/programs/api/v3",
      "POST",
      JSON.stringify(program),
      program,
      "ADD_PROGRAM"
    );
  }, []);

  /* const removeIngredientHandler = useCallback(
    (programId) => {
      sendRequest(
        `http://172.20.10.2:8081/programs/api/v1/${programId}.json`,
        "DELETE",
        null,
        programId,
        "REMOVE_PROGRAM"
      );
    },
    [sendRequest]
  );*/

  const programList = useMemo(() => {
    const fetchPrograms = [];
    userPrograms.forEach((el) => {
      let object = {
        id: el.id,
        title: el.programName,
        duration: el.duration,
        completedTime: el.studyProgress,
        description: "No dessription",
      };
      fetchPrograms.push(object);
      console.log(object);
    });
    return <ProgramList programs={fetchPrograms} />;
  }, [userPrograms]);

  console.log("here we are ");
  console.log(data);
  return (
    <div>
      <NewProgramForm onAddProgram={onAddProgramHandler} loading={isLoading} />
      {programList}
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from an API which code
  //we write here never end up in client side
  // the code here will never reach machines of our visitors

  return {
    props: {
      programs: null,
    },
    revalidate: 10,
  };
}

export default HomePage;
