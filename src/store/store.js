import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import createUserReducer from "./createUserSlice";
import authReducer from "./authSlice";

export default configureStore({
    reducer: {
        users: userReducer,
        modal: createUserReducer,
        auth: authReducer
    }
})