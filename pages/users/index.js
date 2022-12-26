import UserList from "../../components/users/UserList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const USER_PROGRAMS = [
  {
    id: "u1",
    firstName: "Metho",
    lastName: "Kaldi",
    email: "methoKaldi@gmail.com",
  },
  {
    id: "u2",
    firstName: "Atilla",
    lastName: "Kiyak",
    email: "atillaKiyatYasar@gmail.com",
  },
];

function UserPage(props) {
  const [users, setUsers] = useState([]);
  let fetchUsers = [];

  const fetchApi = async () => {
    try {
      const res = axios
        .get("http://10.44.0.56:8081/users/api/v2")
        .then((res) => {
          const userList = res.data.data;

          setUsers(userList);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  users.forEach((el) => {
    let object = {
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      email: el.email,
    };
    fetchUsers.push(object);
  });

  console.log(fetchUsers);
  return <UserList users={fetchUsers} />;
}

export async function getStaticProps() {
  //fetch data from an API which code
  //we write here never end up in client side
  // the code here will never reach machines of our visitors

  return {
    props: {
      users: USER_PROGRAMS,
    },
    revalidate: 10,
  };
}

export default UserPage;
