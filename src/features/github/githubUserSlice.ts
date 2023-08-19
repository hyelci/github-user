import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterRequest, UserRepo, User } from "../../model/githubInterface";
import axios from "axios";

export interface GithubUserType {
  isLoading: boolean;
  isError: boolean;
  userDetails: User;
  userRepos: UserRepo[];
}

const initialState: GithubUserType = {
  isLoading: false,
  isError: false,
  userDetails: { id: 0, login: "", avatar_url: "", public_repos: 0 },
  userRepos: [],
};

export const getUserDetails = createAsyncThunk(
  "githubUser/getGithubUser",
  async (filter: FilterRequest) => {
    let URL = `https://api.github.com/users/${filter.query}`;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getUserRepos = createAsyncThunk(
  "githubUser/getUserRepos",
  async (username: string) => {
    let URL = `https://api.github.com/users/${username}/repos`;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      throw error;
    }
  }
);

export const githubUserSlice = createSlice({
  name: "githubUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.userDetails = payload;
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(getUserRepos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserRepos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.userRepos = payload;
      })
      .addCase(getUserRepos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default githubUserSlice.reducer;
