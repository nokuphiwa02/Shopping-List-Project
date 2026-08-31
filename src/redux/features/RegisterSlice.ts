import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  contact: string;
  confirmPassword: string;
}

interface UserState extends User {
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  id: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  contact: "",
  confirmPassword: "",
  isLoading: false,
  error: null,
};

export const RegisterThunk = createAsyncThunk(
  "users/RegisterThunk",
  async (newUser: Omit<User, "id">) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Contene-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error("failed to add user");
    }
    const data = await response.json();
    return data;
  },
);

export const RegisterSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    updateEmailAddress: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateContact: (state, action: PayloadAction<string>) => {
      state.contact = action.payload;
    },
    updateConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(RegisterThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(RegisterThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const {
  updateName,
  updateSurname,
  updateEmailAddress,
  updatePassword,
  updateContact,
  updateConfirmPassword,
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
