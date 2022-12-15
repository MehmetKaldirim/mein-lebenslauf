import ProgramList from "../components/programs/ProgramList";

const DUMMY_PROGRAMS = [
  {
    title: "Java",
    duration: 333,
    completedTime: 10,
    description: "This is a second program!",
  },
  {
    title: "React",
    duration: 77,
    completedTime: 10,
    description: "This is a second program!",
  },
];

function HomePage() {
  return <ProgramList programs={DUMMY_PROGRAMS} />;
}

export default HomePage;
