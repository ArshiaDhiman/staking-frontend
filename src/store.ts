import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import stakingSlice from "./features/staking/stakingSlice";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";

const reducer = combineReducers({
    staking: stakingSlice,
});

export const store = createStore(reducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ThunkDispatch<RootState, void, Action>;
