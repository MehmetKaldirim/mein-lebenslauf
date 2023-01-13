import React, { useState, useEffect, useRef } from "react";

import Card from "../ui/Card";
import ErrorModal from "./ErrorModal";
import useHttp from "../../hooks/http";
import classes from "./Search.module.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? "" : "/" + enteredFilter;

        sendRequest(
          `http://172.20.10.4:8088/ingredients/api/v3${query}`,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      const medata = data.data;

      for (const key in medata) {
        loadedIngredients.push({
          id: key,
          title: medata[key].title,
          amount: medata[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

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

export default Search;
