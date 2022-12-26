// our-domain/programs
import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";
import Link from "next/link";

import { Fragment } from "react";
import UserDetail from "../../../components/users/UserDetail";

const USER_PROGRAMS = [
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

function UsersDetail() {
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
          userId: "u1",
        },
      },
      {
        params: {
          userId: "u2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single program detail
  const programId = context.params.userId;
  console.log("is this your id  = " + userId);
  return {
    props: {
      ProgramData: {
        id: userId,
        name: "Metho",
        lastname: "Kaldi",
        email: "methoKaldi@gmail.com",
      },
    },
  };
}
export default UsersDetail;
