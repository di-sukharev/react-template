import { createSlice, createSelector } from "@reduxjs/toolkit";
import { request } from "../../api";
import { REQUEST_STATUS } from "../../api/constants";

/* 
  SLICE NAME
*/
export const SLICE_NAME = "AUTH";
export const SIGNUP_REDUCER_NAME = "SIGNUP";
export const LOGIN_REDUCER_NAME = "LOGIN";

/* 
  REDUCER
*/
const authSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [SIGNUP_REDUCER_NAME]: { status: REQUEST_STATUS.NONE },
    [LOGIN_REDUCER_NAME]: { status: REQUEST_STATUS.NONE },
  },
  reducers: {
    signupStart: (state, action) => {
      state[SIGNUP_REDUCER_NAME].status = REQUEST_STATUS.PROCESS;
    },
    signupSuccess: (state, action) => {
      state[SIGNUP_REDUCER_NAME].status = REQUEST_STATUS.SUCCESS;
    },
    signupFail: (state, action) => {
      state[SIGNUP_REDUCER_NAME].status = REQUEST_STATUS.FAILURE;
    },
    loginStart: (state, action) => {
      state[LOGIN_REDUCER_NAME].status = REQUEST_STATUS.PROCESS;
    },
    loginSuccess: (state, action) => {
      state[LOGIN_REDUCER_NAME].status = REQUEST_STATUS.SUCCESS;
    },
    loginFail: (state, action) => {
      state[LOGIN_REDUCER_NAME].status = REQUEST_STATUS.FAILURE;
    },
  },
});

/* 
  ACTION CREATORS
*/

export const {
  signupStart,
  signupSuccess,
  signupFail,
  loginStart,
  loginSuccess,
  loginFail,
} = authSlice.actions;
/* 
  SELECTORS
*/
export const signupSelector = state => state[SLICE_NAME][SIGNUP_REDUCER_NAME];
export const signupStatusSelector = createSelector(signupSelector, state => state.status);
export const loginSelector = state => state[SLICE_NAME][LOGIN_REDUCER_NAME];
export const loginStatusSelector = createSelector(loginSelector, state => state.status);

/* 
  THUNKS
*/
export const signupThunk = action => async dispatch => {
  dispatch(signupStart(action));
  try {
    const res = await request({ url: "/signup", method: "POST", body: action });
    dispatch(signupSuccess(res));
  } catch (err) {
    dispatch(signupFail(err));
  }
};

export const loginThunk = action => async dispatch => {
  dispatch(loginStart(action));
  try {
    const res = await request({ url: "/login", method: "POST", body: action });
    dispatch(loginSuccess(res));
  } catch (err) {
    dispatch(loginFail(err));
  }
};

/* 
  As the default we export reducer
*/
export default authSlice.reducer;
