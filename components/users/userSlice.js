import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, firstName, lastName, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
