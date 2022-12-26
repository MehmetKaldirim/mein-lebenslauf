// our-domain.com/newProgram
import { useRouter } from "next/router";

import NewUserForm from "../../../components/users/NewUserForm";

function NewUserPage() {
  const router = useRouter();

  function addUserHandler(enteredUserData) {
    console.log(enteredUserData);
  }

  return <NewUserForm onAddUser={addUserHandler} />;
}

export default NewUserPage;
