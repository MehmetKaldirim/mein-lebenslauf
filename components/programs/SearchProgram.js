import React, { useState, useEffect, useRef } from "react";

import Card from "../ui/Card";
import ErrorModal from "../ingredients/ErrorModal";
import useHttp from "../../hooks/http";
import classes from "./SearchProgram.module.css";

const SearchProgram = React.memo((props) => {
  const { onLoadPrograms } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isArray, setIsArray] = useState(true);

  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  let query;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter.length === 0) {
        query = "";
        sendRequest(`http://172.20.10.2:8081/programs/api/v3`, "GET");
        setIsArray(true);
      } else {
        query = "/" + enteredFilter;
        sendRequest(`http://172.20.10.2:8081/programs/api/v3${query}`, "GET");
        setIsArray(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedPrograms = [];
      const me = data.data;

      /*for (const key in medata) {
        loadedPrograms.push({
          id: key,
          programName: medata[key].programName,
          duration: medata[key].duration,
          programCode: medata[key].programCode,
        });
      }
   */
      if (isArray) {
        me.forEach((el) => {
          let object = {
            id: el.id,
            programCode: el.programCode,
            programName: el.programName,
            duration: el.duration,
            completedTime: el.studyProgress,
          };
          loadedPrograms.push(object);
          console.log(object);
        });
        onLoadPrograms(loadedPrograms);
        console.log("onLoadPrograms for array");
        console.log(loadedPrograms);
      } else {
        console.log("here is me");
        console.log(me);

        let object = {
          id: me.id,
          programCode: me.programCode,
          programName: me.programName,
          duration: me.duration,
          completedTime: me.studyProgress,
        };
        loadedPrograms.push(object);
        console.log("isArray false object");
        console.log(loadedPrograms);
        onLoadPrograms(loadedPrograms);
      }
    }
  }, [data, isLoading, error, onLoadPrograms]);

  return (
    <Card>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <div className={classes.control}>
        <label>Filter by Program Code</label>
        {isLoading && <span>Loading...</span>}
        <input
          ref={inputRef}
          type="text"
          value={enteredFilter}
          onChange={(event) => setEnteredFilter(event.target.value)}
        />
      </div>
    </Card>
  );
});

export default SearchProgram;
