import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStateInput } from "../../model/interfaces";

const initialState: IStateInput = {
	firstName: "",
	lastName: ""
};

export const stateSlice = createSlice({
	name: "stateInput",
	initialState,
	reducers: {
		getFirstName: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload;
		},
		getLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload;
		}
	},
});

export const stateInputActions = stateSlice.actions;
export const stateInputReducer = stateSlice.reducer;
