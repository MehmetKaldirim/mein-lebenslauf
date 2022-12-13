import ProgramList from "../components/programs/ProgramList";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    title: "Java Core",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    lectures: [
      { lectureName: "useState", duration: 2 },
      { lectureName: "Redux", duration: 8 },
    ],
    totalTime: 10,
    description: "This is a second program!",
  },
];

function HomePage() {
  return <ProgramList>{DUMMY_PROGRAMS}</ProgramList>;
}

export default HomePage;
