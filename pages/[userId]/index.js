// our-domain/programs
import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";
import Link from "next/link";

import { Fragment } from "react";
import ProgramDetail from "../../components/users/UserDetail";

const DUMMY_PROGRAMS = [
  {
    id: "u1",
    name: "Metho",
    lastname: "Kaldi",
    email: "methoKaldi@gmail.com",
  },
  {
    id: "u2",
    name: "Atilla",
    lastname: "Kiyak",
    email: "atillaKiyatYasar@gmail.com",
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
    <UserDetail
      id="u1"
      name="Metho"
      lastname="Kaldi"
      email="methoKaldi@gmail.com"
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
          programId: "u1",
        },
      },
      {
        params: {
          programId: "u2",
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
