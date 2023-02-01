import React, { useReducer, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProgramForm from "../../components/users/NewUserForm";
import UserList from "../../components/users/UserList";
import UserList1 from "../../components/users/UserList1";
import ErrorModal from "../../components/ingredients/ErrorModal";
import SearchUser from "../../components/users/SearchUser";
import useHttp from "../../hooks/http";

const userReducer = (currentUsers, action) => {
  switch (action.type) {
    case "SET":
      return action.users;
    case "ADD":
      return [...currentUsers, action.user];
    case "DELETE":
      return currentUsers.filter((usr) => usr.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const UserHomePages = () => {
  const dispatchStore = useDispatch();
  const usersStore = useSelector((state) => state.currentUsers);
  const [users, dispatch] = useReducer(userReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_USER") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_USER") {
      dispatch({
        type: "ADD",
        user: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_USER") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_USER") {
      dispatch({
        type: "ADD",
        user: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredUsersHandler = useCallback((filteredUsers) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", users: filteredUsers });
  }, []);

  const removeUserHandler = useCallback(
    (userId) => {
      sendRequest(
        `http://172.20.10.2:8081/users/api/v3/${userId}`,
        "DELETE",
        null,
        userId,
        "REMOVE_USER"
      );
      console.log("here is id");
      console.log(userId);
    },
    [sendRequest]
  );

  const editUserHandler = useCallback(
    (user, userId) => {
      sendRequest(
        `http://172.20.10.2:8081/programs/api/v3/${userId}`,
        "PUT",
        user,
        userId,
        "REMOVE_USER"
      );
      console.log("here is id");
      console.log(userId);
    },
    [sendRequest]
  );

  const userList1 = useMemo(() => {
    return <UserList1 users={users} onRemoveItem={removeUserHandler} />;
  }, [users, removeUserHandler]);

  const programList = useMemo(() => {
    return (
      <UserList
        users={users}
        onRemoveItem={removeUserHandler}
        onEditItem={editUserHandler}
      />
    );
  }, [users, removeUserHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <section>
        <SearchUser onLoadUsers={filteredUsersHandler} />
        {userList1}
      </section>
    </div>
  );
};

export default UserHomePages;
