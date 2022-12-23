import ProgramList from "../components/programs/ProgramList";
import React, { useState,useEffect } from 'react';
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
  const [movies,setMovies] = useState([]);

 /* function fetchPrograms(){
    fetch('http://172.20.10.3:8081/programs/api/v3').then(
      (response)=>{ return response.json();}).then((data)=>{
        const transformedPrograms = data.data.map(program=> {
        return {
          
          id : program.id,
          title : program.programName,
          duration : program.duration,
          completedTime : program.studyProgres,
          description : "Bu da description"

        }
        });
       setMovies(transformedPrograms) 
       });
  }
  console.log("here i fetched= " + movies)*/
  const fetchMoviesHandler = async()=>{
    try {
     
    const res = await axios.get('http://172.20.10.3:8081/users/api/v1')
    console.log("here we are = " + res.data);

    } catch (error) {
      console.log(error.message)
    }
  }

  
  useEffect(()=>{
    fetchMoviesHandler()
  }, [])

  return <ProgramList programs={DUMMY_PROGRAMS} />;
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
