import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import githubUserSlice from "../features/github/githubUserSlice";

export const store = configureStore({
  reducer: {
    githubUser: githubUserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
