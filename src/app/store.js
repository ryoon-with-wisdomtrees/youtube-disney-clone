import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// getDefaultMiddleware가 deprecated돼서
//https://redux-toolkit.js.org/api/getDefaultMiddleware 참고해서 변경함
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
