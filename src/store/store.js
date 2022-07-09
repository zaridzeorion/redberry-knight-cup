import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import applicant from "./slices/applicantSlice";
import routesOpenClose from "./slices/routesOpenClose";

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

const reducer = combineReducers({
    applicant,
    routesOpenClose
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)
