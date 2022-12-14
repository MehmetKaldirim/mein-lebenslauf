import ProgramList from "../components/programs/ProgramList";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  /* const [programs, setPrograms] = useState([]);
  let fetchPrograms = [];
  //const fetchPrograms = [];
  /*const fetchPrograms = async () => {
    const res = await fetch("http://172.20.10.2:8081/programs/api/v3");

    console.log("here nothing " + JSON.stringify(res.data.data));
  };
  console.log("here i fetched= " + programs);
  const fetchApi = async () => {
    try {
      const res = axios
        .get("http://10.44.0.56:8081/programs/api/v3")
        .then((res) => {
          const programList = res.data.data;

          setPrograms(programList);
        });

      /*console.log("first all data = " + res.data);

      console.log("here array data " + res.data.data);
      for (let i = 1; i < res.data.data.length; i++) {
        let program = {
          id: res.data.data[i].id,
          title: res.data.data[i].programName,
          duration: res.data.data[i].duration,
          completedTime: res.data.data[i].studyProgress,
          descriprion: "Is nothing",
        };

        console.log(i + "nci program " + program.title);
        fetchPrograms.push(program);
      }

      console.log("here new object = " + fetchPrograms);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log("for each");
  programs.forEach((el) => {
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

  console.log("here for loop");
  programs.forEach((el) => {
    let object = {
      id: el.id,
      title: el.programName,
      duration: el.duration,
      completedTime: el.studyProgress,
      description: "No dessription",
    };
    console.log(object);
  });

  console.log("that is object array");
  console.log(fetchPrograms);*/
  return <ProgramList programs={props.programs} />;
}

export async function getStaticProps() {
  //fetch data from an API which code
  //we write here never end up in client side
  // the code here will never reach machines of our visitors
  const [userPrograms, dispatch] = useReducer(programReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_PROGRAM") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_PROGRAM") {
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

  const addIngredientHandler = useCallback((program) => {
    sendRequest(
      "http://172.20.10.2:8081/programs/api/v3",
      "POST",
      JSON.stringify(program),
      program,
      "ADD_PROGRAM"
    );
  }, []);

  const removeIngredientHandler = useCallback(
    (programId) => {
      sendRequest(
        `http://172.20.10.2:8088/ingredienst/api/v1/${programId}.json`,
        "DELETE",
        null,
        programId,
        "REMOVE_PROGRAM"
      );
    },
    [sendRequest]
  );

  return {
    props: {
      programs: userPrograms,
    },
    revalidate: 10,
  };
}

export default HomePage;
