import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import applicant from "./slices/applicantSlice";
import routesOpenClose from "./slices/routesOpenClose";

const reducer = combineReducers({
    applicant,
    routesOpenClose
});

const store = configureStore({
    reducer,
});

export default store;
