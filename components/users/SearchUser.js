import React, { useState, useEffect, useRef } from "react";

import Card from "../ui/Card";
import ErrorModal from "../ingredients/ErrorModal";
import useHttp from "../../hooks/http";
import classes from "./SearchUser.module.css";

const SearchUser = React.memo((props) => {
  const { onLoadUsers } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const [isArray, setIsArray] = useState(true);

  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  let query;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter.length === 0) {
        query = "";
        sendRequest(`http://172.20.10.2:8081/users/api/v3`, "GET");
        setIsArray(true);
      } else {
        query = "/" + enteredFilter;
        sendRequest(`http://172.20.10.2:8081/users/api/v3${query}`, "GET");
        setIsArray(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedUsers = [];
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
            firstName: el.firstName,
            lastName: el.lastName,
            email: el.email,
          };
          loadedUsers.push(object);
          console.log(object);
        });
        onLoadUsers(loadedUsers);
        console.log("onLoadUsers for array");
        console.log(loadedUsers);
      } else {
        console.log("here is me");
        console.log(me);

        let object = {
          id: me.id,
          firstName: me.firatName,
          lastName: me.lastName,
          email: me.email,
        };
        loadedUsers.push(object);
        console.log("isArray false object");
        console.log(loadedUsers);
        onLoadPrograms(loadedUsers);
      }
    }
  }, [data, isLoading, error, onLoadUsers]);

  return (
    <Card>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <div className={classes.control}>
        <label>Filter by Program Email</label>
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

export default SearchUser;
