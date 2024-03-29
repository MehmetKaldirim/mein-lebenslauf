import ProgramList from "../../components/programs/ProgramList";
import React, { useState, useEffect, useCallback } from "react";
import Card from "../../components/ui/Card";
import NewProgramForm from "../../components/programs/NewProgramForm";
import ProgramTasak from "../../components/programs/ProgramBaltalist";

function ProgramsHomePage(props) {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProgramsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://172.20.10.4:8081/programs/api/v3");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedPrograms = data.data.map((el) => {
        return {
          id: el.id,
          title: el.programName,
          duration: el.duration,
          completedTime: el.studyProgress,
          description: "No dessription",
        };
      });
      setPrograms(transformedPrograms);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProgramsHandler();
  }, [fetchProgramsHandler]);
  console.log("programs here");
  console.log(programs);

  async function addProgramHandler(program) {
    const response = await fetch("http://172.20.10.2:8081/programs/api/v3", {
      method: "POST",
      body: JSON.stringify(program),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log("Here is data ");
    console.log(programData);
  }

  /*
  let content = <p>Found no movies.</p>;
  if (programs.length > 0) {
    content = <ProgramList programs={programs} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  } 
    
  */

  return (
    <Card>
      <NewProgramForm onAddProgram={addProgramHandler} />
      <ProgramList programs={programs} />
    </Card>
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

export default ProgramsHomePage;
