import { useRouter } from "next/router";

function ProgramDetail() {
  const router = useRouter();
  const programId = router.query.programId;
  //send a request to the backend API
  //to fetch the news item with NewsId

  return <h1>Details about program {programId} </h1>;
}

export default ProgramDetail;
