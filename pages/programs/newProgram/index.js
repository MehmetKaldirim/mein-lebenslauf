// our-domain.com/newProgram
import { useRouter } from "next/router";

import NewProgramForm from "../../../components/programs/NewProgramForm";

function NewProgramPage() {
  const router = useRouter();

  function addProgramHandler(enteredProgramData) {
    console.log(enteredProgramData);
  }

  return <NewProgramForm onAddProgram={addProgramHandler} />;
}

export default NewProgramPage;
