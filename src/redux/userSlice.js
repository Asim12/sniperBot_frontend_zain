import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    loginLoading: false, // Separate loading state for login
    signupLoading: false, // Separate loading state for signup
  },
  reducers: {
    setUser: (state, action) => {
      console.log('action payload is ', action.payload);
      state.first_name = action.payload.verify.first_name;
      state.last_name = action.payload.verify.last_name;
      state.email = action.payload.verify.email;
      state.role = action.payload.verify.role;
      state.loginLoading=false
    },
    setSignupUser: (state) => {
      state.signupLoading=false
      // Handle the response for signup as needed
      // Update the state with the relevant information from the signup response
    },

    startLoginLoading: (state) => {
      state.loginLoading = true; // Set login loading to true when starting login operation
    },
    stopLoginLoading: (state) => {
      state.loginLoading = false; // Set login loading to false when stopping login operation
    },
    startSignupLoading: (state) => {
      state.signupLoading = true; // Set signup loading to true when starting signup operation
    },
    stopSignupLoading: (state) => {
      state.signupLoading = false; // Set signup loading to false when stopping signup operation
    },
  },
});

export const { setUser, setSignupUser,startLoginLoading,stopLoginLoading,startSignupLoading,stopSignupLoading } = userSlice.actions;

export default userSlice.reducer;