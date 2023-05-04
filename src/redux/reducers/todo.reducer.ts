import { createReducer } from '@reduxjs/toolkit';
import { addItemRes } from '../actions/todo.action';

const initialState = ['test', 'develop', 'maintain'] as string[];

const todoReducer = createReducer(initialState, (builder) => {
	builder.addCase(addItemRes, (state, action) => {
		return state.concat(action.payload);
	});
});

export default todoReducer;
