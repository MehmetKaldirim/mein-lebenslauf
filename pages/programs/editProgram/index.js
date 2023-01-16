// our-domain.com/newProgram
import { useRouter } from "next/router";

import EditProgramForm from "../../../components/programs/EditProgramForm";

function EditProgramPage() {
  const router = useRouter();

  function editProgramHandler(changedProgramData) {
    console.log(changedProgramData);
  }

  return <EditProgramForm onEditProgram={editProgramHandler} />;
}

export default EditProgramPage;
