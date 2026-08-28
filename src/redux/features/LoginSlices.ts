import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type User } from "./RegisterSlice";

interface LoginState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  currentUser: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const LoginThunk = createAsyncThunk(
  "users/LoginThunk",
  async (
    login: { email: string; password: Required<User>["password"] },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        // `http://localhost:3000/users?email=${encodeURIComponent(login.email)}&password=${encodeURIComponent(login.password)}`,
        `http://localhost:3000/users?email=${login.email}&password=${login.password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to connect to the server");
      }

      const users: User[] = await response.json();

      const user = users.find((u) => u.password === login.password);

      if (!user) {
        return rejectWithValue("Invalid email or password.");
      }

      localStorage.setItem("user",JSON.stringify(user))
      return user;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return rejectWithValue(errorMessage);
    }
  },
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateEmailAddress: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.email = action.payload;
      }
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.password = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(LoginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    });
    builder.addCase(LoginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const {updateEmailAddress,updatePassword} = LoginSlice.actions;

export default LoginSlice.reducer;
