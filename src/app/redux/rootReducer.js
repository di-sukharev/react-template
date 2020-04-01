import authReducer, { SLICE_NAME as AUTH_SLICE_NAME } from "../core/auth/slice";

const rootReducer = {
  [AUTH_SLICE_NAME]: authReducer,
};

export default rootReducer;
