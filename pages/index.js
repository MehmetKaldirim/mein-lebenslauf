import ProgramList from "../components/programs/ProgramList";

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
  return <ProgramList programs={props.programs} />;
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
