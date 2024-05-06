import { loginFailure, loginStart, loginSuccess,registerStart, registerSuccess, registerFailure, updateUserStart, updateUserSuccess, updateUserFailure } from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    //Login Success' se Gelen Veriyi UserRedux İçindeki LoginSuccess Bölümüne İletip Veriyi İşle ve Değerler Statelere Atansın
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await userRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};



export const getall = async (dispatch, user, id) => {
  try {
    const res = await userRequest.post(`/users/user/${id}`,user);
  } catch (err) {
  }
};

export const logout = async (dispatch, user) => {
  try {
    const res = await userRequest.post("/auth/logout", user);
    dispatch(logout(res.data));
  } catch{}
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/users/${id}`,user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};