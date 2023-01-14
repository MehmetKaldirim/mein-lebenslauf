import React, { useState, useEffect, useRef } from "react";

import Card from "../ui/Card";
import ErrorModal from "../ingredients/ErrorModal";
import useHttp from "../../hooks/http";
import classes from "./SearchProgram.module.css";

const SearchProgram = React.memo((props) => {
  const { onLoadPrograms } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? "" : "/" + enteredFilter;

        sendRequest(`http://172.20.10.2:8081/programs/api/v3${query}`, "GET");
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedPrograms = [];
      const medata = data.data;

      for (const key in medata) {
        loadedPrograms.push({
          id: key,
          programName: medata[key].programName,
          duration: medata[key].duration,
        });
      }
      onLoadPrograms(loadedPrograms);
      console.log("onLoadPrograms");
      console.log(loadedPrograms);
    }
  }, [data, isLoading, error, onLoadPrograms]);

  return (
    <Card>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <div className={classes.control}>
        <label>Filter by Title</label>
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
