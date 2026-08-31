import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./RegisterSlice";
// 👇 Import your actual application types directly from your global store
import type { RootState } from "../../../store"; 

interface ProfileState {
  id?: number | string;
  name: string;
  surname: string;
  email: string;
  password: string;
  contact: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  contact: "",
  isLoading: false,
  error: null,
};

const getAuthenticatedUser = (state: RootState): string | null | number => {
 
  if (state.signIn?.currentUser?.id) {
    return state.signIn.currentUser.id;
  }
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    return parsedUser.id || null;
  }
  return null;
};

export const FetchProfileThunk = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>("profile/FetchProfileThunk", async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const userId = getAuthenticatedUser(state);

    if (!userId) throw new Error("No authenticated user found");

    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await response.json();
    return data as User;
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message);
  }
});

export const UpdateProfileThunk = createAsyncThunk<
  User,
  Partial<Omit<ProfileState, "isLoading" | "error">>,
  { state: RootState; rejectValue: string }
>(
  "profile/UpdateProfileThunk",
  async (updatedFields, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const userId = getAuthenticatedUser(state);

      if (!userId) throw new Error("No authenticated user found");

      const completeUserData = {
        ...updatedFields,
        id: userId,
      };

      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeUserData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));

      return data as User;
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProfileThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        FetchProfileThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.id = action.payload.id;
          state.name = action.payload.name || "";
          state.surname = action.payload.surname || "";
          state.contact = action.payload.contact || "";
          state.email = action.payload.email || "";
          state.password = action.payload.password || "";
        },
      )
      .addCase(FetchProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload || action.error.message || "Something went wrong";
      })

      .addCase(UpdateProfileThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        UpdateProfileThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.id = action.payload.id;
          state.name = action.payload.name || "";
          state.surname = action.payload.surname || "";
          state.contact = action.payload.contact || "";
          state.email = action.payload.email || "";
          state.password = action.payload.password || "";
        },
      )
      .addCase(UpdateProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload || action.error.message || "Failed to update profile";
      });
  },
});

export const { clearProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
