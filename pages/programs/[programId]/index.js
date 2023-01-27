import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/http";
import ProgramDetail from "../../../components/programs/ProgramDetail";
function ProgramDetailPage() {
  const router = useRouter();

  // const [programId, setProgramId] = useState();
  const [program, setProgram] = useState([]);
  const { isLoading, data, error, sendRequest } = useHttp();
  const programId = router.query.programId;
  //send a request to the backend API

  //to fetch the news item with NewsId

  useEffect(() => {
    if (programId) {
      sendRequest(
        `http://172.20.10.2:8081/programs/api/v3/programId/${programId}`,
        "GET"
      );
    }
  }, [sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setProgram(data.data);
    }
  }, [data]);

  return <ProgramDetail program={program} />;
}

export default ProgramDetailPage;
