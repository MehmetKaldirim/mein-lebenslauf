// our-domain/programs
import Link from "next/link";

import { Fragment } from "react";
import ProgramDetail from "../../components/programs/ProgramDetail";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    title: "Java",
    duration: 333,
    completedTime: 10,
    lectures: [
      { lectureName: "Arrays", duration: 3 },
      { lectureName: "Encapsulation", duration: 1 },
    ],
    description: "This is a second program!",
  },
];

function ProgramsDetail() {
  /* const listLectures = DUMMY_PROGRAMS.lectures.map((element) => {
    return (
      <ul type="disc">
        <li
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {element.lectureName}
        </li>
        <li>{element.duration}</li>
      </ul>
    );
  });
*/
  return (
    <ProgramDetail
      id="p1"
      title="ca va"
      duration="15"
      completedTime="12"
      description="sanane"
    />
  );
}

export async function getStaticPaths() {
  //fallback false means all id covers and true some
  return {
    fallback: false,
    paths: [
      {
        params: {
          programId: "p1",
        },
      },
      {
        params: {
          programId: "p2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single program detail
  const programId = context.params.programId;
  console.log("is this your id  = " + programId);
  return {
    props: {
      ProgramData: {
        id: programId,
        title: "ca va",
        duration: 15,
        completedTime: 12,
        description: "sanane",
      },
    },
  };
}
export default ProgramsDetail;
