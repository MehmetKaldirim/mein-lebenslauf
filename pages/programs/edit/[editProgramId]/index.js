// our-domain.com/newProgram
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useHttp from "../../../../hooks/http";

import EditProgramForm from "../../../../components/programs/EditProgramForm";

function EditProgramPage() {
  const [program, setProgram] = useState([]);
  const { isLoading, data, error, sendRequest } = useHttp();
  const router = useRouter();
  const programId = router.query.editProgramId;

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

  //<EditProgramForm onEditProgram={editProgramHandler} />

  return <EditProgramForm program={program} />;
}

export default EditProgramPage;
