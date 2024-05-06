import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
//State'e İsim Ata
  name: "user",
  initialState: {
    //State İçinde Olan Özellikleri Belirle
    currentUser: null,
    accessToken: null,
    isFetching: false,
    isLoggedIn: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      //Login Başarılıysa Gelen Kullanıcı Değerlerini CurrentUser İçine Ata
      state.currentUser = action.payload;
      console.log(action.payload);
      state.isLoggedIn = true
      state.accessToken = action.payload.accessToken
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout(state) {
      state.isLoggedIn = false
      state.accessToken = null
      state.currentUser = null
    },
    //
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure, updateUserStart, updateUserSuccess, updateUserFailure } = userSlice.actions;
export default userSlice.reducer;