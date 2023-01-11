import ProgramList from "../../components/programs/ProgramList";
import NewProgramForm from "../../components/programs/ProgramList";
import React, { useReducer, useEffect, useCallback, useMemo } from "react";

import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest(
      "http://172.20.10.2:8088/ingredienst/api/v1",
      "POST",
      JSON.stringify(ingredient),
      ingredient,
      "ADD_INGREDIENT"
    );
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `http://172.20.10.2:8088/ingredienst/api/v1/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div>
      <NewProgramForm onAddProgram={onAddProgramHandler} loading={isLoading} />
      {programList}
    </div>
  );
};

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
