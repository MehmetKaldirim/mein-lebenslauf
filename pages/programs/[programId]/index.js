import { useRouter } from "next/router";

function ProgramDetail() {
  const router = useRouter();
  const programId = router.query.programId;
  return <h1>Details about program {programId} </h1>;
}

export default ProgramDetail;
