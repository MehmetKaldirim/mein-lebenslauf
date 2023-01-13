import ProgramList from "../../components/programs/ProgramList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    title: "Java",
    duration: 333,
    lectures: [
      { lectureName: "Arrays", duration: 3 },
      { lectureName: "Encapsulation", duration: 1 },
    ],
    completedTime: 10,
    description: "This is a second program!",
  },
  {
    id: "p2",
    title: "React",
    duration: 77,
    completedTime: 10,

    lectures: [
      { lectureName: "useEffect", duration: 3 },
      { lectureName: "Redux", duration: 18 },
    ],
    description: "This is a second program!",
  },
];

function HomePage(props) {
  const [programs, setPrograms] = useState([]);
  let fetchPrograms = [];

  const fetchApi = async () => {
    try {
      const res = axios
        .get("http://172.20.10.2:8081/programs/api/v3")
        .then((res) => {
          const programList = res.data.data;

          setPrograms(programList);
        });
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
  console.log(fetchPrograms);
  return <ProgramList programs={fetchPrograms} />;
}

export async function getStaticProps() {
  //fetch data from an API which code
  //we write here never end up in client side
  // the code here will never reach machines of our visitors

  return {
    props: {
      programs: DUMMY_PROGRAMS,
    },
    revalidate: 10,
  };
}

export default HomePage;
