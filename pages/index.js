import ProgramList from "../components/programs/ProgramList";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    title: "Java Core",
    lectures: [
      { lectureName: "Arrays", duration: 3 },
      { lectureName: "Encapsulation", duration: 1 },
    ],
    totalTime: 4,
    description: "This is a first program!",
  },
  {
    id: "p2",
    title: "React",
    lectures: [
      { lectureName: "useState", duration: 2 },
      { lectureName: "Redux", duration: 8 },
    ],
    totalTime: 10,
    description: "This is a second program!",
  },
];

function HomePage() {
  return <ProgramList programs={DUMMY_PROGRAMS} />;
}

export default HomePage;
