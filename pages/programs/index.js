import React, { useReducer, useEffect, useCallback, useMemo } from "react";

import ProgramForm from "../../components/programs/NewProgramForm";
import ProgramList from "../../components/programs/ProgramList";
import ProgramList1 from "../../components/programs/ProgramList1";
import ErrorModal from "../../components/ingredients/ErrorModal";
import SearchProgram from "../../components/programs/SearchProgram";
import useHttp from "../../hooks/http";

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

const ProgramHomePages = () => {
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

  const filteredProgramsHandler = useCallback((filteredPrograms) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", programs: filteredPrograms });
  }, []);

  const removeProgramHandler = useCallback(
    (programId) => {
      sendRequest(
        `http://172.20.10.2:8081/programs/api/v3/${programId}`,
        "DELETE",
        null,
        programId,
        "REMOVE_PROGRAM"
      );
      console.log("here is id");
      console.log(programId);
    },
    [sendRequest]
  );

  const editProgramHandler = useCallback(
    (program, programId) => {
      sendRequest(
        `http://172.20.10.2:8081/programs/api/v3/${programId}`,
        "PUT",
        program,
        programId,
        "REMOVE_PROGRAM"
      );
      console.log("here is id");
      console.log(programId);
    },
    [sendRequest]
  );

  const programList1 = useMemo(() => {
    return (
      <ProgramList1
        programs={userPrograms}
        onRemoveItem={removeProgramHandler}
      />
    );
  }, [userPrograms, removeProgramHandler]);

  const programList = useMemo(() => {
    return (
      <ProgramList
        programs={userPrograms}
        onRemoveItem={removeProgramHandler}
        onEditIte
        m={editProgramHandler}
      />
    );
  }, [userPrograms, removeProgramHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <section>
        <SearchProgram onLoadPrograms={filteredProgramsHandler} />
        {programList1}
      </section>
    </div>
  );
};

export default ProgramHomePages;
