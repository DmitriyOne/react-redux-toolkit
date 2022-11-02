import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { todoReducer } from "./reducers/todoSlice";
import { stateInputReducer } from "./reducers/stateSlice";
import { usersAPI } from "../services";

const rootReducer = combineReducers({
	stateInput: stateInputReducer,
	todo: todoReducer,
	[usersAPI.reducerPath]: usersAPI.reducer,
});

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	blacklist: [usersAPI.reducerPath]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				],
			},
		}).concat(usersAPI.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
