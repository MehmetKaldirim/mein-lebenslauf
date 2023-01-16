// our-domain.com/newProgram

import NewProgramForm from "../../../components/programs/NewProgramForm";

function NewProgramPage() {
  function addProgramHandler(enteredProgramData) {
    console.log(enteredProgramData);
  }

  return <NewProgramForm onAddProgram={addProgramHandler} />;
}

export default NewProgramPage;
